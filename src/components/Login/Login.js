import React, {
  useEffect,
  useState,
  useReducer,
  useContext,
  useRef,
} from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.val,
        isValid: action.val.includes("@"),
      };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
      return { value: "", isValid: false };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_PASSWORD":
      return {
        value: action.val,
        isValid: action.val.trim().length > 6,
      };
    case "PASSWORD_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 6,
      };
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => clearTimeout(unsubscribe);
  }, [setFormIsValid, emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailIsValid && passwordIsValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.activate();
    } else {
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

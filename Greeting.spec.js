import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting />", () => {
  test("renders Hello world as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
        //..nothing
    //Assertion
    const helloWorldElement = screen.getByText("Hello world", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you!' if the button was not clicked", () => {
    render(<Greeting />);
    const output = screen.getByText("good to see you", { exact: false });
    expect(output).toBeInTheDocument();
  });

  test("renders 'Clicked !!' if the button was clicked", () => {
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assertion
    const outputText = screen.getByText("Clicked !!");
    expect(outputText).toBeInTheDocument();
  });

  test("doesnt not renders paragraph 'good to see you' when the button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputText = screen.queryByText(
      "It's good to see you! Click this button right below",
      { exact: true }
    );
    expect(outputText).not.toBeInTheDocument();
  });
});

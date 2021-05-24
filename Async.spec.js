import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async />", () => {
  test("render posts if req succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    render(<Async />);
    const liItem = await screen.findAllByRole("listitem");
    expect(liItem).not.toHaveLength(0);
  });
});

import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

describe("Login Page", () => {
  it("should display Welcome! text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const element = screen.getByText("Welcome!");
    expect(element).not.toBeNull();
    expect(element.className).toEqual("welcomeText");
  });

  it("left side and right side should be side by side and equal width", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const leftElement = screen.getByTestId("left-side");
    const rightElement = screen.getByTestId("right-side");

    expect(leftElement).not.toBeNull();
    expect(rightElement).not.toBeNull();
    expect(leftElement?.clientWidth).toEqual(rightElement?.clientWidth);
  });

  it("Entire Login Screen Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

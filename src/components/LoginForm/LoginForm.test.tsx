import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { toast } from "react-toastify";

import LoginForm from "./LoginForm";

describe("Login Form Component Test", () => {
  it("Logging in with valid credentials", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    // Mock the success toast function
    toast.success = jest.fn();

    // Fill in the email and password fields
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "example@example.com" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "password123" },
    });

    // Trigger the login button click
    fireEvent.click(screen.getByRole("button", { name: "LOG IN" }));

    // Assert that the success toast is displayed
    expect(toast.success).toHaveBeenCalledWith("Login Successful");
  });

  it("Logging in with invalid credentials", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    // Mock the error toast function
    toast.error = jest.fn();

    // Fill in the email and password fields
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "" },
    });

    // Trigger the login button click
    fireEvent.click(screen.getByRole("button", { name: "LOG IN" }));

    // Assert that the error toast is displayed
    expect(toast.error).toHaveBeenCalledWith("Please fill all fields");
  });

  it("Login Form Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

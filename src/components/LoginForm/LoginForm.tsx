import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./LoginForm.styles.scss";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) toast.error("Please fill all fields");
    else {
      toast.success("Login Successful");
      navigate("users");
    }
  };

  return (
    <div className="w-100">
      <div className="welcomeText">Welcome!</div>

      <div className="welcomeText2">Enter details to login.</div>

      <div className="minWidth w-lg-100">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            data-testid="email"
          />
        </div>

        <div className="form-group">
          <div className="input-group my-4 form-control p-0">
            <input
              type={!showPassword ? "password" : "text"}
              className="form-control border-0"
              placeholder="Password"
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              data-testid="password"
            />
            <span
              className="input-group-text bg-white showText m-0 border-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? "SHOW" : "HIDE"}
            </span>
          </div>
        </div>

        <div className="forgotPassword">FORGOT PASSWORD?</div>

        <button
          type="submit"
          className="w-100 submitButton text-white"
          onClick={() => handleSubmit()}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

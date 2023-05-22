import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import images from "../../assets/images";
import "./Login.styles.scss";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="loginBody">
      <div className="row vh-100">
        <div
          className="col-md-6 d-flex align-items-center justify-content-center px-5"
          style={{ backgroundColor: "#FBFBFB" }}
        >
          <div className="d-flex align-items-start position-absolute logoImage">
            <img src={images.union} alt="Union" className="unionImage" />
            <img src={images.lendsqr} alt="Lendsqr" className="lendsqrImage" />
          </div>

          <img
            src={images.welcome}
            alt="Welcome"
            className="welcomeImage img-fluid"
          />
        </div>

        <div
          className="col-md-6 d-flex align-items-center"
          style={{ paddingLeft: "100px" }}
        >
          <div>
            <div className="welcomeText">Welcome!</div>

            <div className="welcomeText2">Enter details to login.</div>

            <div className="minWidth">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <div className="input-group my-4">
                  <input
                    type={!showPassword ? "password" : "text"}
                    className="form-control border-right-0"
                    placeholder="Password"
                    aria-label="password"
                  />
                  <span
                    className="input-group-text bg-white showText m-0 border-left-0"
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
                onClick={() => navigate("users")}
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

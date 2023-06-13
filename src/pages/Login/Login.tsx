import { LoginForm } from "components/LoginForm";

import images from "../../assets/images";
import "./Login.styles.scss";

const LogIn = () => {
  return (
    <div className="loginBody">
      <div className="grid-2 vh-100" style={{ gridGap: 0 }}>
        <div
          className="d-flex align-items-center justify-content-center px-0 d-med-none"
          data-testid="left-side"
        >
          <div className="leftLoginSide">
            <div className="d-flex align-items-start position-absolute logoImage">
              <img src={images.union} alt="Union" className="unionImage" />
              <img
                src={images.lendsqr}
                alt="Lendsqr"
                className="lendsqrImage"
              />
            </div>

            <img
              src={images.welcome}
              alt="Welcome"
              className="welcomeImage img-fluid"
            />
          </div>
        </div>

        <div className="d-none align-items-start position-absolute logoImage d-med-flex">
          <img src={images.union} alt="Union" className="unionImage" />
          <img src={images.lendsqr} alt="Lendsqr" className="lendsqrImage" />
        </div>

        <div
          className="d-flex align-items-center justify-content-center-lg loginFormContainer w-100"
          data-testid="right-side"
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LogIn;

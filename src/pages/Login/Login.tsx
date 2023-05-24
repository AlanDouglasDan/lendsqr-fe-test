import LoginForm from "components/LoginForm/LoginForm";

import images from "../../assets/images";
import "./Login.styles.scss";

const LogIn = () => {
  return (
    <div className="loginBody">
      <div className="row vh-100">
        <div
          className="col-md-6 d-flex align-items-center justify-content-center px-5"
          style={{ backgroundColor: "#fcfcfc" }}
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LogIn;

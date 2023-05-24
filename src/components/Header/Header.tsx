import { Link } from "react-router-dom";

import images from "../../assets/images";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header row m-0">
      <div className="col-md-6 d-flex align-items-center justify-content-between px-0">
        <Link to="/" className="no-underline text-dark">
          <div className="d-flex align-items-start">
            <img src={images.union} alt="Union" className="unionImage" />
            <img src={images.lendsqr} alt="Lendsqr" className="lendsqrImage" />
          </div>
        </Link>

        <div className="input-group my-4">
          <input
            type="text"
            className="form-control border-right-0"
            placeholder="Search for anything"
            aria-label="search"
          />
          <span className="input-group-text bg-theme text-white border-0">
            <i className="fa fa-search" />
          </span>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-center justify-content-end px-0">
        <span className="docsText cursor-pointer">Docs</span>

        <i className="fa fa-bell-o bellIcon cursor-pointer" />

        <img
          src={images.profile}
          alt="Profile"
          className="profileImage cursor-pointer"
        />

        <span className="profileText">Adedeji</span>

        <i className="fa fa-caret-down angleIcon cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

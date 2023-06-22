import { Link } from "react-router-dom";

import images from "../../assets/images";
import "./Header.styles.scss";

type Props = {
  toggleMobileMenu: () => void;
  mobileMenuOpen: Boolean;
};

const Header: React.FC<Props> = ({ toggleMobileMenu, mobileMenuOpen }) => {
  return (
    <div className="header row m-0">
      <div className="col-md-6 d-flex align-items-center px-0 d-med-none">
        <Link to="/dashboard/users" className="no-underline text-dark me-5">
          <div className="d-flex align-items-start">
            <img src={images.union} alt="Union" className="unionImage" />
            <img src={images.lendsqr} alt="Lendsqr" className="lendsqrImage" />
          </div>
        </Link>

        <div className="input-group my-4 border-0 ms-3">
          <input
            type="search"
            className="form-control border-right-0"
            placeholder="Search for anything"
            aria-label="search"
            id="search"
            autoComplete="off"
          />
          <span className="input-group-text bg-theme text-white border-0">
            <i className="fa fa-search" />
          </span>
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-center justify-content-end px-0 d-med-none">
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

      <div className="d-noone d-med-flex align-items-center justify-content-between p-0">
        <div className="d-flex align-items-center">
          <div
            onClick={toggleMobileMenu}
            className={`hamburger d-flex align-items-center justify-content-center me-4 mt-1 ${
              mobileMenuOpen === true && "open"
            }
          `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          <Link to="/dashboard/users" className="no-underline text-dark">
            <div className="d-flex align-items-start">
              <img src={images.union} alt="Union" className="unionImage" />
              <img
                src={images.lendsqr}
                alt="Lendsqr"
                className="lendsqrImage"
              />
            </div>
          </Link>
        </div>

        <img
          src={images.profile}
          alt="Profile"
          className="profileImage cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { BackIcon } from "../../components/icons";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import "./User.styles.scss";
import UserProfileCard from "components/UserProfileCard/UserProfileCard";
import UserDetailsCard from "components/UserDetailsCard/UserDetailsCard";
import Loader from "components/Loader/Loader";
import { API_URLS } from "../../constants";
import { UserInterface } from "types/user.types";

const User = (): JSX.Element => {
  const { id } = useParams<string>();

  const [activeTab, setActiveTab] = useState<number>(0); // [0, 1, 2, 3, 4, 5]

  const [data, setData] = useState<UserInterface>(
    JSON.parse(localStorage.getItem(`user-${id}`) || "{}")
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const fetchUserDetails = async () => {
    axios
      .get(`${API_URLS.GET_USERS}/${id}`)
      .then((_data) => {
        localStorage.setItem(`user-${id}`, JSON.stringify(_data.data));
        setData(_data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(data).length === 0) fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(data);

  return (
    <div className="usersBody vh-100">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className="d-flex">
        <Sidebar mobileMenuOpen={mobileMenuOpen} />

        <div className="content">
          <div className="d-flex align-items-center mb-4">
            <Link to={`/users`} className="no-underline text-dark">
              <BackIcon />

              <span className="text16 ms-3">Back to Users</span>
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-between d-mde-block">
            <div className="headerText">User Details</div>

            <div className="d-flex d-xsl-block">
              <div className="outline-btn red-outline me-3">Blacklist User</div>

              <div className="outline-btn green-outline">Activate User</div>
            </div>
          </div>

          {Object.keys(data).length !== 0 ? (
            <>
              <UserProfileCard
                data={data}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <UserDetailsCard data={data} />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;

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

const User = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0); // [0, 1, 2, 3, 4, 5]
  const [data, setData] = useState<any>(null); // [0, 1, 2, 3, 4, 5

  const { id } = useParams<string>();

  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then((_data) => {
        setData(_data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(data);

  return (
    <div className="usersBody vh-100">
      <Header />

      <div className="d-flex">
        <Sidebar />

        <div className="content">
          <div className="d-flex align-items-center mb-4">
            <Link to={`/users`} className="no-underline text-dark">
              <BackIcon />

              <span className="text16 ms-3">Back to Users</span>
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="headerText">User Details</div>

            <div className="d-flex">
              <div className="outline-btn red-outline me-3">Blacklist User</div>

              <div className="outline-btn green-outline">Activate User</div>
            </div>
          </div>

          {data ? (
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

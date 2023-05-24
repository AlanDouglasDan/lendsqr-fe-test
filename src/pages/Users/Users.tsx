import { useState, useEffect } from "react";
import axios from "axios";

import {
  PeopleIcon,
  BlueUsersIcon,
  OrangeLoanIcon,
  RedCoinIcon,
} from "components/icons";
import UsersTable from "components/UsersTable/UsersTable";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import UsersInfoCard from "components/UsersInfoCard/UsersInfoCard";
import { UserInterface } from "types/user.types";
import "./Users.styles.scss";

const Users = () => {
  const [data, setData] = useState<UserInterface[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  const fetchUsers = async () => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((_data) => {
        setData(_data.data);
        localStorage.setItem("users", JSON.stringify(_data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (data.length === 0) fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="usersBody vh-100">
      <Header />

      <div className="d-flex">
        <Sidebar />

        <div className="content">
          <div className="headerText">Users</div>

          <div className="grid-4">
            <UsersInfoCard
              icon={<PeopleIcon />}
              color="light-pink"
              title="USERS"
              number={String(data.length)}
            />

            <UsersInfoCard
              icon={<BlueUsersIcon />}
              color="light-blue"
              title="ACTIVE USERS"
              number={String(data.filter((user) => user.lastActiveDate).length)}
            />

            <UsersInfoCard
              icon={<OrangeLoanIcon />}
              color="light-orange"
              title="USERS WITH LOANS"
              number={String(
                data.filter((user) => user.education.loanRepayment).length
              )}
            />

            <UsersInfoCard
              icon={<RedCoinIcon />}
              color="light-red"
              title="USERS WITH SAVINGS"
              number={String(
                data.filter(
                  (user) =>
                    Number(user.education.monthlyIncome[0]) -
                      Number(user.education.monthlyIncome[1]) >
                    0
                ).length
              )}
            />
          </div>

          <UsersTable data={data} setData={setData} fetchUsers={fetchUsers} />
        </div>
      </div>
    </div>
  );
};

export default Users;

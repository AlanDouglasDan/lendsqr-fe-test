import { useState, useEffect } from "react";

import {
  PeopleIcon,
  BlueUsersIcon,
  OrangeLoanIcon,
  RedCoinIcon,
} from "components/icons";
import { UsersTable } from "components/UsersTable";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { UsersInfoCard } from "components/UsersInfoCard";
import { Loader } from "components/Loader";

import { UserInterface } from "types/user.types";

import { API_URLS } from "../../constants";

import fetchData from "queries/fetch";

import "./Users.styles.scss";

const Users = () => {
  const [data, setData] = useState<UserInterface[]>([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const fetchUsers = async () => {
    const _data: UserInterface[] = await fetchData(API_URLS.GET_USERS);

    setData(_data);
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="usersBody vh-100">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className="d-flex">
        <Sidebar mobileMenuOpen={mobileMenuOpen} />

        {data.length > 0 ? (
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
                number={String(
                  data.filter((user) => user.lastActiveDate).length
                )}
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

            <UsersTable data={data} fetchUsers={fetchUsers} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Users;

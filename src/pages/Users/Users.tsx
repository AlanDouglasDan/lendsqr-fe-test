import {
  PeopleIcon,
  BlueUsersIcon,
  OrangeLoanIcon,
  RedCoinIcon,
} from "../../components/icons";
import UsersTable from "../../components/UsersTable/UsersTable";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import UsersInfoCard from "components/UsersInfoCard/UsersInfoCard";
import "./Users.styles.scss";

const Users = () => {
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
              number="2,453"
            />

            <UsersInfoCard
              icon={<BlueUsersIcon />}
              color="light-blue"
              title="ACTIVE USERS"
              number="2,453"
            />
            
            <UsersInfoCard
              icon={<OrangeLoanIcon />}
              color="light-orange"
              title="USERS WITH LOANS"
              number="12,453"
            />
            
            <UsersInfoCard
              icon={<RedCoinIcon />}
              color="light-red"
              title="USERS WITH SAVINGS"
              number="2,453"
            />
          </div>

          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;

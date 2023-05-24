import { Link } from "react-router-dom";

import {
  BriefcaseIcon,
  HomeIcon,
  UsersIcon,
  TeamIcon,
  MoneyIcon,
  HandshakeIcon,
  PiggyBankIcon,
  LoanIcon,
  UserCheckIcon,
  UserTimesIcon,
  BankIcon,
  CoinIcon,
  TransactionIcon,
  GalaxyIcon,
  UserCogIcon,
  ScrollIcon,
  ChartIcon,
  SliderIcon,
  BadgePercentIcon,
  ClipboardIcon,
  TireIcon,
  LogoutIcon,
} from "../../components/icons";
import "./Sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="align-items-center sidebar-menu">
        <BriefcaseIcon />

        <span className="sidebarText">Switch Organization</span>
        <i className="fa fa-angle-down angleIcon m-0" />
      </div>

      <div
        className="align-items-center sidebar-menu opacity-6"
        style={{ marginTop: "52px" }}
      >
        <HomeIcon />

        <span className="sidebarText">Dashboard</span>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">CUSTOMERS</div>
        <div className="align-items-center sidebar-menu active">
          <UsersIcon />

          <span className="sidebarText">Users</span>
        </div>

        <div className="align-items-center sidebar-menu mt-20px opacity-6">
          <TeamIcon />

          <span className="sidebarText">Guarantors</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <MoneyIcon />

          <span className="sidebarText">Loans</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <HandshakeIcon />

          <span className="sidebarText">Decision Models</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <PiggyBankIcon />

          <span className="sidebarText">Savings</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <LoanIcon />

          <span className="sidebarText">Loan Requests</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <UserCheckIcon />

          <span className="sidebarText">Whitelist</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <UserTimesIcon />

          <span className="sidebarText">Karma</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">BUSINESSES</div>
        <div className="align-items-center sidebar-menu mt-20px opacity-6">
          <BriefcaseIcon />

          <span className="sidebarText">Organization</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <LoanIcon />

          <span className="sidebarText">Loan Products</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <BankIcon />

          <span className="sidebarText">Savings Products</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <CoinIcon />

          <span className="sidebarText">Fees and Charges</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <TransactionIcon />

          <span className="sidebarText">Transactions</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <GalaxyIcon />

          <span className="sidebarText">Services</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <UserCogIcon />

          <span className="sidebarText">Service Account</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <ScrollIcon />

          <span className="sidebarText">Settlements</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <ChartIcon />

          <span className="sidebarText">Reports</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">SETTINGS</div>
        <div className="align-items-center sidebar-menu mt-20px opacity-6">
          <SliderIcon />

          <span className="sidebarText">Preferences</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <BadgePercentIcon />

          <span className="sidebarText">Fees and Pricing</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <ClipboardIcon />

          <span className="sidebarText">Audit Logs</span>
        </div>

        <div className="align-items-center sidebar-menu mt-30px opacity-6">
          <TireIcon />

          <span className="sidebarText">Systems Messages</span>
        </div>
      </div>

      <hr className="separator" />

      <div className="align-items-center sidebar-menu">
        <Link to="/" className="no-underline">
          <LogoutIcon />

          <span className="sidebarText">Logout</span>
        </Link>
      </div>

      <div className="align-items-center sidebar-menu">
        <div className="text14">v1.2.0</div>
      </div>
    </div>
  );
};

export default Sidebar;

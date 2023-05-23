// import React, { useState } from "react";

import images from "../../assets/images";
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
  PeopleIcon,
  BlueUsersIcon,
  OrangeLoanIcon,
  RedCoinIcon,
  TireIcon,
  LogoutIcon,
} from "../../components/icons";
import UsersTable from "../../components/UsersTable/UsersTable";
import "./Users.styles.scss";

const Users = () => {
  return (
    <div className="usersBody vh-100">
      <div className="header row m-0">
        <div className="col-md-6 d-flex align-items-center justify-content-between px-0">
          <div className="d-flex align-items-start">
            <img src={images.union} alt="Union" className="unionImage" />
            <img src={images.lendsqr} alt="Lendsqr" className="lendsqrImage" />
          </div>

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
          <span className="docsText">Docs</span>

          <i className="fa fa-bell-o bellIcon" />

          <img src={images.profile} alt="Profile" className="profileImage" />

          <span className="profileText">Adedeji</span>

          <i className="fa fa-caret-down angleIcon" />
        </div>
      </div>

      <div className="d-flex">
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
            <LogoutIcon />

            <span className="sidebarText">Logout</span>
          </div>

          <div className="align-items-center sidebar-menu">
            <div className="text14">v1.2.0</div>
          </div>
        </div>

        <div className="content">
          <div className="headerText">Users</div>

          <div className="grid-4">
            <div className="grid-card">
              <div className="card-icon light-pink align-items-center justify-content-center d-flex">
                <PeopleIcon />
              </div>

              <div className="card-text">USERS</div>

              <div className="card-text-bold">2,453</div>
            </div>

            <div className="grid-card">
              <div className="card-icon light-blue align-items-center justify-content-center d-flex">
                <BlueUsersIcon />
              </div>

              <div className="card-text">Active Users</div>

              <div className="card-text-bold">2,453</div>
            </div>
            <div className="grid-card">
              <div className="card-icon light-orange align-items-center justify-content-center d-flex">
                <OrangeLoanIcon />
              </div>

              <div className="card-text">Users with Loans</div>

              <div className="card-text-bold">12,453</div>
            </div>
            <div className="grid-card">
              <div className="card-icon light-red align-items-center justify-content-center d-flex">
                <RedCoinIcon />
              </div>

              <div className="card-text">Users with Savings</div>

              <div className="card-text-bold">102,453</div>
            </div>
          </div>

          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;

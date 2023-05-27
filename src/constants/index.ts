import { UserInterface } from "../types/user.types";

enum API_URLS {
  GET_USERS = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`,
}

const TABLE_HEADERS: String[] = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

const DUMMY_USER_DATA: UserInterface = {
  id: "",
  createdAt: "",
  orgName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  lastActiveDate: "",
  profile: {
    firstName: "",
    lastName: "",
    avatar: "",
    phoneNumber: "",
    gender: "",
    bvn: "",
    address: "",
    currency: "",
  },
  guarantor: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    address: "",
  },
  accountBalance: "",
  accountNumber: "",
  socials: {
    facebook: "",
    twitter: "",
    instagram: "",
  },
  education: {
    level: "",
    employmentStatus: "",
    sector: "",
    duration: "",
    officeEmail: "",
    monthlyIncome: [],
    loanRepayment: "",
  },
};

const DUMMY_FILTER_DATA = {
  organization: "",
  username: "",
  email: "",
  phoneNumber: "",
  date: "",
  status: "",
};

const DUMMY_ORGANIZATION_DATA = [...Array(100)].map(
  (organization) => organization
);

export {
  API_URLS,
  TABLE_HEADERS,
  OPTIONS,
  DUMMY_USER_DATA,
  DUMMY_FILTER_DATA,
  DUMMY_ORGANIZATION_DATA,
};

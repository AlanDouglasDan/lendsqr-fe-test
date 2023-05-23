/* eslint-disable no-eval */
import { useEffect, useState } from "react";
import axios from "axios";

// import useFetch from "../../hooks/useFetch";
import {
  ActivateUserIcon,
  DeleteUserIcon,
  EyeIcon,
  FilterIcon,
  UserTimesIcon,
} from "components/icons";
import "./UsersTable.styles.scss";

const pending = <span className="light-yellow-btn w-auto">Pending</span>;
const active = <span className="light-green-btn w-auto">Active</span>;
const inactive = <span className="light-grey-btn w-auto">Inactive</span>;
const blacklisted = <span className="light-red-btn w-auto">Blacklisted</span>;

const UsersTable = () => {
  const [data, setdata] = useState<any>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  // populate the statuses array randomly with statuses of pending, active, inactive and blacklisted for each user
  // eslint-disable-next-line array-callback-return
  const _statusesArray = data.map(() => {
    const randomStatus = Math.floor(Math.random() * 4);
    if (randomStatus === 0) return pending;
    else if (randomStatus === 1) return active;
    else if (randomStatus === 2) return inactive;
    else if (randomStatus === 3) return blacklisted;
  });

  const [statusesArray, setStatusesArray] = useState<any>(_statusesArray);

  useEffect(() => {
    if (data.length === 0) {
      axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((_data) => {
          setdata(_data.data);
          localStorage.setItem("users", JSON.stringify(_data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data.length]);

  //   console.log(statusesArray);

  // console.log(data);

  const numberOfPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <div className="paginatedTable">
        <table className="table">
          <thead>
            <tr>
              <td className="tableHeader d-flex">
                <span>organization</span>
                <span className="dropdown">
                  <div data-bs-toggle="dropdown" className="dropdown-toggle">
                    <FilterIcon />
                  </div>
                  <form className="dropdown-menu p-4 form-dropdown">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleDropdownFormOrganization"
                        className="form-label"
                      >
                        Organization
                      </label>
                      <select
                        className="form-select mb-3 form-label"
                        aria-label="Default select example"
                        style={{ fontSize: "16px" }}
                      >
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>

                      <label
                        htmlFor="exampleDropdownFormUsername"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleDropdownFormUsername"
                        placeholder="Username"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleDropdownFormEmail2"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleDropdownFormEmail2"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="datepicker" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="datepicker"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleDropdownFormPhoneNumber"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleDropdownFormPhoneNumber"
                        placeholder="Phone Number"
                      />
                    </div>

                    <label
                      htmlFor="exampleDropdownFormStatus"
                      className="form-label"
                    >
                      Status
                    </label>

                    <select
                      className="form-select mb-3 form-label"
                      aria-label="Default select example"
                      style={{ fontSize: "16px" }}
                    >
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                    <div className="grid-2 mt-4">
                      <button className="btn btn-outline w-100">Reset</button>
                      <button className="btn btn-themed w-100">Filter</button>
                    </div>
                  </form>
                </span>
              </td>
              <td className="tableHeader">
                Username <FilterIcon />
              </td>
              <td className="tableHeader">
                Email <FilterIcon />
              </td>
              <td className="tableHeader">
                Phone number <FilterIcon />
              </td>
              <td className="tableHeader">
                Date joined <FilterIcon />
              </td>
              <td className="tableHeader">
                Status <FilterIcon />
              </td>
              <td className="border-0"></td>
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((user: any, index: any) => {
                const date: Date = new Date(user.createdAt);

                // Define options for formatting the date
                const options: Intl.DateTimeFormatOptions = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                };

                // Convert the date to the desired format
                const formattedDate = date.toLocaleString("en-US", options);

                return (
                  <tr key={user.id} className="align-middle">
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {user.orgName}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {user.userName}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {user.email}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {user.phoneNumber}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {formattedDate}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      {statusesArray[index]}
                    </td>
                    <td
                      className={`py-22px ${
                        index === page * rowsPerPage - 1 && "border-0"
                      }`}
                    >
                      <div className="dropdown">
                        <i
                          className="fa fa-ellipsis-v ellipsisIcon cursor-pointer dropdown-toggle"
                          data-bs-toggle="dropdown"
                        />
                        <ul className="dropdown-menu">
                          <li className="dropdown-item align-items-center d-flex py-2">
                            <EyeIcon />{" "}
                            <span className="ms-2"> View Details</span>
                          </li>
                          {statusesArray[index] !== blacklisted && (
                            <li
                              className="dropdown-item align-items-center d-flex py-2"
                              onClick={() => {
                                setStatusesArray(
                                  statusesArray.map((status: any, i: any) =>
                                    i === index ? blacklisted : status
                                  )
                                );
                              }}
                            >
                              <DeleteUserIcon />
                              <span className="ms-2">Blacklist User</span>
                            </li>
                          )}
                          {statusesArray[index] === active ? (
                            <li
                              className="dropdown-item align-items-center d-flex py-2"
                              onClick={() => {
                                setStatusesArray(
                                  statusesArray.map((status: any, i: any) =>
                                    i === index ? inactive : status
                                  )
                                );
                              }}
                            >
                              <UserTimesIcon />
                              <span className="ms-2">Deactivate User</span>
                            </li>
                          ) : (
                            <li
                              className="dropdown-item align-items-center d-flex py-2"
                              onClick={() => {
                                setStatusesArray(
                                  statusesArray.map((status: any, i: any) =>
                                    i === index ? active : status
                                  )
                                );
                              }}
                            >
                              <ActivateUserIcon />
                              <span className="ms-2">Activate User</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-20px">
        <div className="d-flex align-items-center">
          <div>Showing</div>
          <div className="dropdown">
            <button
              className="dropdown-toggle mx-2 rowsPerPageBtn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {rowsPerPage}
              <i className="fa fa-angle-down ms-2" />
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => setRowsPerPage(5)}>
                5
              </li>
              <li className="dropdown-item" onClick={() => setRowsPerPage(10)}>
                10
              </li>
              <li className="dropdown-item" onClick={() => setRowsPerPage(20)}>
                20
              </li>
            </ul>
          </div>
          <div>out of {data.length}</div>
        </div>

        <div className="d-flex align-items-center">
          <button
            className="operandButton me-3"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <i className="fa fa-angle-left" />
          </button>

          {[...Array(numberOfPages)].map((_, index) => (
            <div
              className={`paginationNavigator ${
                page === index + 1 && "activePaginationNavigator"
              }`}
              onClick={() => setPage(index + 1)}
              key={index}
            >
              {index + 1}
            </div>
          ))}

          <button
            className="operandButton ms-3"
            onClick={() => setPage(page + 1)}
            disabled={page === numberOfPages}
          >
            <i className="fa fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersTable;

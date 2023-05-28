import { useState, useEffect } from "react";

// import useFetch from "../../hooks/useFetch";
import "./UsersTable.styles.scss";
import FilterForm from "components/FilterForm/FilterForm";
import ActionMenu from "components/ActionMenu/ActionMenu";
import Pagination from "components/Pagination/Pagination";
import { FilterIcon } from "components/icons";
import { OPTIONS, TABLE_HEADERS } from "../../constants";
import { UserInterface, FilterInterface } from "types/user.types";

const pending = <span className="light-yellow-btn">Pending</span>;
const active = <span className="light-green-btn">Active</span>;
const inactive = <span className="light-grey-btn">Inactive</span>;
const blacklisted = <span className="light-red-btn">Blacklisted</span>;

const initialState: FilterInterface = {
  organization: "",
  username: "",
  email: "",
  phoneNumber: "",
  date: "",
  status: "",
};

type Props = {
  data: UserInterface[];
  fetchUsers: () => void;
};

const UsersTable: React.FC<Props> = ({ data, fetchUsers }) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const [dataFiltered, setDataFiltered] = useState<UserInterface[]>([]);

  const [filters, setFilters] = useState<FilterInterface>(initialState);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  // populate the statuses array randomly with statuses of pending, active, inactive and blacklisted for each user
  const _statusesArray = data.map(() => {
    let status;
    const randomStatus = Math.floor(Math.random() * 4);
    if (randomStatus === 0) status = pending;
    else if (randomStatus === 1) status = active;
    else if (randomStatus === 2) status = inactive;
    else status = blacklisted;
    return status;
  });

  const [statusesArray, setStatusesArray] =
    useState<Array<JSX.Element>>(_statusesArray);

  // look through all the _data and get the organizations
  const _organizations: String[] = data?.map((item: any) => {
    return item.orgName;
  });

  // console.log(filters);
  // console.log(data);

  const numberOfPages = Math.ceil(data.length / rowsPerPage);

  const runFilterFunction = () => {
    const _data = data.filter((item: any) => {
      let match = true;

      if (filters.organization)
        if (item.orgName !== filters.organization) match = false;

      if (filters.username)
        if (item.username !== filters.username) match = false;

      if (filters.email) if (item.email !== filters.email) match = false;

      if (filters.phoneNumber)
        if (item.phoneNumber !== filters.phoneNumber) match = false;

      return match;
    });

    setDataFiltered(_data);
  };

  const resetFilterFunction = () => {
    setFilters(initialState);
    fetchUsers();
  };

  return (
    <>
      <div className="paginatedTable">
        <table className="table">
          <thead>
            <tr>
              {TABLE_HEADERS.map((header: any, index: any) => (
                <td className="tableHeader" key={index}>
                  <div className="d-flex">
                    <span>{header}</span>
                    <span className="dropdown">
                      <div
                        data-bs-toggle="dropdown"
                        className="dropdown-toggle"
                      >
                        <FilterIcon />
                      </div>
                      <FilterForm
                        filters={filters}
                        setFilters={setFilters}
                        _organizations={_organizations}
                        resetFilterFunction={resetFilterFunction}
                        runFilterFunction={runFilterFunction}
                      />
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataFiltered
              ?.slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((user: any, index: any) => {
                const date: Date = new Date(user.createdAt);

                // Convert the date to the desired format
                const formattedDate = date.toLocaleString("en-US", OPTIONS);

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
                      <ActionMenu
                        userId={user.id}
                        status={statusesArray[index]}
                        setStatusesArray={setStatusesArray}
                        index={index}
                        statusesArray={statusesArray}
                        blacklisted={blacklisted}
                        active={active}
                        inactive={inactive}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        numberOfPages={numberOfPages}
        numRecords={String(data.length)}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};

export default UsersTable;

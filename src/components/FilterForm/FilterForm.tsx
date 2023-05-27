import { FilterInterface } from "types/user.types";
import "./FilterForm.styles.scss";

export interface Props {
  setFilters: (filters: any) => void;
  filters: FilterInterface;
  _organizations: String[];
  runFilterFunction: () => void;
  resetFilterFunction: () => void;
}

const FilterForm: React.FC<Props> = ({
  setFilters,
  filters,
  _organizations,
  runFilterFunction,
  resetFilterFunction,
}) => {
  return (
    <div className="dropdown-menu p-4 form-dropdown">
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormOrganization" className="form-label">
          Organization
        </label>
        <select
          className="form-select mb-3 form-label"
          aria-label="Default select example"
          style={{ fontSize: "1rem" }}
          onChange={(e) => {
            setFilters({
              ...filters,
              organization: e.target.value,
            });
          }}
          value={filters.organization}
        >
          <option defaultValue="">Select</option>
          {_organizations?.map((item: any, index: any) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <label htmlFor="exampleDropdownFormUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleDropdownFormUsername"
          placeholder="Username"
          onChange={(e) => {
            setFilters({
              ...filters,
              username: e.target.value,
            });
          }}
          value={filters.username}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleDropdownFormEmail2" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleDropdownFormEmail2"
          placeholder="Email"
          onChange={(e) => {
            setFilters({
              ...filters,
              email: e.target.value,
            });
          }}
          value={filters.email}
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
          onChange={(e) => {
            setFilters({
              ...filters,
              date: e.target.value,
            });
          }}
          value={filters.date}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleDropdownFormPhoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleDropdownFormPhoneNumber"
          placeholder="Phone Number"
          onChange={(e) => {
            setFilters({
              ...filters,
              phoneNumber: e.target.value,
            });
          }}
          value={filters.phoneNumber}
        />
      </div>

      <label htmlFor="exampleDropdownFormStatus" className="form-label">
        Status
      </label>

      <select
        className="form-select mb-3 form-label"
        aria-label="Default select example"
        style={{ fontSize: "1rem" }}
        onChange={(e) => {
          setFilters({
            ...filters,
            status: e.target.value,
          });
        }}
        value={filters.status}
      >
        <option defaultValue="pending">Pending</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="blacklisted">Blacklisted</option>
      </select>

      <div className="grid-2 mt-4">
        <button
          className="btn btn-outline w-100"
          onClick={() => resetFilterFunction()}
        >
          Reset
        </button>
        <button
          className="btn btn-themed w-100"
          onClick={() => runFilterFunction()}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterForm;

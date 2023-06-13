import { Popup } from "components/Popup";
import { Input } from "components/Input";
import { FilterInterface } from "types/user.types";
import "./FilterForm.styles.scss";

export interface Props {
  setFilters: (filters: any) => void;
  filters: FilterInterface;
  _organizations: string[];
  runFilterFunction: () => void;
  resetFilterFunction: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterForm: React.FC<Props> = ({
  setFilters,
  filters,
  _organizations,
  runFilterFunction,
  resetFilterFunction,
  isOpen,
  onClose,
}) => {
  return (
    <Popup className="form-dropdown" isOpen={isOpen} onClose={onClose}>
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormOrganization" className="form-label">
          Organization
        </label>
        <select
          className="form-select mb-3 form-label thick-border"
          aria-label="Default select example"
          // style={{ fontSize: "1rem" }}
          onChange={(e) => {
            setFilters({
              ...filters,
              organization: e.target.value,
            });
          }}
          value={filters.organization}
          id="organization"
          autoComplete="off"
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

        <Input
          value={filters.username}
          setValue={(value: string) =>
            setFilters({
              ...filters,
              username: value,
            })
          }
          type="text"
          placeholder="Username"
          id="exampleDropdownFormUsername"
          label="Username"
          inputClassName="thick-border"
        />
      </div>

      <div className="mb-3">
        <Input
          value={filters.email}
          setValue={(value: string) =>
            setFilters({
              ...filters,
              email: value,
            })
          }
          type="email"
          placeholder="Email"
          id="exampleDropdownFormEmail"
          label="Email"
          inputClassName="thick-border"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="datepicker" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control thick-border"
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
        <Input
          value={filters.phoneNumber}
          setValue={(value: string) =>
            setFilters({
              ...filters,
              phoneNumber: value,
            })
          }
          type="text"
          placeholder="Phone Number"
          id="exampleDropdownFormPhoneNumber"
          label="Phone Number"
          inputClassName="thick-border"
        />
      </div>

      <label htmlFor="exampleDropdownFormStatus" className="form-label">
        Status
      </label>

      <select
        className="form-select mb-3 form-label thick-border"
        aria-label="Default select example"
        // style={{ fontSize: "1rem" }}
        onChange={(e) => {
          setFilters({
            ...filters,
            status: e.target.value,
          });
        }}
        value={filters.status}
        id="status"
      >
        <option defaultValue="pending">Pending</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="blacklisted">Blacklisted</option>
      </select>

      <div className="grid-2 mt-4">
        <button
          className="btn-outline w-100"
          onClick={() => resetFilterFunction()}
        >
          Reset
        </button>
        <button
          className="btn-themed w-100"
          onClick={() => runFilterFunction()}
        >
          Filter
        </button>
      </div>
    </Popup>
  );
};

export default FilterForm;

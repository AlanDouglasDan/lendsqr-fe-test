import { Link } from "react-router-dom";

import {
  EyeIcon,
  DeleteUserIcon,
  UserTimesIcon,
  ActivateUserIcon,
} from "components/icons";
import "./ActionMenu.styles.scss";

type Props = {
  setStatusesArray: React.Dispatch<any>;
  statusesArray: any;
  status: string;
  userId: string;
  index: string;
  blacklisted: any;
  active: any;
  inactive: any;
};

const ActionMenu: React.FC<Props> = ({
  setStatusesArray,
  status,
  statusesArray,
  index,
  userId,
  blacklisted,
  active,
  inactive,
}) => {
  return (
    <div className="dropdown">
      <i
        className="fa fa-ellipsis-v ellipsisIcon cursor-pointer dropdown-toggle"
        data-bs-toggle="dropdown"
      />
      <ul className="dropdown-menu">
        <Link to={`/users/${userId}`} className="no-underline text-dark">
          <li className="dropdown-item align-items-center d-flex py-2">
            <EyeIcon />
            <span className="ms-2"> View Details</span>
          </li>
        </Link>
        {status !== blacklisted && (
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
            <DeleteUserIcon /> <span className="ms-2">Blacklist User</span>
          </li>
        )}
        {status === active ? (
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
            <UserTimesIcon /> <span className="ms-2">Deactivate User</span>
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
            <ActivateUserIcon /> <span className="ms-2">Activate User</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ActionMenu;

import { getPaginatedPages } from "../../utils";
import "./Pagination.styles.scss";

type Props = {
  rowsPerPage: number;
  setRowsPerPage: any;
  numRecords: string;
  page: number;
  setPage: any;
  numberOfPages: number;
};

const Pagination: React.FC<Props> = ({
  rowsPerPage,
  setRowsPerPage,
  numRecords,
  page,
  setPage,
  numberOfPages,
}) => {
  const _pagesArray = getPaginatedPages(page, numberOfPages);

  // console.log(_pagesArray);

  return (
    <div className="d-flex align-items-center justify-content-between mt-20px center-grid">
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
        <div>out of {numRecords}</div>
      </div>

      <div className="d-flex align-items-center">
        <button
          className="operandButton me-3"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <i className="fa fa-angle-left" />
        </button>

        {_pagesArray.map((_page, index) => {
          if (_page === -1) return <div key={index}>...</div>;
          else
            return (
              <div
                className={`paginationNavigator ${
                  page === _page && "activePaginationNavigator"
                }`}
                onClick={() => setPage(_page)}
                key={index}
              >
                {_page}
              </div>
            );
        })}

        <button
          className="operandButton ms-3"
          onClick={() => setPage(page + 1)}
          disabled={page === numberOfPages}
        >
          <i className="fa fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

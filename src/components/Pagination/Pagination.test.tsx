import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination Component Test", () => {
  it("Pagination Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Pagination
          rowsPerPage={10}
          setRowsPerPage={() => {}}
          numRecords="100"
          page={1}
          setPage={() => {}}
          numberOfPages={1}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

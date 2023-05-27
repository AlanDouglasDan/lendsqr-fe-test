import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { DUMMY_FILTER_DATA, DUMMY_ORGANIZATION_DATA } from "../../constants";
import FilterForm from "./FilterForm";

describe("Filter Form Component Test", () => {
  it("Filter Form Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <FilterForm
          filters={DUMMY_FILTER_DATA}
          setFilters={() => {}}
          runFilterFunction={() => {}}
          resetFilterFunction={() => {}}
          _organizations={DUMMY_ORGANIZATION_DATA}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

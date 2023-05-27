import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Loader from "./Loader";

describe("Loader Component Test", () => {
  it("Loader Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

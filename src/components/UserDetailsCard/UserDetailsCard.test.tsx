import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { DUMMY_USER_DATA } from "../../constants";
import UserDetailsCard from "./UserDetailsCard";

describe("User Details Card Component Test", () => {
  it("User Details Card Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UserDetailsCard data={DUMMY_USER_DATA} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

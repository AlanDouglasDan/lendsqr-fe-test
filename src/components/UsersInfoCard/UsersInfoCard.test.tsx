import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import UsersInfoCard from "./UsersInfoCard";

describe("Users Info Card Component Test", () => {
  it("Users Info Card Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UsersInfoCard
          icon={<div />}
          title="hello world"
          number="hello world"
          color="blue"
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

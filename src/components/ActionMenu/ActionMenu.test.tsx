import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import ActionMenu from "./ActionMenu";

const pending = <span className="light-yellow-btn">Pending</span>;
const active = <span className="light-green-btn">Active</span>;
const inactive = <span className="light-grey-btn">Inactive</span>;
const blacklisted = <span className="light-red-btn">Blacklisted</span>;

describe("Action Menu Component", () => {
  it("Using snapshot testing", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ActionMenu
          userId="1"
          status={pending}
          setStatusesArray={() => {}}
          index="0"
          statusesArray={[pending, active, inactive, blacklisted]}
          blacklisted={blacklisted}
          active={active}
          inactive={inactive}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import UserProfileCard from "./UserProfileCard";
import { DUMMY_USER_DATA } from "../../constants";

describe("User Profile Card Component Test", () => {
  it("User Profile Card Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UserProfileCard
          data={DUMMY_USER_DATA}
          activeTab={1}
          setActiveTab={(tab) => {}}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

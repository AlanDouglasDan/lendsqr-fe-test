import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import UsersTable from "./UsersTable";

describe("Users Table Component Test", () => {
  it("Users Table Component snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <UsersTable data={[]} setData={() => {}} fetchUsers={() => {}} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

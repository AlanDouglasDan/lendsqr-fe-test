import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar Component Test", () => {
  it("Sidebar Desktop View Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Sidebar mobileMenuOpen={false} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Sidebar Mobile View Component Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Sidebar mobileMenuOpen={true} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

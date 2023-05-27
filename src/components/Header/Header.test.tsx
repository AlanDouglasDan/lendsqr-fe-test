import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header Component Test", () => {
  it("Header Component Mobile View Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header mobileMenuOpen={true} toggleMobileMenu={() => {}} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Header Component Desktop View Snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header mobileMenuOpen={false} toggleMobileMenu={() => {}} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

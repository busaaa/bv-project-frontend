import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import MainNavigation from "./../layout/MainNavigation";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <MainNavigation />
    </Router>
  );
  const mainNavElem = screen.getByTestId("main-nav-test-1");
  expect(mainNavElem).toBeInTheDocument();
  expect(mainNavElem).toHaveTextContent("All sports");
  expect(mainNavElem).toHaveTextContent("BV project");
});

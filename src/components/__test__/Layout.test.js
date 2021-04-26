import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Layout from "./../layout/Layout";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <Layout />
    </Router>
  );
  const layoutElem = screen.getByTestId("layout-test-1");
  const mainElem = screen.getByTestId("layout-test-2");
  expect(layoutElem).toBeInTheDocument();
  expect(layoutElem).toContainElement(mainElem);
});

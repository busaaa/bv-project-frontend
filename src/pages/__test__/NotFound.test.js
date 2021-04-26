import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import NotFound from "./../NotFound";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );
  const notFoundElem = screen.getByTestId("not-found-item-test-1");
  expect(notFoundElem).toBeInTheDocument();
  expect(notFoundElem).toHaveTextContent('Page not found!');
});

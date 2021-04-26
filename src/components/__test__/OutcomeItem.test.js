import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import OutcomeItem from "./../items/OutcomeItem";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <OutcomeItem />
    </Router>
  );
  const OutcomeItemElem1 = screen.getByTestId("outcome-item-test-1");
  expect(OutcomeItemElem1).toBeInTheDocument();
});

test("renders data via props", () => {
  const [d, fdp] = ['Test outcome d', 'Test outcome fdp']
  render(
    <Router>
      <OutcomeItem d={d} fdp={fdp} />
    </Router>
  );
  const OutcomeItemElem1 = screen.getByTestId("outcome-item-test-1");
  expect(OutcomeItemElem1).toHaveTextContent(d);
  expect(OutcomeItemElem1).toHaveTextContent(fdp);
});

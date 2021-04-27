import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import SportItem from "./../items/SportItem";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <SportItem />
    </Router>
  );
  const SportItemElem1 = screen.getByTestId("sport-item-test-1");
  const SportItemElem2 = screen.getByTestId("sport-item-test-2");
  const SportItemElem3 = screen.getByTestId("sport-item-test-3");
  expect(SportItemElem1).toBeInTheDocument();
  expect(SportItemElem2).toBeInTheDocument();
  expect(SportItemElem3).toBeInTheDocument();
});

test("renders data via props", () => {
  const testDesc = 'Test sport desc';
  render(
    <Router>
      <SportItem desc={testDesc} />
    </Router>
  );
  const SportItemElem2 = screen.getByTestId("sport-item-test-2");
  const SportItemElem3 = screen.getByTestId("sport-item-test-3");
  expect(SportItemElem2).toHaveTextContent(testDesc);
  expect(SportItemElem3).toHaveTextContent("See events");
});
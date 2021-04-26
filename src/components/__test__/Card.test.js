import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Card from "./../ui/Card";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <Card />
    </Router>
  );
  const cardElem = screen.getByTestId("card-test-1");
  expect(cardElem).toBeInTheDocument();
});

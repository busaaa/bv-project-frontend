import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import EventItem from "./../items/EventItem";

afterEach(() => {
  cleanup();
})

test("renders the component", () => {
  render(
    <Router>
      <EventItem />
    </Router>
  );
  const EventItemElem1 = screen.getByTestId("event-item-test-1");
  const EventItemElem2 = screen.getByTestId("event-item-test-2");
  expect(EventItemElem1).toBeInTheDocument();
  expect(EventItemElem2).toBeInTheDocument();
});

test("renders data via props", () => {
  const [desc, compDesc, sportId, sportDataDesc] = ['Test event desc', 'Test event compDesc', 1, 'Test event sportDataDesc']
  render(
    <Router>
      <EventItem desc={desc} compDesc={compDesc} sportId={sportId} sportDataDesc={sportDataDesc} />
    </Router>
  );
  const EventItemElem1 = screen.getByTestId("event-item-test-1");
  const EventItemElem2 = screen.getByTestId("event-item-test-2");
  expect(EventItemElem1).toHaveTextContent(desc);
  expect(EventItemElem1).toHaveTextContent(compDesc);
  expect(EventItemElem2).toHaveTextContent("See outcomes");
});
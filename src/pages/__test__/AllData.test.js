import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import AllData from "./../AllData";

afterEach(() => {
  cleanup();
});

describe("when sports data is requested", () => {
  const mockSportsData = [
    {
      id: 100,
      desc: "Football",
      pos: 1,
      created_at: "2021-04-25T10:43:34.944Z",
      updated_at: "2021-04-25T10:43:34.950Z",
    },
    {
      id: 600,
      desc: "Tennis",
      pos: 2,
      created_at: "2021-04-25T10:43:34.966Z",
      updated_at: "2021-04-25T10:43:34.972Z",
    },
    {
      id: 364700,
      desc: "Snooker",
      pos: 3,
      created_at: "2021-04-26T10:29:28.598Z",
      updated_at: "2021-04-26T10:29:28.845Z",
    },
    {
      id: 17500,
      desc: "Cricket",
      pos: 4,
      created_at: "2021-04-25T13:16:49.995Z",
      updated_at: "2021-04-25T13:16:50.047Z",
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSportsData),
      })
    );
  });

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData type="sports" />
        </Router>
      )
    );
    const sportElem1 = screen.getByTestId("sports-test-1");
    expect(sportElem1).toHaveTextContent("All sports");
  });
});

describe("when events data is requested", () => {
  const mockEventsData = [
    {
      id: 1445276600,
      sport_id: 364700,
      desc: "Mark Allen v Mark Selby",
      comp_desc: "World Championship 2021",
      pos: 9999,
      created_at: "2021-04-26T10:29:29.641Z",
      updated_at: "2021-04-26T10:29:29.641Z",
    },
    {
      id: 1445139300,
      sport_id: 364700,
      desc: "Shaun Murphy v Yan Bingtao",
      comp_desc: "World Championship 2021",
      pos: 9999,
      created_at: "2021-04-26T10:29:29.785Z",
      updated_at: "2021-04-26T10:29:29.785Z",
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEventsData),
      })
    );
  });

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      sportData: {desc: 'Snooker'}
    })
  }));

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData type="events" />
        </Router>
      )
    );
    expect(screen.getByText("All events")).toBeInTheDocument();
  });
});

describe("when outcomes data is requested", () => {
  const mockOutcomesData = [
    {
      id: 97666960400,
      market_id: 4302243630,
      d: "Mark Selby",
      fdp: "1.091",
      created_at: "2021-04-26T10:29:32.247Z",
      updated_at: "2021-04-26T10:29:32.247Z",
      market: {
        id: 4302243630,
        event_id: 1445276600,
        desc: "Match Winner - Session Break - Match Resumes at  7pm BST 26/04",
        pt_desc: "Win only",
        created_at: "2021-04-26T10:29:30.524Z",
        updated_at: "2021-04-26T10:29:30.524Z",
      },
    },
    {
      id: 97666960300,
      market_id: 4302243630,
      d: "Mark Allen",
      fdp: "7.0",
      created_at: "2021-04-26T10:29:32.280Z",
      updated_at: "2021-04-26T10:29:32.280Z",
      market: {
        id: 4302243630,
        event_id: 1445276600,
        desc: "Match Winner - Session Break - Match Resumes at  7pm BST 26/04",
        pt_desc: "Win only",
        created_at: "2021-04-26T10:29:30.524Z",
        updated_at: "2021-04-26T10:29:30.524Z",
      },
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockOutcomesData),
      })
    );
  });

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData type="outcomes" />
        </Router>
      )
    );
    expect(screen.getByText("All outcomes")).toBeInTheDocument();
  });
});

describe("when response in not ok", () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(),
      })
    );
  });

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData />
        </Router>
      )
    );
    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });

});

describe("when response is 404", () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 404,
        json: () => Promise.resolve(),
      })
    );
  });

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData />
        </Router>
      )
    );
    expect(screen.getByText("Requested data not found!")).toBeInTheDocument();
  });

});

describe("when response is empty array", () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  test("fetches data", async () => {
    await act(async () =>
      render(
        <Router>
          <AllData />
        </Router>
      )
    );
    expect(screen.getByText("NO DATA FOUND")).toBeInTheDocument();
  });

});

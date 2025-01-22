import {
  act,
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import Home from ".";
import { data } from "./api/dummy";
import { randomUUID } from "crypto";

describe("Home Component Empty State", () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({ data: [] }) })
    ) as any;
    window.alert = jest.fn((msg) => console.log(msg));
  });

  it("renders the home component", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it("check whether 0 cards are present", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      const articles = container.querySelectorAll(".article");
      expect(articles.length).toBe(0);
    });
  });
  it("check whether the window alert is called", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      const articles = container.querySelectorAll(".article");
      expect(window.alert).toHaveBeenCalledTimes(1);
    });
  });
});

describe("Home Component Filled State State", () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            data: data
              .slice(0, 4)
              .map((item) => ({ ...item, id: randomUUID() })),
          }),
      })
    ) as any;
    window.alert = jest.fn((msg) => console.log(msg));
  });

  it("renders the home component", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it("check whether 4 cards are present", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      const articles = container.querySelectorAll(".card");
      expect(articles.length).toBe(4);
    });
  });
  it("check whether the additional four cards are added", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getAllByRole("article").length).toBe(4);
    });

    const loadButton = screen.getByText("Load More..");

    fireEvent.click(loadButton);

    await waitFor(() => {
      expect(screen.getAllByRole("article").length).toBe(8);
    });
  });
});

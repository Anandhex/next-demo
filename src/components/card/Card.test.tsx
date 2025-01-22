import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

// * run `npm test` in the terminal  * //
describe("Card Component", () => {
  it('should render the card"', () => {
    render(
      <Card
        card={{
          body: "hey",
          header: "ds",
          id: "1",
          image: "something",
          link: "something",
        }}
      />
    );
    const bodyText = screen.getByText(/hey/i);
    const headerText = screen.getByText(/hey/i);
    const image = screen.getByRole("img");
    const linkText = screen.getByText(/read more/i);
    expect(bodyText).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(linkText.getAttribute("href")).toBe("something");
  });
  it('should render the appropriate link"', () => {
    render(
      <Card
        card={{
          body: "hey",
          header: "ds",
          id: "1",
          image: "something",
          link: "https://sass-lang.com/documentation/at-rules/use/",
        }}
      />
    );
    const bodyText = screen.getByText(/hey/i);
    const headerText = screen.getByText(/hey/i);
    const image = screen.getByRole("img");
    const linkText = screen.getByText(/read more/i);
    expect(bodyText).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(linkText.getAttribute("href")).toBe(
      "https://sass-lang.com/documentation/at-rules/use/"
    );
  });
});

import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer test", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render <h3> and its text matches", () => {
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3).toBeInTheDocument();
    expect(h3.textContent).toEqual("Resources:");
  });

  it("Should match the text in <a>", () => {
    const a = screen.queryAllByRole("link");
    expect(a[0].textContent).toEqual("Open Weather");
    expect(a[1].textContent).toEqual("Meteocons");
  });

  it("Should has a valid link in href attribute", () => {
    const a = screen.queryAllByRole("link");
    expect(a[0].getAttribute("href")).toEqual("https://openweathermap.org/api");
    expect(a[1].getAttribute("href")).toEqual(
      "https://basmilius.github.io/weather-icons/",
    );
  });
});

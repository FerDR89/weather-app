import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header test", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("Should render <header> and check if it has a specific tailwind style in className", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(header.className.includes("h-[10vh]")).toBeTruthy();
  });
  it("Should render <h2> and its text matches", () => {
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("Climatic App");
  });
});

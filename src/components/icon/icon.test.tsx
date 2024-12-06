import { render, screen } from "@testing-library/react";
import Icon from "./index";

describe("Icon test", () => {
  const mockedIconName = "01d";
  beforeEach(() => {
    render(<Icon iconName={mockedIconName} />);
  });

  it("Should render <Div> as a container and check if it has a children and a specific tailwind style in className", () => {
    const container = screen.getByRole("contentinfo");
    expect(container).toBeInTheDocument();
    expect(container.childElementCount).greaterThan(0);
    expect(container.className.includes("sm:w-60")).toBeTruthy();
  });

  it("Should render <img> and check if its src path and alt text match and has a specific tailwind style in className", () => {
    const image: HTMLImageElement = screen.getByRole("img");
    expect(image.src).toMatch(`/icons/${mockedIconName}.svg`);
    expect(image.alt).toMatch("Weather Icon");
    expect(image.className.includes("sm:w-60")).toBeTruthy();
  });
});

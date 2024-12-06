import { render, screen } from "@testing-library/react";
import Layout from "./index";

describe("Layout test", () => {
  const mockedText = "Soy el children";

  beforeEach(() => {
    render(
      <Layout>
        <p>{mockedText}</p>;
      </Layout>,
    );
  });

  it("Should render <main> as a container and check if it has a children and a specific tailwind style in className", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main.childElementCount).greaterThan(0);
    expect(main.className.includes("max-w-screen-lg")).toBeTruthy();
  });

  it("Should render <p> as a child and check if it has the mockedText inside", () => {
    const children = screen.getByRole("paragraph");
    expect(children).toBeInTheDocument();
    expect(children.textContent).toStrictEqual(mockedText);
  });
});

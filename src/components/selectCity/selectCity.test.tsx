import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectCity from "./index";
import { CITIES } from "./constants";

describe("SelectCity test", () => {
  beforeEach(() => {
    render(<SelectCity setCity={() => {}} />);
  });

  it("Should render <form> as a container and check if it has a children and a specific tailwind style in className", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    expect(form.childElementCount).greaterThan(0);
    expect(form.className.includes("sm:w-[400px]")).toBeTruthy();
  });

  it("Should render <select> and check if it has 5 children/options", async () => {
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select.childElementCount).greaterThanOrEqual(5);
  });

  it("Should render <option> and check its values", async () => {
    const options: HTMLOptionElement[] = screen.getAllByRole("option");
    expect(options[0].value).toBe(CITIES[0]);
    expect(options[1].value).toBe(CITIES[1]);
    expect(options[2].value).toBe(CITIES[2]);
    expect(options[3].value).toBe(CITIES[3]);
    expect(options[4].value).toBe(CITIES[4]);
  });

  it("Should render <option> and check if one of them has been selected", async () => {
    const user = userEvent.setup();
    const select = screen.getByRole("combobox");

    await user.selectOptions(select, [CITIES[4]]);

    const options: HTMLOptionElement[] = screen.getAllByRole("option");

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeFalsy();
    expect(options[4].selected).toBeTruthy();
  });
});

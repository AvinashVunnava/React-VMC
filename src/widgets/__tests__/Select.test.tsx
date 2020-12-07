import * as React from "react";
import {
  cleanup,
  fireEvent,
  getByAltText,
  getByText,
  render,
  wait,
} from "@testing-library/react";

import Select from "../Select";
import { get } from "https";

const options = [1, 2, 3];

function SelectWrapper() {
  return (
    <Select
      options={options}
      value={1}
      label={"Testing"}
      handleSelect={() => console.log("testing")}
    />
  );
}

afterEach(cleanup);

describe("Testing Select Dropdown", () => {
  test("if component renders properly", () => {
    const { getByTitle } = render(<SelectWrapper />);
    const controlElement = getByTitle("Select");
    expect(controlElement).toBeInTheDocument();
  });

  test("if menu shows up on clicking the select control", () => {
    const { getByRole, getByDisplayValue } = render(<SelectWrapper />);
    const controlElement = getByRole("button");

    fireEvent.click(controlElement);

    const menuList = getByDisplayValue(1);
    expect(menuList).toBeInTheDocument();

    fireEvent.click(controlElement);
    expect(menuList).toBeInTheDocument();
  });

  /*
  test("if our options are rendered correctly", () => {
    const { getByRole, getAllByRole } = render(<SelectWrapper />);
    const controlElement = getByRole("button");

    fireEvent.click(controlElement);

    const menuOptions = getAllByRole("option");
    expect(menuOptions).toHaveLength(options.length);
  });
  */

  /*
  test("if render options are correct", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    options.forEach(({ label, value }) =>
      expect(getByText(label)).toBeVisible()
    );
  });

  test("if selecting an option is working", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    fireEvent.click(getByText(options[1].label));

    wait(() => expect(controlElement).toHaveTextContent(options[1].label));
  });
  */
});

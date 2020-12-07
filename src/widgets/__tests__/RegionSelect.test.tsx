import * as React from "react";
import {
  cleanup,
  fireEvent,
  getByAltText,
  getByText,
  render,
  wait,
} from "@testing-library/react";

import RegionSelect from "../RegionSelect";
import { get } from "https";

const options = [
  { id: "1", label: "abc" },
  { id: "2", label: "bcd" },
];

function RegionWrapper() {
  return (
    <RegionSelect
      options={options}
      region={"1"}
      handleRegion={() => console.log("testing")}
    />
  );
}

afterEach(cleanup);

describe("Testing Region Select Dropdown", () => {
  test("if component renders properly", () => {
    const { getByTitle } = render(<RegionWrapper />);
    const controlElement = getByTitle("RegionSelect");
    expect(controlElement).toBeInTheDocument();
  });

  test("if menu shows up on clicking the region control", () => {
    const { getByRole, getByDisplayValue } = render(<RegionWrapper />);
    const controlElement = getByRole("button");

    fireEvent.click(controlElement);

    const menuList = getByDisplayValue(1);
    expect(menuList).toBeInTheDocument();

    fireEvent.click(controlElement);
    expect(menuList).toBeInTheDocument();
  });
});

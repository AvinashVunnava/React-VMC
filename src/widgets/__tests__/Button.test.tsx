import * as React from "react";
import {
  cleanup,
  fireEvent,
  getByAltText,
  getByText,
  render,
  wait,
} from "@testing-library/react";

const mockFn = jest.fn();

import Button from "../Button";
import { get } from "https";

function ButtonWrapper() {
  return <Button text={"Submit"} handleClick={mockFn} />;
}

afterEach(cleanup);

describe("Testing MUIButton Wrapper", () => {
  test("if component renders properly", () => {
    const { getByText } = render(<ButtonWrapper />);
    const controlElement = getByText("Submit");
    expect(controlElement).toBeInTheDocument();
  });

  test("if mock fn is called on btn click", () => {
    const { getByText } = render(<ButtonWrapper />);
    const controlElement = getByText("Submit");

    fireEvent.click(controlElement);
    expect(mockFn).toHaveBeenCalled();
  });
});

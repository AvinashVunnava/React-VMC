import * as React from "react";
import {
  cleanup,
  fireEvent,
  getByAltText,
  getByText,
  render,
  wait,
} from "@testing-library/react";

import WarningModal from "../WarningModal";
import { get } from "https";

const handleClose = jest.fn();

afterEach(cleanup);

describe("Testing Warning Modal", () => {
  test("if component renders properly", () => {
    const { getByText } = render(
      <WarningModal openModal={true}>
        <div>Test Rendering</div>
      </WarningModal>
    );
    const controlElement = getByText("Test Rendering");
    expect(controlElement).toBeInTheDocument();
  });
  /*
  test("if button click close modal from DOM", () => {
    const { getByText, getByRole } = render(
      <WarningModal openModal={true}>
        <div>
          <div>Test Rendering</div>
          <button onClick={handleClose}>Close</button>
        </div>
      </WarningModal>
    );

    const controlElement = getByText("Test Rendering");
    const btnElement = getByRole("button");

    fireEvent.click(btnElement);
    expect(handleClose).toHaveBeenCalled();
    window.document.body.dispatchEvent(new Event("click"));
    expect(controlElement).toBeInTheDocument();
  });
  */
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { GeneralModal } from "./GeneralModal";
import closeButtonIcon from "./../../assets/icons/close.png";

describe("GeneralModal", () => {
  test("GeneralModal has been rendered", () => {
    const generalModal = render(<GeneralModal></GeneralModal>);
    expect(generalModal);
  });

  test("Close button has been loaded", () => {
    const generalModal = render(<GeneralModal></GeneralModal>);
    const closeButton = screen.getByRole("img");
    expect(closeButton).toHaveAttribute("src", closeButtonIcon);
    expect(closeButton).toHaveAttribute("alt", "Close modal button");
    expect(generalModal);
  });
});

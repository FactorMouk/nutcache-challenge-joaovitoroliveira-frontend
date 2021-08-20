import React from "react";
import { EmptyList } from "./EmptyList";
import { render, screen } from "@testing-library/react";
import emptyListIllust from "./../../assets/imgs/emptyListIllust.svg";

describe("EmptyList", () => {
  test("EmptyList has been rendered", () => {
    const emptyList = render(<EmptyList />);
    expect(emptyList);
  });
  test("EmptyList illustration has been loaded", () => {
    render(<EmptyList />);
    const emptyIllust = screen.getByRole("img");
    expect(emptyIllust).toHaveAttribute("src", emptyListIllust);
    expect(emptyIllust).toHaveAttribute("alt", "Empty list");
  });
});

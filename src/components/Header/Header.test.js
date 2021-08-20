import React from "react";
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import logo from "./../../assets/icons/logo.png";

describe("Header", () => {
  test("Header has been rendered", () => {
    const header = render(<Header />);
    expect(header);
  });
  test("Logo has been loaded", () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo).toEqual(logo);
    expect(logo).toHaveAttribute("alt", "Page logo on title");
  });
});

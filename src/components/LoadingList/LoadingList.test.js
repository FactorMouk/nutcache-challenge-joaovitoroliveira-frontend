import React from "react";
import { LoadingList } from "./LoadingList";
import { render, screen } from "@testing-library/react";
import listLoadingIllust from "./../../assets/imgs/listLoadingIllust.svg";

describe("LoadingList", () => {
  test("LoadingList has been rendered", () => {
    const loadingList = render(<LoadingList />);
    expect(loadingList);
  });
  test("LoadingList illustration has been loaded", () => {
    render(<LoadingList />);
    const loadingIllust = screen.getByRole("img");
    expect(loadingIllust).toHaveAttribute("src", listLoadingIllust);
    expect(loadingIllust).toHaveAttribute("alt", "Loading list");
  });
});

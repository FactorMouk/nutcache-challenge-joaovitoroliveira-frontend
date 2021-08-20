import React from "react";
import { Footer } from "./Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  test("Footer has been rendered", () => {
    const footer = render(<Footer />);
    expect(footer);
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/";

describe("App", () => {
  test("App has been rendered", () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app);
  });
});

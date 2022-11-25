import React from "react";
import Router from "./src/Router";
import {store} from "./src/redux/store";
import {Provider} from "react-redux";
import {initialState} from "./__mocks__/initialState";
//import '@testing-library/jest-dom';
import {
  render,
  fireEvent,
  screen,
  getNodeText,
} from "@testing-library/react-native";

const TestApp = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

describe("With React Testing Library", () => {
  it("is app render", () => {
    render(<TestApp />);
    const simpsonsView = screen.getByTestId("view-simpsons");
    expect(simpsonsView).toBeDefined();
  });
});

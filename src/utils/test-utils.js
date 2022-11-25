import React, {ReactElement} from "react";
import {Provider} from "react-redux";
import {
  render as rtlRender,
  RenderOptions,
} from "@testing-library/react-native";
import {
  configureStore,
  EmptyObject,
  EnhancedStore,
  PreloadedState,
} from "@reduxjs/toolkit";

// import your reducers
import simpsonReducer from "../redux/simpsonSlice";

function render(ui, options) {
  const {preloadedState} = options || {};

  const store =
    options?.store ||
    configureStore({
      reducer: {
        simpson: simpsonReducer,
      },
      preloadedState,
    });

  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, {wrapper: Wrapper, ...options});
}

// re-export everything
export * from "@testing-library/react-native";
// override render method
export {render};

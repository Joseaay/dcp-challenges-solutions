import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
jest.mock(`!raw-loader!../../challenges/1.js`, () => "hello-raw-data", {
    virtual: true
});
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

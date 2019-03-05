import React, { Component } from "react";
import "./App.scss";
import { BoxComponent } from "./components/box/Box";

class App extends Component {
    render() {
        return (
            <div className="dcp-challenges-solutions-app">
                <h1>Daily Coding Challenge</h1>
                <h2>Solutions</h2>
                <BoxComponent />
            </div>
        );
    }
}

export default App;

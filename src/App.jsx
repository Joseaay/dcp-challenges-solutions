import React, { Component } from "react";
import "./App.scss";
import { BoxComponent } from "./components/Box/Box";
import { AppContext } from "./AppContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            changeTab: this.changeTab
        };
    }

    changeTab = selectedTab => {
        this.setState(_ => ({
            selectedTab
        }));
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className="dcp-challenges-solutions-app">
                    <h1>Daily Coding Challenge</h1>
                    <h2>Solutions</h2>
                    <BoxComponent />
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;

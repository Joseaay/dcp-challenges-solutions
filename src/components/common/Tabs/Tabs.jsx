import React from "react";
import "./tabs.scss";
import { TabComponent } from "../Tab/Tab";
import { AppContext } from "../../../AppContext";

export class TabsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: 33,
            tabPage: 0
        };
    }

    prevPage = () =>
        this.setState(prevState => ({
            tabPage:
                prevState.tabPage < 0
                    ? prevState.tabPage + 1000
                    : prevState.tabPage
        }));

    nextPage = () =>
        this.setState(prevState => ({
            tabPage:
                Math.abs(prevState.tabPage) <
                Math.floor(prevState.tabs / 10) * 1000
                    ? prevState.tabPage - 1000
                    : prevState.tabPage
        }));

    render() {
        return (
            <AppContext.Consumer>
                {({ selectedTab }) => (
                    <div className="tabs">
                        <div
                            className="tabs__arrow tabs__arrow--left"
                            onClick={this.prevPage}
                        />
                        {[...Array(this.state.tabs).keys()].map((e, i) => (
                            <TabComponent
                                i={i + 1}
                                selected={selectedTab}
                                style={{
                                    transform: `translateX(${
                                        this.state.tabPage
                                    }%)`
                                }}
                            />
                        ))}
                        <div
                            className="tabs__arrow tabs__arrow--right"
                            onClick={this.nextPage}
                        />
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

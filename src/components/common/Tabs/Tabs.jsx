import React from "react";
import "./tabs.scss";
import { TabComponent } from "../Tab/Tab";

export class TabsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: 65,
            tabPage: 0
        };
    }

    prevPage = () =>
        this.setState(prevState =>
            this.setState({ tabPage: prevState.tabPage + 1000 })
        );

    nextPage = () =>
        this.setState(prevState =>
            this.setState({ tabPage: prevState.tabPage - 1000 })
        );

    render() {
        return (
            <div className="tabs">
                <div
                    className="tabs__arrow tabs__arrow--left"
                    onClick={this.prevPage}
                >{`<-`}</div>
                {[...Array(this.state.tabs).keys()].map((e, i) => (
                    <TabComponent
                        i={i + 1}
                        style={{
                            transform: `translateX(${this.state.tabPage}%)`
                        }}
                    />
                ))}
                <div
                    className="tabs__arrow tabs__arrow--right"
                    onClick={this.nextPage}
                >{`->`}</div>
            </div>
        );
    }
}

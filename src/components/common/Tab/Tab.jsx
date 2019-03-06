import React from "react";
import "./tab.scss";
import { AppContext } from "../../../AppContext";

export const TabComponent = ({ style, i, selected, onClick }) => (
    <AppContext.Consumer>
        {({ changeTab }) => (
            <div
                style={style}
                onClick={() => changeTab(i)}
                className={`tab ${selected === i ? "tab--selected" : ""}`}
            >
                {i}
            </div>
        )}
    </AppContext.Consumer>
);

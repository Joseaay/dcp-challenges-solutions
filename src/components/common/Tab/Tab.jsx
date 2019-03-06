import React from "react";
import "./tab.scss";

export const TabComponent = ({ style, i, selected, onClick }) => (
    <div
        style={style}
        onClick={() => onClick(i)}
        className={`tab ${selected === i ? "tab--selected" : ""}`}
    >
        {i}
    </div>
);

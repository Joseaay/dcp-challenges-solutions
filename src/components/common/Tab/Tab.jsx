import React from "react";
import "./tab.scss";
import { contextConsumer } from "../../hoc/context-consumer.hoc";

export const Tab = ({ style, i, selected, changeTab }) => (
    <div
        style={style}
        onClick={() => changeTab(i)}
        className={`tab ${selected === i ? "tab--selected" : ""}`}
    >
        {i}
    </div>
);

export const TabComponent = contextConsumer(Tab);

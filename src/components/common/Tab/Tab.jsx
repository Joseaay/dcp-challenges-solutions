import React from "react";
import "./tab.scss";

export const TabComponent = ({ style, i }) => (
    <div style={style} className="tab">
        {i}
    </div>
);

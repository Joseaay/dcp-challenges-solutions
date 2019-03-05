import React from "react";
import "./box.scss";
import { TabsComponent } from "../common/Tabs/Tabs";

export const BoxComponent = () => (
    <div className="box">
        <TabsComponent />
        {[...Array(Math.floor(Math.random() * 100) + 1).keys()].map(() => (
            <div>HELLO</div>
        ))}
    </div>
);

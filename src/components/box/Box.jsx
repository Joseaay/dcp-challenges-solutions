import React from "react";
import "./box.scss";
import { TabsComponent } from "../common/Tabs/Tabs";
import { ChallengeSolutionComponent } from "../ChallengeSolution";

export const BoxComponent = () => (
    <div className="box">
        <TabsComponent />
        <div className="box__content">
            {/* {[...Array(Math.floor(Math.random() * 100) + 1).keys()].map(() => (
                <div>HELLO</div>
            ))} */}
            <ChallengeSolutionComponent />
        </div>
    </div>
);

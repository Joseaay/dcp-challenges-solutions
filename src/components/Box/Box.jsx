import React from "react";
import "./box.scss";
import { TabsComponent } from "../common/Tabs/Tabs";
import { ChallengeSolutionComponent } from "../ChallengeSolution";

export const BoxComponent = () => (
    <div className="box">
        <TabsComponent />
        <div className="box__content">
            <ChallengeSolutionComponent />
        </div>
    </div>
);

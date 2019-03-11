import React, { useState } from "react";
import "./tabs.scss";
import { TabComponent } from "../Tab/Tab";
import { contextConsumer } from "../../hoc/context-consumer.hoc";

export const Tabs = ({ selectedTab }) => {
    const [tabs] = useState(11);
    const [tabPage, setTabPage] = useState(0);

    const prevPage = _ => (tabPage < 0 ? setTabPage(tabPage + 1000) : null);

    const nextPage = _ =>
        Math.abs(tabPage) < Math.floor(tabs / 10) * 1000
            ? setTabPage(tabPage - 1000)
            : null;

    return (
        <div className="tabs">
            {tabs > 10 && (
                <div
                    className="tabs__arrow tabs__arrow--left"
                    onClick={prevPage}
                />
            )}
            {[...Array(tabs).keys()].map((e, i) => (
                <TabComponent
                    key={`tab${i}`}
                    i={i + 1}
                    selected={selectedTab}
                    style={{
                        transform: `translateX(${tabPage}%)`
                    }}
                />
            ))}
            {tabs > 10 && (
                <div
                    className="tabs__arrow tabs__arrow--right"
                    onClick={nextPage}
                />
            )}
        </div>
    );
};

export const TabsComponent = contextConsumer(Tabs);

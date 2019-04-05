import React, { useState } from "react";
import "./tabs.scss";
import { TabComponent } from "../Tab/Tab";
import { contextConsumer } from "../../hoc/context-consumer.hoc";

export const Tabs = ({ selectedTab }) => {
    const [tabs] = useState(13);
    const [tabPage, setTabPage] = useState(0);

    const nextPageButtonAvailable = () =>
        Math.abs(tabPage) < Math.floor(tabs / 10) * 1000;
    const prevPageButtonAvailable = () => tabPage < 0;

    const prevPage = _ =>
        prevPageButtonAvailable() ? setTabPage(tabPage + 1000) : null;

    const nextPage = _ =>
        nextPageButtonAvailable() ? setTabPage(tabPage - 1000) : null;

    return (
        <div className="tabs">
            {prevPageButtonAvailable() && (
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
            {nextPageButtonAvailable() && (
                <div
                    className="tabs__arrow tabs__arrow--right"
                    onClick={nextPage}
                />
            )}
        </div>
    );
};

export const TabsComponent = contextConsumer(Tabs);

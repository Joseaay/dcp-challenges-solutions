import React from "react";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/monokai.css";
import "./challenge-solution.scss";
import { AppContext } from "../../AppContext";
// eslint-disable-next-line import/no-webpack-loader-syntax
const getChallengeRaw = num =>
    require(`!raw-loader!../../challenges/${num}.js`);
const getChallenge = num =>
    require(`../../challenges/${num}.js`)[`dcpChallenge${num}`](
        [10, 15, 3, 7],
        17
    );

export const ChallengeSolutionComponent = () => (
    <AppContext.Consumer>
        {value => (
            <div className="challenge-solution">
                <h2 className="challenge-solution__title">
                    Daily Coding Solution #{value.selectedTab}
                </h2>
                <p>
                    Given a list of numbers and a number k, return whether any
                    two numbers from the list add up to k.
                </p>
                <p>
                    For example, given [10, 15, 3, 7] and k of 17, return true
                    since 10 + 7 is 17.
                </p>
                <Highlight language="javascript">
                    {getChallengeRaw(value.selectedTab)}
                </Highlight>
                {getChallenge(value.selectedTab)}
            </div>
        )}
    </AppContext.Consumer>
);

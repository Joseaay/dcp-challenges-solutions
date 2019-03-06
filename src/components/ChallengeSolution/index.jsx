import React from "react";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/monokai.css";
import "./challenge-solution.scss";
// eslint-disable-next-line import/no-webpack-loader-syntax
import challenge1 from "!raw-loader!../../challenges/1.js";

export const ChallengeSolutionComponent = () => (
    <div className="challenge-solution">
        <h2 className="challenge-solution__title">Daily Coding Solution #1</h2>
        <p>
            Given a list of numbers and a number k, return whether any two
            numbers from the list add up to k.
        </p>
        <p>
            For example, given [10, 15, 3, 7] and k of 17, return true since 10
            + 7 is 17.
        </p>
        <Highlight language="javascript">{challenge1}</Highlight>
    </div>
);

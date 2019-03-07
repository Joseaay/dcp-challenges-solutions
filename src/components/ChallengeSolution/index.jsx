import React, { useState } from "react";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/monokai.css";
import "./challenge-solution.scss";
import { AppContext } from "../../AppContext";
import { getRawChallenge } from "../../helpers/get-raw-challenge";
import { calculatePerformanceTime } from "../../helpers/calculate-performance-time";
import { generateInputFields } from "../../helpers/generate-input-fields";
import { defaultResponse } from "../../helpers/calculate-performance-time";
const getChallenge = challengeNumber =>
    calculatePerformanceTime(
        require(`../../challenges/${challengeNumber}.js`)[
            `dcpChallenge${challengeNumber}`
        ],
        challengeNumber
    );

export const ChallengeSolutionComponent = () => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(defaultResponse);
    const evaluateFunction = value =>
        setResult(getChallenge(value.selectedTab)(inputs));
    return (
        <AppContext.Consumer>
            {value => (
                <div className="challenge-solution">
                    <h2 className="challenge-solution__title">
                        Daily Coding Solution #{value.selectedTab}
                    </h2>
                    <p>
                        The following box will contain the Daily Coding Solution
                        number {value.selectedTab}. You'll find the definition
                        for the exercise as a comment above the function
                        solution.
                    </p>
                    <p>
                        You're able to execute the proposed solution by sending
                        custom parameters to it. These parameters can be added
                        in the <b>Try it out!</b> section. Be aware of the
                        arguments formating as it can make the funstion to fail
                    </p>
                    <Highlight language="javascript">
                        {getRawChallenge(value.selectedTab)}
                    </Highlight>
                    <h3 className="challenge-solution__subtitle">
                        Try it out!
                    </h3>
                    <h4>Arguments</h4>
                    {generateInputFields(value.selectedTab, setInputs, inputs)}
                    <button
                        type="button"
                        onClick={() => evaluateFunction(value)}
                    >
                        Send
                    </button>
                    {`Result: ${result.result}`}
                    {`Time: ${result.time}`}
                    {`Error: ${result.error}`}
                </div>
            )}
        </AppContext.Consumer>
    );
};

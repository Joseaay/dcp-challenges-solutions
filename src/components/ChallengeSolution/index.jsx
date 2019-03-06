import React, { useState } from "react";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/monokai.css";
import "./challenge-solution.scss";
import { AppContext } from "../../AppContext";
import { reduceFunctionGarbage } from "../../helpers/reduce-function-garbage";
import { calculatePerformanceTime } from "../../helpers/calculate-performance-time";
// eslint-disable-next-line import/no-webpack-loader-syntax
const getChallengeRaw = num =>
    reduceFunctionGarbage(require(`!raw-loader!../../challenges/${num}.js`));
const getChallenge = num =>
    calculatePerformanceTime(
        require(`../../challenges/${num}.js`)[`dcpChallenge${num}`]
    );

export const ChallengeSolutionComponent = () => {
    const [inputs, setInputs] = useState({});

    return (
        <AppContext.Consumer>
            {value => (
                <div className="challenge-solution">
                    <h2 className="challenge-solution__title">
                        Daily Coding Solution #{value.selectedTab}
                    </h2>
                    <p>
                        Given a list of numbers and a number k, return whether
                        any two numbers from the list add up to k.
                    </p>
                    <p>
                        For example, given [10, 15, 3, 7] and k of 17, return
                        true since 10 + 7 is 17.
                    </p>
                    <Highlight language="javascript">
                        {getChallengeRaw(value.selectedTab)}
                    </Highlight>
                    <h3 className="challenge-solution__subtitle">
                        Try it out!
                    </h3>
                    <h4>Arguments</h4>
                    <input
                        onChange={e =>
                            setInputs({ ...inputs, 0: e.target.value })
                        }
                    />
                    <input
                        onChange={e =>
                            setInputs({ ...inputs, 1: e.target.value })
                        }
                    />
                    <button>Send</button>
                    {inputs[0] &&
                        inputs[1] &&
                        getChallenge(value.selectedTab)(
                            inputs[0].split(" ").map(Number),
                            inputs[1]
                        )}
                </div>
            )}
        </AppContext.Consumer>
    );
};

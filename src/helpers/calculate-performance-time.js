import { findArguments } from "./find-arguments";

export const defaultResponse = {
    error: null,
    time: null,
    result: null
};

const _parseChallengeArguments = value => ({
    arrayNumber: value.split(",").map(Number),
    arrayString: value.split(",").map(String),
    number: Number(value),
    string: String(value)
});

export const calculatePerformanceTime = (
    funcToTest,
    challengeNumber
) => inputsValues => {
    const initialTime = window.performance.now();
    const challengeArguments = findArguments(challengeNumber);
    let returnedResult;
    try {
        if (inputsValues.length === 0) throw Error();
        const generatedArgs = Object.keys(inputsValues).map(x => {
            if (inputsValues[x] === "" || inputsValues[x].includes(" "))
                throw Error();
            return _parseChallengeArguments(inputsValues[x])[
                challengeArguments[x]
            ];
        });
        returnedResult = funcToTest(...generatedArgs);
    } catch (error) {
        console.error(error);
        return {
            ...defaultResponse,
            error:
                "ERROR:: Arguments passed have probably wrong format. Please check and try again."
        };
    }
    const endTime = window.performance.now();
    return {
        ...defaultResponse,
        time: endTime - initialTime,
        result: `${returnedResult}`
    };
};

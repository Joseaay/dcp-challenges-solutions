import { findArguments } from "./find-arguments";

export const defaultResponse = {
    error: null,
    time: null,
    result: null
};

const _parseChallengeArguments = value => ({
    array: value.split(",").map(Number),
    number: Number(value)
});

export const calculatePerformanceTime = (
    funcToTest,
    challengeNumber
) => inputsValues => {
    const initialTime = new Date();
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
        return {
            ...defaultResponse,
            error:
                "ERROR:: Arguments passed have probably wrong format. Please check and try again."
        };
    }
    const endTime = new Date();
    return {
        ...defaultResponse,
        time: initialTime - endTime,
        result: String(returnedResult)
    };
};

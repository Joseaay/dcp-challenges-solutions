import React from "react";

import { findArguments } from "./find-arguments";
const inputTypes = (inputType, index, updateFunc, inputs) => {
    return (
        <div
            className="challenge-solution__arguments-inputs"
            key={`arguments-inputs${index}`}
        >
            <label className="challenge-solution__label">
                {
                    {
                        array:
                            "ARRAY: elements separated by comas, e.g. 1,2,3,4 => [1,2,3,4]",
                        number: "NUMBER: single number, e.g. 1 => Number(1)",
                        string:
                            "STRING: plain string, e.g. 'abc123' => String('abc123')"
                    }[inputType]
                }
            </label>
            {inputType && (
                <input
                    className="challenge-solution__input"
                    onChange={e =>
                        updateFunc({ ...inputs, [index]: e.target.value })
                    }
                />
            )}
        </div>
    );
};

export const generateInputFields = (num, updateFunc, inputs) => {
    const args = findArguments(num);
    return args.map((inputType, index) =>
        inputTypes(inputType, index, updateFunc, inputs)
    );
};

import React, { Fragment } from "react";

import { findArguments } from "./find-arguments";
const inputTypes = (inputType, index, updateFunc, inputs) => {
    return (
        <Fragment>
            {
                {
                    array: <label>array</label>,
                    number: <label>number</label>
                }[inputType]
            }
            <input
                onChange={e =>
                    updateFunc({ ...inputs, [index]: e.target.value })
                }
            />
        </Fragment>
    );
};

export const generateInputFields = (num, updateFunc, inputs) => {
    const args = findArguments(num);
    return args.map((inputType, index) =>
        inputTypes(inputType, index, updateFunc, inputs)
    );
};

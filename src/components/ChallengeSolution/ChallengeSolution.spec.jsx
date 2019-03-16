import React from "react";
import { shallow } from "enzyme";

import * as calculatePerformanceTimeModule from "../../helpers/calculate-performance-time"; // import the module
import { defaultResponse } from "../../helpers/calculate-performance-time";
import { ChallengeSolution } from "./ChallengeSolution";

jest.mock(`!raw-loader!../../challenges/1.js`, () => "MOCK_RAW", {
    virtual: true
});

jest.mock(`!raw-loader!../../challenges/2.js`, () => "MOCK_RAW", {
    virtual: true
});

const spy = jest
    .spyOn(calculatePerformanceTimeModule, "calculatePerformanceTime")
    .mockReturnValue(() => {
        return {
            ...defaultResponse,
            time: 0.00112312,
            result: `1`
        };
    });

describe("ChallengeSolutionComponent", () => {
    let wrapper;
    const tabNumber = 2;
    beforeEach(() => {
        wrapper = shallow(<ChallengeSolution selectedTab={tabNumber} />);
    });

    describe("when component was mount", () => {
        it("should render form correctly", () => {
            const title = wrapper.find(".challenge-solution__title");
            expect(title.text()).toEqual(`Daily Coding Solution #${tabNumber}`);
        });
        it("when clicking on send button should call `calculatePerformanceTime` function", () => {
            const button = wrapper.find(".challenge-solution__button");
            button.simulate("click");
            expect(spy).toHaveBeenCalled();
        });
    });
});

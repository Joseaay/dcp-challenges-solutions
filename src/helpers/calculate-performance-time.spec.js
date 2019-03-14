import { calculatePerformanceTime } from "./calculate-performance-time";

const mockFunction = jest.fn();
const mockInputData = 1;

jest.mock(`!raw-loader!../../challenges/1.js`, () => "MOCK_RAW", {
    virtual: true
});

jest.mock(`!raw-loader!../../challenges/2.js`, () => "MOCK_RAW", {
    virtual: true
});

describe("HELPER > calculate-performance-time", () => {
    it("when not failing, returns correct data", () => {
        expect(
            calculatePerformanceTime(mockFunction, 1)(mockInputData)
        ).toEqual(
            expect.objectContaining({
                error: null,
                result: expect.any(String),
                time: expect.any(Number)
            })
        );
    });
    it("when failing, returns correct data", () => {
        expect(calculatePerformanceTime(mockFunction, 2)()).toEqual(
            expect.objectContaining({
                error: expect.any(String)
            })
        );
    });
});

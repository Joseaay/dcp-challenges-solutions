export const calculatePerformanceTime = fToTest =>
    function() {
        const old_time = new Date();
        var returnResult = fToTest(...arguments);
        const new_time = new Date();
        return `Time Spent: ${new_time -
            old_time}ms --- Result: ${returnResult}`;
    };

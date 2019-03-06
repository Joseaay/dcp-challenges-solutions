export const dcpChallenge1 = function() {
    var old_time = new Date();
    var list = arguments[0];
    var k = arguments[1];

    var returnResult = list.some(e => list.includes(k - e));

    var new_time = new Date();

    return `Time Spent: ${new_time - old_time}ms --- Result: ${returnResult}`;
};

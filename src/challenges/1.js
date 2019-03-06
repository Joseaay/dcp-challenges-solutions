export const dcpChallenge1 = function() {
    let list = arguments[0];
    let k = arguments[1];
    return list.some(e => list.includes(k - e));
};

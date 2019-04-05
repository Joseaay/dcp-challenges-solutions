// ---------------------------------------------------------
// Daily Coding Problem: Problem #13
// ---------------------------------------------------------
// This problem was asked by Amazon.
//
// Given an integer k and a string s, find the length of the
// longest substring that contains at most k distinct characters.
//
// For example, given s = "abcba" and k = 2, the longest substring
// with k distinct characters is "bcb".
// REMOVE::arguments:number,string

export const dcpChallenge13 = (k, s) => {
    let bestResult = "";
    let bestResultAcc;
    let splittedString = s.split("");
    splittedString.forEach((firstLoopChar, index) => {
        let usedChars = new Set();
        usedChars.add(firstLoopChar);
        bestResultAcc = firstLoopChar;
        splittedString.slice(index + 1).some(secondLoopChar => {
            if (!usedChars.has(secondLoopChar) && usedChars.size === k) {
                if (bestResultAcc.length > bestResult.length) {
                    bestResult = bestResultAcc;
                    return true;
                }
            } else {
                if (
                    usedChars.size <= k &&
                    bestResultAcc.length > bestResult.length
                )
                    bestResult = bestResultAcc;
                bestResultAcc += secondLoopChar;
                usedChars.add(secondLoopChar);
            }
            return false;
        });
    });
    return bestResult;
};

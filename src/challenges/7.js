// ---------------------------------------------------------
// Daily Coding Problem: Problem #7
// ---------------------------------------------------------
// This problem was asked by Facebook.
//
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded
// message, count the number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could
// be decoded as 'aaa', 'ka', and 'ak'.
//
// You can assume that the messages are decodable. For example,
// '001' is not allowed.

// REMOVE::arguments:string

export const dcpChallenge7 = message => recursiveMessageDecoder([...message]);

const recursiveMessageDecoder = message => {
    if (message.length <= 1) return 1;

    let result = recursiveMessageDecoder(message.slice(1));

    if (Number(`${message[0]}${message[1]}`) <= 26)
        result += recursiveMessageDecoder(message.slice(2));
    return result;
};

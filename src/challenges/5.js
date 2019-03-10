// ---------------------------------------------------------
// Daily Coding Problem: Problem #5
// ---------------------------------------------------------
// This problem was asked by Jane Street.
//
// cons(a, b) constructs a pair, and car(pair) and cdr(pair)
// returns the first and last element of that pair. For
// example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4))
// returns 4.
//
// Given this implementation of cons:
// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
//
// Implement car and cdr.
// REMOVE::arguments:number,number

const cons = (a, b) => [a, b];

export const dcpChallenge5 = function() {
    let a = arguments[0]; //REMOVE:: used for execution purposes
    let b = arguments[1]; //REMOVE:: used for execution purposes
    return `Car: ${car(cons(a, b))}, Cdr: ${cdr(cons(a, b))}`;
};

const car = pair => pair[0];
const cdr = pair => pair[1];

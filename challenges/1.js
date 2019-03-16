// ---------------------------------------------------------
// Daily Coding Problem: Problem #1
// ---------------------------------------------------------
// This problem was recently asked by Google.
//
// Given a list of numbers and a number k, return whether any
// two numbers from the list add up to k.
//
// Example:
// Given [10, 15, 3, 7] and k of 17, return true since 10 + 7
// is 17.
// REMOVE::arguments:arrayNumber,number

export const dcpChallenge1 = (list, k) => list.some(e => list.includes(k - e));

// ---------------------------------------------------------
// Daily Coding Problem: Problem #2
// ---------------------------------------------------------
// This problem was asked by Uber.
//
// Given an array of integers, return a new array such that each
// element at index i of the new array is the product of all the
// numbers in the original array except the one at i.
//
// Example:
// If our input was [1, 2, 3, 4, 5], the expected output would be
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected
// output would be [2, 3, 6].
// REMOVE::arguments:array

export const dcpChallenge2 = list =>
    list.map((_, i) =>
        list.filter((_, fi) => fi !== i).reduce((a, b) => a * b)
    );

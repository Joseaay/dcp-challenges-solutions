// ---------------------------------------------------------
// Daily Coding Problem: Problem #11
// ---------------------------------------------------------
// This problem was asked by Twitter.
//
// Implement an autocomplete system. That is, given a query
// string s and a set of all possible query strings, return
// all strings in the set that have s as a prefix.
//
// For example, given the query string de and the set of strings
// [dog, deer, deal], return [deer, deal].
// REMOVE::arguments:string,array

export const dcpChallenge11 = (s, a) =>
    a.filter(
        queryString => s === queryString.slice(0, s.length - queryString.length)
    );

// ---------------------------------------------------------
// Daily Coding Problem: Problem #13
// ---------------------------------------------------------
// This problem was asked by Amazon.
//
// Given an integer k and a string s, find the length of the
// longest substring that contains at most k distinct
// characters.
//
// For example, given s = "abcba" and k = 2, the longest
// substring with k distinct characters is "bcb".
// REMOVE::arguments:number,string

export const dcpChallenge13 = (k, s) =>
	s
		.split("")
		.map((loopElement1, i) => {
			let distinctChars = new Set(loopElement1);
			let stop = false;
			return [loopElement1].concat(
				s
					.substr(i + 1)
					.split("")
					.filter(loopElement2 => {
						if (distinctChars.size < k) {
							distinctChars.add(loopElement2);
							return loopElement2;
						}
						if (distinctChars.has(loopElement2) && !stop) {
							return loopElement2;
						} else {
							stop = true;
						}
					})
			);
		})
		.reduce((a, b) => (b.length > a.length ? b : a))
		.join("");

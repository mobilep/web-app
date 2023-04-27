/**
 * @param {number} n
 * @param {number} fractionDigits
 */
const round = (n, fractionDigits = 1) => {
	return +n.toFixed(fractionDigits);
};

export const MATH_UTILS = {
	round,
};

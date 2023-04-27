export function getLastElementInArray (arr) {
	return arr.length ? arr[arr.length - 1] : null;
}

/**
 * @param {function} itemValueCb
 * @param {string} field
 * @param {'ASC' | 'DESC'} dir
 */
export const sortByField = (itemValueCb, field, dir = 'ASC') => (a, b) => {
	if (dir === 'ASC') {
		return itemValueCb(a[field]) - itemValueCb(b[field]);
	}

	return itemValueCb(b[field]) - itemValueCb(a[field]);
};

export const mergeUnique = (arr1, arr2) => Array.from(new Set([...arr1, ...arr2]));

export const matchId = (id) => (item) => id === item._id;

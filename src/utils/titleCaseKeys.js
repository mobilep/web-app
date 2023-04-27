export default function (object) {
	return Object.entries(object).reduce((prev, [key, value]) => {
		prev[key.charAt(0) + key.slice(1).toLowerCase()] = value;
		return prev;
	}, {});
}

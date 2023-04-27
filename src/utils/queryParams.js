export function generateQueryParams (params) {
	return Object.entries(params)
		// eslint-disable-next-line no-unused-vars
		.filter(([_, value]) => !!value)
		.reduce((acc, [key, value]) => {
			acc.append(key, value);

			return acc;
		}, new URLSearchParams())
		.toString();
}

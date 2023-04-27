module.exports = (types) => {
	let typeArg;
	let nameArg;

	if (process.argv[2]) {
		const _typeArg = process.argv[2];
		Object.values(types).forEach((type) => {
			if (_typeArg === `--${type}` || _typeArg === `-${type.charAt(0)}`) {
				typeArg = type;
			}
		});
		nameArg = typeArg && process.argv[3];
	}

	return {
		typeArg,
		nameArg,
	};
};

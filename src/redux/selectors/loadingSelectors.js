export const createLoadingSelector = (actions) => (state) => {
	return actions.some((action) => state.loadingInfo[action]);
};

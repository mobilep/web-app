const hasState = (stateName) => (practice) => practice.state === stateName;
const hasNotState = (stateName) => (practice) => practice.state !== stateName;

export default {
	hasState,
	hasNotState,
};

export function getPluralizationText (count, translationObject) {
	if (!translationObject) {
		return '';
	}

	return count > 1
		? translationObject.plural
		: translationObject.singular;
}

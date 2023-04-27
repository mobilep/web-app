import fr from './fr';
import en from './en';
import ru from './ru';
import it from './it';
import es from './es';
import de from './de';
import ja from './ja';
import ko from './ko';
import ch from './ch';
import pt from './pt';

const getKeys = (content, parentKey) => Object
	.entries(content)
	.reduce((acc, [key, value]) => {
		const newKey = parentKey ? `${parentKey}.${key}` : key;
		if (typeof value === 'string') acc[newKey] = true;

		// Convert arrays to objects, and handle them in the object case below.
		else if (Array.isArray(value)) {
			value = value.reduce((acc, entry, index) => ({
				...acc,
				[newKey + index]: entry,
			}), {});
		}
		if (typeof value === 'object') acc = { ...acc, ...getKeys(value, key) };

		return acc;
	}, {});

describe('constants / languages', () => {
	it('should all have the same keys', () => {
		const englishKeys = getKeys(en);
		const frenchKeys = getKeys(fr);
		const russianKeys = getKeys(ru);
		const italianKeys = getKeys(it);
		const spanishKeys = getKeys(es);
		const germanyKeys = getKeys(de);
		const japaneseKeys = getKeys(ja);
		const koreanKeys = getKeys(ko);
		const chineseKeys = getKeys(ch);
		const portugueseKeys = getKeys(pt);
		expect(frenchKeys).toEqual(englishKeys);
		expect(russianKeys).toEqual(englishKeys);
		expect(italianKeys).toEqual(englishKeys);
		expect(spanishKeys).toEqual(englishKeys);
		expect(germanyKeys).toEqual(englishKeys);
		expect(japaneseKeys).toEqual(englishKeys);
		expect(koreanKeys).toEqual(englishKeys);
		expect(chineseKeys).toEqual(englishKeys);
		expect(portugueseKeys).toEqual(englishKeys);
	});
});

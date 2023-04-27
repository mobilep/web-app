import constants from '../../src/constants/content';
const puppeteer = require('puppeteer');
const URL = 'https://dev-web.mobilepractice.io/';
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const PATH = __dirname;
const user = { email: 'taras@yopmail.com', password: '123123qq' };

const { en: EN, fr: FR } = constants;

describe('Verifying Settings Page', () => {
	jest.setTimeout(120000);
	let browser = '';
	let page = '';

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-dev-shm-usage'],
		});

		page = await browser.newPage();
		page.setViewport({ width: 1920, height: 1080 });
		await page.goto(URL);
		await page.waitForSelector('div.TextInput-wrapper.Form-textInputWrapper');
		await page.type('[type="email"]', user.email);
		await page.type('[type="password"]', user.password);
		await page.click('[type="submit"]');
		await page.waitForSelector('div.PrimaryNavigation');
		await page.$$eval('a.PrimaryNavigationItem', (elements) => {
			elements.map((el) => {
				if (el.textContent === 'SETTINGS') {
					el.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		await page.waitFor(3000);
	});

	afterEach(() => {
		browser.close();
	});

	test('Verify settings page appears as expected', async () => {
		const image = await page.screenshot({ path: `${PATH}/settingsPage.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Verify count of settings grids', async () => {
		const gridElements = await page.$$('section.SettingsPanel');
		expect(gridElements.length).toEqual(4);
	});

	test('Verify Delete User window', async () => {
		await page.click('div.Settings-grid button');
		const image = await page.screenshot({ path: `${PATH}/deleteDialog.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Verify swithing between languages works fine', async () => {
		const fr = Object.values(FR.primaryNav);
		const en = Object.values(EN.primaryNav);
		await page.type('select', 'f');
		const node = await page.$('.PrimaryNavigation');
		expect(await node.$$eval('span', (nodes) => nodes.map((n) => n.textContent)))
			.toEqual(fr);
		await page.click('div.SettingsPanel-content h1');
		await page.type('select', 'a');
		expect(await node.$$eval('span', (nodes) => nodes.map((n) => n.textContent)))
			.toEqual(en);
	});
});

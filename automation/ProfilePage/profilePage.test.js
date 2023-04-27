import puppeteer from 'puppeteer';
// const URL = 'https://dev-web.mobilepractice.io/';
const URL = 'http://localhost:3000/';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
const PATH = __dirname;
const user = { email: 'StephonBernhard@yopmail.com', password: '123123qq' };

describe('Verifying Teams Page', () => {
	jest.setTimeout(120000);
	let browser = '';
	let page = '';

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-dev-shm-usage'],
		});

		page = await browser.newPage();
		page.setViewport({ width: 1360, height: 768 });
		await page.goto(URL);
		await page.type('[type="email"]', user.email);
		await page.type('[type="password"]', user.password);
		await page.click('[type="submit"]');
		await page.waitForSelector('nav.PrimaryNavigation-nav');
		await page.$$eval('nav.PrimaryNavigation-nav a', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'PROFILE') {
					element.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
	});

	afterEach(() => {
		browser.close();
	});
	test('Verify profile page appears as expected', async () => {
		const profilePage = await page.screenshot({ path: `${PATH}/profilePage.png` });
		expect(profilePage).toMatchImageSnapshot();
	});
	test.only('Verify content of the profile page', async () => {
		await page.waitForSelector('div.ProfileInfoBox.ProfileInfoSection-item');
		const sectionItems = await page.$$('div.ProfileInfoBox.ProfileInfoSection-item');
		expect(sectionItems.length).toEqual(6);
	});
});

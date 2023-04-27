import puppeteer from 'puppeteer';
const URL = 'https://dev-web.mobilepractice.io/';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
const PATH = __dirname;

describe('Verifying forgot password page', () => {
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
		await page.waitForSelector('div.Account-linkWrapper');
		await page.click('div.Account-linkWrapper a');
	});

	afterEach(() => {
		browser.close();
	});

	test('Verify Forgot password page appears as expected', async () => {
		await page.waitForSelector('div.Account-logoWrapper');
		const image = await page.screenshot({ path: `${PATH}/forgotPasswordPage.png` });
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('div.Form-paragraph');
		const titleOfPage = await page.$eval('div.Form-paragraph', ((element) => element.innerHTML));
		expect(titleOfPage).toEqual('Enter your email and we will send you a link to reset your password');

		await page.$('[type="submit"]', (button) => {
			if (!button) {
				console.log('button is not presented');
			}
		});

		const returnButton = await page.$eval('div.Account-linkWrapper a', ((element) => element.innerHTML));
		expect(returnButton).toEqual('Just remember');

	});

	test('Enter non existing email into the field', async () => {
		await page.waitForSelector('[name="email"]');
		await page.type('[name="email"]', 'non-existing-email@yopmail.com');
		await page.click('[type="submit"]');
		await page.waitForSelector('div.SubmitResult-message');
		const errorMessage = await page.$eval('div.SubmitResult-message', ((element) => element.innerHTML));
		expect(errorMessage).toEqual('Looks like your email can not be send');

		const image = await page.screenshot({ path: `${PATH}/forgotPasswordPageError.png` });
		expect(image).toMatchImageSnapshot();

		await page.click('[type="button"]');
		await page.waitForSelector('div.Form-paragraph');
		const forgotPasswordPageTitle = await page.$eval('div.Form-paragraph', ((element) => element.innerHTML));
		expect(forgotPasswordPageTitle).toEqual('Enter your email and we will send you a link to reset your password');
	});
	test('User can`t leave email field empty', async () => {
		await page.waitForSelector('[name="email"]');
		await page.click('[type="submit"]');
		await page.hover('div.InputError');
		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});
	test('Verify swithing between forgot password page and sign in page', async () => {
		const expectedSignInPageTitle = 'Please sign in to continue';
		const expectedForgotPasswordPageTitle = 'Enter your email and we will send you a link to reset your password';

		expect(await page.$eval('div.Form-paragraph', (element) => element.innerHTML))
			.toEqual(expectedForgotPasswordPageTitle);

		await page.click('div.Account-linkWrapper a');
		expect(await page.$eval('div.Form-paragraph', (element) => element.innerHTML)).toEqual(expectedSignInPageTitle);

	});
});

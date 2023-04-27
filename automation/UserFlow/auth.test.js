import puppeteer from 'puppeteer';
const URL = 'https://dev-web.mobilepractice.io/';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
const PATH = __dirname;

describe('Validation auth system', () => {
	jest.setTimeout(120000);
	let browser = '';
	let page = '';
	const charactersArray = ['!', '@', '#', '$', '^', '&', '*', '(', ')', '='];

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-dev-shm-usage'],
		});
		page = await browser.newPage();
		page.setViewport({ width: 1920, height: 1080 });
		await page.goto(URL);
	});

	afterEach(() => {
		browser.close();
	});

	test('Verify hide/show functionality for password field on Sign In Page', async () => {
		const passwordFiledHide = await page.$eval('[name="password"]', (element) => element.type);
		expect(passwordFiledHide).toEqual('password');
		await page.click('button.Button.TextInput-toggleBtn');
		const passwordFieldShow = await page.$eval('[name="password"]', (element) => element.type);
		expect(passwordFieldShow).toEqual('text');
		await page.click('button.Button.TextInput-toggleBtn');
		expect(passwordFiledHide).toEqual('password');
	});

	test('Verify "The email or password combination is not valid"', async () => {
		await page.waitForSelector('div.Account-formWrapper');
		await page.type('[name="email"]', 'z@yopmail.com');
		await page.type('[type="password"]', '12345678');
		await page.click('[type="submit"]');
		await page.waitForSelector('div.ErrorBox.ErrorBox-withIcon.SignInForm-formErrorBox');
		const error = await page
			.$eval('div.ErrorBox.ErrorBox-withIcon.SignInForm-formErrorBox span', ((element) => element.innerHTML));
		expect(error).toEqual('The email or password combination is not valid');

		const signInForm = await page.$('div.Form.SignInForm');
		const image = await signInForm.screenshot({ path: `${PATH}/signInForm.png` });
		expect(image).toMatchImageSnapshot();

	});

	test('Verify Sign In page appears correct', async () => {
		await page.waitForSelector('div.Account-formWrapper');
		const image = await page.screenshot({ path: `${PATH}/signInPage.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Check Sign In page logo', async () => {
		await page.waitForSelector('div.Account-logoWrapper');
		const logo = await page.$('div.Account-logoWrapper');
		const image = await logo.screenshot({ path: `${PATH}/logo.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Verify Forgot Password button', async () => {
		await page.waitForSelector('div.Account-linkWrapper');
		const forgotPassword = await page.$eval('div.Account-linkWrapper a', ((element) => element.innerHTML));
		expect(forgotPassword).toEqual('Forgot password?');
	});

	test('Fill email field without @ symbol', async () => {
		await page.type('[name="email"]', 'test');
		await page.click('[type="password"]');
		await page.hover('div.InputError');

		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});
	test('Leave email field empty', async () => {
		await page.click('[name="email"]');
		await page.click('[type="password"]');
		await page.hover('div.InputError');

		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});

	charactersArray.forEach((element) => {
		test(`Fill email field with ${element}@yopmail.com`, async () => {
			await page.type('[name="email"]', `${element}@yopmail.com`);
			await page.click('[type="password"]');
			await page.hover('div.InputError');
			await page.$eval('div.InputError-message-shown', ((el) => {
				if (!el) {
					console.log('Element not found');
				}
			}));
		});
	});

	test('Leave password field empty', async () => {
		await page.type('[name="email"]', 'test@yopmail.com');
		await page.click('[type="submit"]');
		await page.hover('div.InputError');

		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});

	test('Enter in field less than 8 symbols should show error', async () => {
		await page.type('[name="email"]', 'test@yopmail.com');
		await page.type('[type="password"]', '1234567');
		await page.click('[type="submit"]');
		await page.hover('div.InputError');

		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});
	test('Enter in field more than 36 symbols should show error', async () => {
		await page.type('[name="email"]', 'test@yopmail.com');
		await page.type('[type="password"]', '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ');
		await page.click('[type="submit"]');
		await page.hover('div.InputError');
		await page.$eval('div.InputError-message-shown', ((el) => {
			if (!el) {
				console.log('Element not found');
			}
		}));
	});
	test('Enter valid email and password', async () => {
		await page.type('[name="email"]', 'z@yopmail.com');
		await page.type('[type="password"]', '12345678');
		await page.click('div.Account-logoWrapper');
		if (!await page.$('div.InputError')) {
			console.log('There are no errors');
		} else {
			console.log('Test should fail');
		}
	});
});

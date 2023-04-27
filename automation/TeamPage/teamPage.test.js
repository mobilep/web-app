import puppeteer from 'puppeteer';
const URL = 'https://dev-web.mobilepractice.io/';
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
		page.setViewport({ width: 1920, height: 1080 });
		await page.goto(URL);
		await page.type('[type="email"]', user.email);
		await page.type('[type="password"]', user.password);
		await page.click('[type="submit"]');
		await page.waitForSelector('nav.PrimaryNavigation-nav');
		await page.$$eval('nav.PrimaryNavigation-nav a', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'TEAM') {
					element.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		await page.waitForSelector('div.SecondaryNavigation-header');
	});

	afterEach(() => {
		browser.close();
	});

	test.only('Verify Teams Page appears as expected', async () => {
		expect(await page.$eval('div.SecondaryNavigation-header h3', (element) =>
			element.textContent)).toEqual('Teams');
		await page.click('div.SecondaryNavigation-header a');
		const teamsHeader = await page.$('div.TeamsHeader');
		const teamsHeaderIamge = await teamsHeader.screenshot({ path: `${PATH}/teamsHeader.png` });
		expect(teamsHeaderIamge).toMatchImageSnapshot();
	});
	test('Verify creating team flow works as expected', async () => {
		await page.click('div.SecondaryNavigation-header a');
		await page.waitForSelector('[type="checkbox"]');
		await page.$$eval('[type="checkbox"]', (elements) => {
			elements.forEach((element, index) => {
				if (index < 4) {
					element.click();
				}
			});
		});
		const teamName = new Date().toISOString().slice(11, 19);
		await page.type('[type="text"]', teamName);
		await page.click('[type="submit"]');
		await page.waitFor(5000);
		const listOfTeams = await page.$$eval('div.TeamCard-header', (elements) => elements.map((el) => el.innerText));
		expect(listOfTeams).toContain(teamName);
	});
	test('Verify editing team', async () => {
		await page.waitForSelector('div.TeamCard');
		await page.click('div.TeamCard');
		const teamName = await page.$eval('div.TeamCard.TeamCard-active div.TeamCard-header',
			(element) => element.innerText);
		await page.waitForSelector('div.TeamsHeader-name');
		await page.$$eval('button.Button', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'Edit') {
					element.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		await page.waitForSelector('[type="text"]');
		await page.type('input.TextInput.TeamsHeader-input', 'Edited');
		await page.$$eval('button.Button', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'Save') {
					element.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		await page.waitFor(2000);
		const listOfTeams = await page.$$eval('div.TeamCard-header', (elements) => elements.map((el) => el.innerText));
		expect(listOfTeams).toContain(`${teamName}Edited`);
	});
	test('Verify delete functionalty', async () => {
		await page.waitForSelector('div.TeamCard');
		await page.click('div.TeamCard');
		const teamName = await page.$eval('div.TeamCard.TeamCard-active div.TeamCard-header',
			(element) => element.innerText);
		await page.waitFor(3000);
		await page.$$eval('button.Button', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'Delete') {
					element.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		await page.waitFor(3000);
		const deleteDialog = await page.$('dialog.DialogWithButtonGroup');
		await deleteDialog.$$eval('button.Button', (elements) => {
			elements.map((element) => {
				if (element.textContent === 'Delete') {
					element.click();
				} else {
					console.log('Element is not foud');
				}
			});
		});
		await page.waitFor(2000);
		const listOfTeams = await page.$$eval('div.TeamCard-header', (elements) => elements.map((el) => el.innerText));
		expect(listOfTeams).not.toContain(teamName);
	});
});

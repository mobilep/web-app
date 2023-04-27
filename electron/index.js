const { app, BrowserWindow } = require('electron');
const path = require('path');
require('electron-context-menu')();

const BrowserWindowConfig = {
	height: 768,
	width: 1200,
	minWidth: 480,
	minHeight: 640,
	icon: path.join(__dirname, 'icons/64x64.png'),
};

const getDeeplinkingUrl = (argv) => argv.slice(1).toString();

const getUrlToLoad = (str, urlFallback = '') => {
	try {
		return str.split('mobilepractice://')[1];
	} catch (e) {
		return urlFallback;
	}
};

const navigateWebContentsTo = (webContents, url) => {
	webContents.executeJavaScript(`
		try {
			const location = new URL("${url}");
			window.push(location.pathname);
		} catch (e) {
			console.log(e);
			console.log('ooppss');
		}
	`);
};

let mainWindow;

if (!app.isDefaultProtocolClient('mobilepractice')) {
	app.setAsDefaultProtocolClient('mobilepractice');
}

app.on('ready', () => {
	// TODO: Use environment variable to change this URL.
	let urlToLoad = 'https://electron.mobilepractice.io';

	mainWindow = new BrowserWindow(BrowserWindowConfig);

	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	if (process.platform === 'win32') {
		try {
			const deeplinkingUrl = getDeeplinkingUrl(process.argv);
			if (deeplinkingUrl && deeplinkingUrl !== 'index.js') {
				urlToLoad = getUrlToLoad(deeplinkingUrl, urlToLoad);
			}
		} catch (e) {
			console.log(e);
		}
	}
	mainWindow.loadURL(urlToLoad);
});

let deeplinkingUrl;

const shouldQuit = app.makeSingleInstance((argv) => {
	if (process.platform === 'win32') {
		deeplinkingUrl = getDeeplinkingUrl(argv);
	}

	if (mainWindow) {
		if (mainWindow.isMinimized()) mainWindow.restore()
		const nextUrl = getUrlToLoad(deeplinkingUrl);
		navigateWebContentsTo(mainWindow.webContents, nextUrl);
		mainWindow.focus();
	}
});

if (shouldQuit) {
	app.quit();
	return;
}

app.on('window-all-closed', () => app.quit());

// eslint-disable-next-line
function logEverywhere (s, a) {
	console.log(s, a);
	if (mainWindow && mainWindow.webContents) {
		mainWindow.webContents.executeJavaScript(`console.log("${s}", "${a}")`);
	}
}

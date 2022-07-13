/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import axios from 'axios';
import { app, ipcMain, shell } from 'electron';
const { BrowserWindow } = require('electron-acrylic-window');

import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    kiosk: true,
    transparent: true,
    frame: false,
    vibrancy: {
      theme: 'dark', // (default) or 'dark' or '#rrggbbaa'
      effect: 'blur', // (default) or 'blur'
      disableOnBlur: true, // (default)
    },
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    // if (process.env.START_MINIMIZED) {
    //   mainWindow.minimize();
    // } else {
    //   mainWindow.show();
    // }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

(async () => {
  try {
    await app.whenReady();
    createWindow();

    let request = await axios.get(
      'https://leetcode-stats-api.herokuapp.com/ShaanCoding'
    );
    let data = request.data;

    // If API works, we check if user has done their daily leetcode challenge
    if (data.status == 'success') {
      if (
        (await mainWindow?.webContents.executeJavaScript(
          'localStorage.length'
        )) == 0
      ) {
        await mainWindow?.webContents.executeJavaScript(
          `localStorage.setItem('totalSolved', '${data.totalSolved}')`
        );
      }

      let oldTotalSolved = await mainWindow?.webContents.executeJavaScript(
        "localStorage.getItem('totalSolved')"
      );
      let totalSolved = data.totalSolved;

      // If this is done, the user has done their daily leetcode question :D
      if (totalSolved > oldTotalSolved) {
        await mainWindow?.webContents.executeJavaScript(
          `localStorage.setItem('totalSolved', '${totalSolved}')`
        );
        app.quit();
      } else {
        // Else the user must do their daily leetcode question
        mainWindow.show();
      }

      console.log(oldTotalSolved);
    } else {
      // Means it's not working and close app
      app.quit();
    }
  } catch (ex) {
    console.log(ex);
  }

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow();
  });
})();

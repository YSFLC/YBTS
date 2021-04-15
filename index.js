'use strict';

//モジュールを使えるようにする
const {app, BrowserWindow} = require("electron");

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

//アプリの画面を作成
function createWindow (){
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {
    nodeIntegration: false,
    contextIsolation: false,
    preload: __dirname + '/index.js'
  }});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
}

// Electronの初期化完了後に実行
app.on('ready', function() {
  createWindow();
});

//アプリの画面が閉じられたら実行
app.on('window-all-closed', () => {
  // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
  // アプリケーションとそのメニューバーは有効なままにするのが一般的です。
  if (process.platform !== 'darwin') {
    mainWindow = null;
    app.quit()
  }
});

app.on('activate', () => {
  // macOSでは、ユーザがドックアイコンをクリックしたとき、
  // そのアプリのウインドウが無かったら再作成するのが一般的です。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
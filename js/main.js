const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const createWindow = () => {
  const iconPath = path.join(__dirname, "logoico.ico");
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: iconPath,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("./main.html");

  Menu.setApplicationMenu(null);
};

app.whenReady().then(createWindow);

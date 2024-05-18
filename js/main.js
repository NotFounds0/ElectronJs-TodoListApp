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

  const menu = new Menu.buildFromTemplate([
    {
      label: "TodoApp",
      submenu: [
        {
          label: "Yenile",
          role: "reload",
        },
        {
          label: "versiyon",
          role: "about",
        },
        {
          label: "Çıkış",
          role: "quit",
        },
        {
          label: "Geliştirici",
          role: "toggleDevTools",
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
};

app.whenReady().then(createWindow);

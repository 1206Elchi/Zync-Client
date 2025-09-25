const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;
function createWindow() {
    // create a window
    const win = new BrowserWindow({
        // TODO: remember user preferences for windows
        // and load it from a json file. having to resize a window each time it starts
        // is annoying.
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "../ipc/preload.js")
        },
        sandbox: true
    });

    // load our HTML file
    win.loadFile("html/index.html");
}

// when the app is ready, run the createWindow() function
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});

// make sure the app properly closes on macos,
// since apple is so special!
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});

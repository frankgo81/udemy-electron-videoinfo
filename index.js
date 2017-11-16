const electron = require("electron");
const {app, BrowserWindow, ipcMain} = electron;
const ffmpeg = require("fluent-ffmpeg");
let mainWindow;

app.on("ready",()=>{
   //console.log("app is ready");
       mainWindow=  new BrowserWindow({});
       mainWindow.loadURL(`file://${__dirname}/index.html`);
})

ipcMain.on('video:submit', (event, path)=>{

 console.log(event);
 console.log(path);
 ffmpeg.ffprobe(path, (err, metadata)=>{
    console.log(mainWindow);
    mainWindow.webContents.send("video:metadata", metadata.format.duration);
   //console.log("video duration is", metadata.format.duration);
 })

})

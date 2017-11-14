const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready",()=>{
   //console.log("app is ready");
  new BrowserWindow({});
  
})

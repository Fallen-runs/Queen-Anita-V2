//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adelekeisaiah62@gmail.com";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349031485481";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09tNWp6VFo2NTJreXlUemVma3hNUVhFMnlQT1gwWFlrRURJSzN3RXRHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm11b2Y2ZlRmWVVPUnkrLzRaVjBZV3JPSmhRKy9yaStJVVc4RUo1dFluQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWdQeGNjN05CNDl6Si9nOFdhdnRCNEg5a2srQ3Jld3lVRmlmdVFFQVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMHZDRFBaSFplR3hiWCt1SFRxMm84ZXlHSEs5TXNXWTFrZkErcUI1c0VjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FcVN5SDByYVhTVVY3MkQ4QzlublNFbkRBQ0VmckJGaGlRYS9vR3lTMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRNU3o4T1dKU3RYV2cvRmVTeVRZVG9SZ3U3SlJuZjUvbHJXTUJ6d3EwaGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUI2UDR5TDJzVGxRd01MUng2YUJWOVA1ejFPdGp3WWxxN2dpcFV5KzZIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlhrLzVNSmRSL2hqOGpKd2VVN0tTZDNUNlRMOG12QXlLZng5OGs0SDlGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVZWWdWQ0hQNDRIK3BpU2xDWHVWUUExcWhhRHhnb2hpY0xHbDhHa1lMVGhyemZYR2NtbVpSMkx4dVpiYTkrZDRsbnNIM0s4bDhGUUV1RkhicExkeEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJ6MDZnNGRRaUU5d3BZRFIwWkNNbnh1MlgrSUFiazdJSUpJajcvMmM5Z2dBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMzE0ODU0ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0RDZFQ0YxOEMxQUM4RUY4NTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTk3MDIwM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSmVSbVU5VFZSdFczQmh3Wjk4X1Q1ZyIsInBob25lSWQiOiJhZWM5MDcxOS03NGVmLTQ5YzktOTNlMC04YWQ1NDE5ZDg3NzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekRKWHNWMjJ6RHEyTEgrZVpFSTVOSnpnUVZnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRUYXphQU1MS0JnUzJFUnR3V2FZeHYwSnIvQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzOTJOQVQ4OSIsIm1lIjp7ImlkIjoiMjM0OTAzMTQ4NTQ4MToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JjMGVVQkVJenVnTGNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidUU1dWh4dHVuRFZTZWprdG1XQWpNalVhMWhtMXlya1JWeksyWEpjT25FRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSFlDTC9DcnpYbVUwTTRjYlN4Z1NkaWo4RTU0a0JsOGY3TTBDQWpSTFFJdVliYlNKclM4NEdjTnNSSW5YQ2ROWmRlVm93ZDZaSlYzZDdCZGFlUXNlZ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ikh6bGg1a3BtYnd6UE9QcmJTUzl0L2Y4bU5rK2lYV0R6RXpsVmtBNEIyNkVUTUQyZVJwRGNOOE81TzlSbUtoKzVQMWZpVVd5aWFxVnpNSkJXalVnU0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzMTQ4NTQ4MToyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaE9ib2NiYnB3MVVubzVMWmxnSXpJMUd0WVp0Y3E1RVZjeXRseVhEcHhCIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU5NzAyMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRm1pIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Fallen🤍",
  author: process.env.PACK_AUTHER || "Fallen",
  packname: process.env.PACK_NAME || "🤍",
  botname: process.env.BOT_NAME || "Fallen",
  ownername: process.env.OWNER_NAME || "Isaiah",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

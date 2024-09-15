//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "idrisali6816@gmail.com";
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
global.owner = process.env.OWNER_NUMBER || "2347036366816";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE51ZDRkOGE1OGlOS2hmbWxHUHlOUGw1QmRFL2laUkpWamVscG5PcUdtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidi84dTlUVE1KU2JGQk8zWWtXNVpmd3UrWjcwYzNjaUhLT2xaMDNBRW1XUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUHZnbGdMNndnbVVVWGxiT3pVR3RUWVlRZjVuKzFWY0laYUdRY1l6UG1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRjlqLzZCT0FFY1ViZFJudnJlUmgvZEdja1pnVGNvMlNVMENveUhORldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCcjBLOTlWWEgzZHZhbW0renJNSVdGMG9ja2o4b2VzWlZDLzB1SW5FMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBVmdOYTNlN2x3cUV4ZWJEY1c4eU1oT3RIZWlsa2tFdVBidkRGNjBqd3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFFQk82NXZKMmhNVFJSYnJTb0c5b2lzS2h1MlV3UHZWOE1OclhENndtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1hSZjNKb1p3S0pEQlFJYjh2NlQ5RFkvcVRvaXBuZUhmSlVxekRXYld4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ2WFhVNVhXVllCVUd4YTFyZzdYalZaL0NWN1g5eEtYcUc4UG5PSlk5c3QxbU84aC94MGN2YU5wZUl0TVUxVy9wYWx6dUpZM1ZIWnhEWnNveXZRWkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJOM3NwT3hzc3RwaTRUNjhrd05od2FDdm9MSnYzVFZHKzNGNlhudW5ENUJ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQZnhDMEtlWFNqaXktcVNJX0lIV0hnIiwicGhvbmVJZCI6IjU3NzMxNDVkLTNlMjAtNDQwOS1hZDA4LWE2MDg5MzU0NmJiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITnlpRDE5RjNWNmpucmV4aU9PMGNycWh1YWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2lwMEtzK0lHUWVMMXdFb3hNSTYxaHhIdWVjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg0R1gzM0s4IiwibWUiOnsiaWQiOiIyMzQ3MDM2MzY2ODE2OjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbTV5SWtERUxHb25MY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyY3ppd2pQTVVtWlRZY1diRUJqZllRNHZRLzhDZ2dOK0JFcDdGMXBwSlFZPSIsImFjY291bnRTaWduYXR1cmUiOiJOaUpiUUFNcm14MUZBalRhaERWTkcyUVdCeXlMWVBuVHp4eVJiL3pFV0xvWGQrYVptOGxQY3dTNVdHNWhyZC9XMUxBWGZjMzMyVlQrTG9rUDRyNWpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQmorWmd0cHZuMHg2cVNTNFZXdHBZT1pYZ2FrL09QNVZDWTE5aGpSTEg0N01tZGxQWHhqM25pUUZQd0Nyczh3TEsrbjRGQmFhRjNIbVRjL2p2MmZ2Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM2MzY2ODE2OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEzTTRzSXp6RkptVTJIRm14QVkzMkVPTDBQL0FvSURmZ1JLZXhkYWFTVUcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0MjAwMzF9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Nigeria&africa™`",
  author: process.env.PACK_AUTHER || "Nigeria",
  packname: process.env.PACK_NAME || "africa",
  botname: process.env.BOT_NAME || "Nigeria & Africa",
  ownername: process.env.OWNER_NAME || "Ali Redha Idris ",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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

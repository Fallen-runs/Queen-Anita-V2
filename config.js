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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lQNjhPV0dVNzV5NU1ab2tiYXE3WEFaRGoyeGF2Y01aR1M4eVJ1bWVtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkYrYXVTSUVuVldsZUVlTFdmNUw2eW9RMFNVaEpoOFk3UjZ1NGVVZFBGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUHVrTkVHMzhqSksvdTRZenA2d2JVNTFwNDcyUUV5Uk9ra3gwMksrazNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQ3NlYk1hS3dhMzN2UUlxb21XS25mS2JMMzA0S0Z1RTRYaThJaWliazN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NWWRPY1BrS0JRTUFTb0loY2Y5WGY0YUJNdzg1UVVGTkZORlFHNVAyR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVocjdSeU9FU1VYOS9TUkFnY0JKUGJDcGdzZ1dBTHlldFY5d2crTlA5ZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BVYlNTOFliZTl5bEtRRElXL1VCSU45MmVxc0cyUy9uUGFqYXZXNVVGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0oyeDBuMlorMmdUbkRWT0tQUlpaQTVoN285WmVxa05SQ05Wa3lWRC9FND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBUTzZSaW9DL2FjeDFpcUFWQm9scjNZaXZDMUYzZ2VVMzdMSXBBWkdGYno5YVRTT1hwUVZqUzVkUmlmYUEvU3BuZFUvSDNaUG9oajVGK2IxaVBjdmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiIxcUp4VUh2OGxOMlVJNEsyanlIemh5RTJ4ZFZQOG9RZGtCNW8vU0RNQUhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMzE0ODU0ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E1N0ZEOEM1RTA2NUY3QTE4MzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjIxNDQzNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia2Q3N2VfbzVSdnladDdOOW9oMkp0dyIsInBob25lSWQiOiI4MDM0NDVkNC1iZDk5LTQ5MDMtYWVhYS0zMjA3NDU0ZmM0N2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tyc09peEY1cDVtOEZ4bDhETTJQZ2xPRG5NPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndWWGpXaUZ6aHFwc2dRZzMvQ3ZJTkQyMW0ybz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZTktYSlo0VCIsIm1lIjp7ImlkIjoiMjM0OTAzMTQ4NTQ4MToyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJGYWxsZW7wk4O1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVGhub3NQRUpUaWo3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1RTV1aHh0dW5EVlNlamt0bVdBak1qVWExaG0xeXJrUlZ6SzJYSmNPbkVFPSIsImFjY291bnRTaWduYXR1cmUiOiJMOHBjOHd3ZUh6dFRRM1VNeFlVOGM3dW1Qc1B0WktubkhXMFAxZWRab0RsUmhIZVNKRkxmRTZFbHRLR1E1a1U5bXZWZnZRNm45RWsrd3ZQYWtVN2lqQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY0tKdmJYRjAwNTY0dUMzMjRhK28rcFoxR1cwSmNXeXVxRW1ITFk5TDhJeDV3UzRBT1pEUmJxOXFnL0V3K3YxRjZMTkNVcC9oNWdyc2NxQ3NUWXNEaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDMxNDg1NDgxOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJoT2JvY2JicHcxVW5vNUxabGdJekkxR3RZWnRjcTVFVmN5dGx5WERweEIifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjIxNDQzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFMCsifQ=="
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

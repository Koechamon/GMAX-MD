const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GMAX-MD~eMZGUDTQ#TOJsCdlb9ousqFw4jt4ycWMET_Y8dXTFjaBOsxxL1r8",
 
PREFIX: process.env.PREFIX || ".",
// Enter Your Desired Prefix

BOT_NAME: process.env.BOT_NAME || "『 𝐆𝐌𝐀𝐗 𝐌𝐃 』",
// Enter Your Bot Name

ANTI_VV: process.env.ANTI_VV || "true",
// Allow Viewoncs view Unlimited 
 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "254762469872",
// Set Owner Name

OWNER_NAME: process.env.OWNER_NAME || "KOECH",
// Set Footer

DESCRIPTION: process.env.DESCRIPTION || "*© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɢᴍᴀx*",
// add bot owner name   
 
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> [🎐] ɢᴍᴀx MD ɪs ᴏɴʟɪɴᴇ*⚡",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*[❄️] Hi there, KOECH-AK  viewed your Status🎐*",

// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing  
 
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

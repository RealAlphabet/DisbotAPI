const API = require('./api');
const DISCORD = require('discord.js');
const CLIENT = new DISCORD.Client();

/////////////////////////////////////////////////////////////////////////////////////

API.hook(CLIENT);

API.registerCommand('./commands/help.js');
API.registerCommand('./commands/info.js');

/////////////////////////////////////////////////////////////////////////////////////

CLIENT.login("NTY1Njk4NTY5MTkzOTE0Mzc4.XK6N-Q.FEErGZXuEdR_8VKfhJuAmznPr-A");
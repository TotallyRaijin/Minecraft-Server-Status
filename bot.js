const Discord = require('discord.js');
const client = new Discord.client();
var config = require('./config.json');
const token = config.token
const { getStatus } = require("mc-server-status")

client.on('ready', () => {
  console.log(`I'm running!`);
});

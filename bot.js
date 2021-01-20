const Discord = require('discord.js');
const client = new Discord.client();
var config = require('./config.json');
const token = config.token
const { getStatus } = require("mc-server-status")

client.on('ready', () => {
  console.log(`I'm running!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('!status') {
      var msgcontent = message.content.substr("!status ".length);
      const status = await getStatus(msgcontent)

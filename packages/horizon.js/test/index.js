// @ts-check

const { Client } = require('discord.js');
const { loadEvents } = require('../dist');
const path = require('node:path');

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMembers', 'MessageContent']
});

loadEvents({
  client,
  dir: path.join(__dirname, 'events')
});

client.login(process.env.DISCORD_TOKEN);

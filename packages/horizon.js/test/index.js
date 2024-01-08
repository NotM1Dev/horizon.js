const { Client } = require('discord.js');
const { loadEvents, loadCommands } = require('../dist/index');
const path = require('node:path');

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMembers', 'MessageContent']
});

loadEvents({
  client,
  directory: path.join(__dirname, 'events')
});

loadCommands({
  client,
  appCommands: {
    directory: path.join(__dirname, 'commands', 'app')
  }
});

client.login(process.env.DISCORD_TOKEN);

const { Client } = require('discord.js');
const { Handler } = require('../../dist/index');
const path = require('node:path');

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMembers', 'MessageContent']
});

new Handler(client, {
  commands: {
    app: {
      directory: path.join(__dirname, 'commands', 'app')
    }
  },
  events: {
    directory: path.join(__dirname, 'events')
  }
});

client.login(process.env.DISCORD_TOKEN);

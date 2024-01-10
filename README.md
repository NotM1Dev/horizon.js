<div align="center">
  <h1>horizon.js</h1>
</div>

## Summary

A discord.js command & event handler.

## Quickstart

```sh
npm install horizon.js
pnpm add horizon.js
yarn add horizon.js
```

`index.js`

```js
// You can use CommonJS or ES6 modules.
const { Handler } = require('horizon.js');
const { Client } = require('discord.js');

const client = new Client({
  // ...
});

new Handler({
  commands: {
    app: {
      directory: path.join(__dirname, 'commands', 'app')
    }
  },
  events: {
    client: {
      directory: path.join(__dirname, 'events')
    }
  }
});

client.login('TOKEN');
```

module.exports = {
  name: 'ready',
  execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
  },
  options: {
    once: true
  }
};

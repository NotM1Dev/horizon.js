module.exports = {
  data: {
    name: 'ping',
    description: 'Replies with pong.'
  },

  async execute(ctx) {
    await ctx.interaction.reply('Pong!');
  }
};

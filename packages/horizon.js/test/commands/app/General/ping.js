module.exports = {
  data: {
    name: 'ping',
    description: 'Replies with pong.'
  },

  /**
   * @param {import('../../../../dist/index').SlashCommandContext} ctx
   */
  async execute(ctx) {
    await ctx.interaction.reply('Pong!');
  }
};

import type { Client } from 'discord.js';

export interface HandlerOptions {
  /**
   * Events configuration.
   */
  events?: {
    /**
     * Location of the folder containing the
     * client's event modules.
     */
    directory: string;
  };

  /**
   * Commands configuration.
   */
  commands?: {
    /**
     * Configuration for slash commands and context
     * menu commands, also called application commands.
     */
    app?: {
      /**
       * Location of the folder containing the
       * client's application command modules.
       */
      directory: string;
    };
  };
}

/**
 * Private Handler data.
 */
export interface HandlerData extends HandlerOptions {
  /**
   * The client that instantiated this.
   */
  client: Client;
}

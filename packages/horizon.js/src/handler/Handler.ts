import type { Client } from 'discord.js';
import type { HandlerData, HandlerOptions } from './types';
import { loadEvents, loadCommands } from './index';

/**
 * @since v0.1.0
 */
export class Handler {
  #data: HandlerData;

  /**
   * Creates a new command/event handler.
   * @param client - Your discord.js client instance.
   * @param options - Handler configuration.
   */
  public constructor(client: Client, options?: HandlerOptions) {
    if (!client) {
      throw new Error('Client must be provided');
    }

    this.#data = {
      ...options,
      client
    };

    this.#init();
  }

  /**
   * @returns The client object, specified when
   * instantiating the handler.
   */
  public get client(): Client<boolean> {
    return this.#data.client;
  }

  /**
   * Initializes commands and events.
   * @private
   */
  async #init() {
    const { client, events, commands } = this.#data;

    if (commands?.app?.directory) {
      await loadCommands({
        client,
        appCommands: commands.app
      });
    }

    if (events?.directory) {
      await loadEvents({
        client,
        directory: events?.directory
      });
    }
  }
}

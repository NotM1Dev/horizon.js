import type { ClientEvents } from 'discord.js';

/**
 * Represents a client event object.
 */
export interface Event {
  /**
   * The name of the event.
   * @example ready
   */
  name: keyof ClientEvents | (string & {});

  /**
   * Callback to execute when this event
   * is emitted by the client.
   */
  execute: (...args: any[]) => void;

  /**
   * Optional configuration for this event.
   */
  options?: {
    /**
     * If true, this event will only run once with `client.once`,
     * otherwise it can be emitted multiple times with `client.on`.
     */
    once?: boolean;
  };
}

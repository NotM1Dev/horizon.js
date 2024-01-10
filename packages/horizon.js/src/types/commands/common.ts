import type { Client } from 'discord.js';

export interface BaseCommandContext {
  client: Client<true>;
}

export interface BaseCommandsConfig {
  directory: string;
}

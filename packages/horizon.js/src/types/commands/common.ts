import type { Client } from 'discord.js';
import type { AnyContextMenuCommandData } from './app';

export interface BaseCommandContext {
  client: Client<true>;
}

export interface BaseContextMenuCommand {
  data: AnyContextMenuCommandData;
}

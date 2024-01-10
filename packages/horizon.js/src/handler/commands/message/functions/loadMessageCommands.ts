import type { MessageCommandsConfig } from '@/types';
import type { Client } from 'discord.js';

export interface LoadMessageCommandsProps extends MessageCommandsConfig {
  client: Client;
}

export async function loadMessageCommands({
  directory,
  client
}: LoadMessageCommandsProps) {
  // WIP: Message Command Handling
}

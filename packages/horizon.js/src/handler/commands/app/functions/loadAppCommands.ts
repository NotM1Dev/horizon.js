import type {
  AnyApplicationCommand,
  AnyApplicationCommandContext,
  AnyApplicationCommandData,
  AppCommandsConfig
} from '../../../../types';

import { Collection, type Client } from 'discord.js';
import { allowedExtensions } from '../../../../common';

import fs from 'node:fs/promises';
import path from 'node:path';

export interface LoadAppCommandsParams extends AppCommandsConfig {
  client: Client;
}

export async function loadAppCommands({ directory, client }: LoadAppCommandsParams) {
  const commandsArray: AnyApplicationCommandData[] = [];
  const commands = new Collection<string, AnyApplicationCommand>();

  const folders = await fs.readdir(directory);

  for (const folder of folders) {
    if (folder.startsWith('_')) {
      continue;
    }

    const files = (await fs.readdir(path.join(directory, folder))).filter((file) =>
      allowedExtensions.some((ext) => file.endsWith(ext))
    );

    for (const file of files) {
      if (file.startsWith('_')) {
        continue;
      }

      let command: AnyApplicationCommand & { default?: AnyApplicationCommand } =
        await import(path.join(directory, folder, file));

      if (command.default) {
        command = command.default;
      }

      if (!command.data || !command.execute) {
        process.emitWarning(
          `Command module located at ${path.join(
            directory,
            folder,
            file
          )} does not export a required data or execute property.`
        );

        continue;
      }

      commands.set(command.data.name, command);
      commandsArray.push(command.data);
    }
  }

  if (client.isReady()) {
    await client.application.commands.set(commandsArray);
  } else {
    client.once('ready', async (client) => {
      await client.application.commands.set(commandsArray);
    });
  }

  client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
      const command = commands.get(interaction.commandName);

      if (!command) {
        await interaction.reply({
          content: 'This command is outdated.',
          ephemeral: true
        });
        return;
      }

      const ctx = {
        interaction,
        client: interaction.client
      } as AnyApplicationCommandContext;

      await command.execute(ctx);
    }
  });
}

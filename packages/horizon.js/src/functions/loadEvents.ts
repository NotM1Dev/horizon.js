import type { Client } from 'discord.js';
import type { Event } from '../types';
import { allowedExtensions } from '../common';

import fs from 'node:fs/promises';
import path from 'node:path';

export interface LoadEventsParams {
  client: Client;
  directory: string;
}

export async function loadEvents(params: LoadEventsParams): Promise<void> {
  const { client, directory } = params;
  const folders = await fs.readdir(directory);

  for (const folder of folders) {
    const files = (await fs.readdir(path.join(directory, folder))).filter((file) =>
      allowedExtensions.some((ext) => file.endsWith(ext))
    );

    for (const file of files) {
      let event: Event & { default?: Event } = await import(
        path.join(directory, folder, file)
      );

      if (event.default) {
        event = event.default;
      }

      if (!event.name || !event.execute) {
        process.emitWarning(
          `Event module located at ${path.join(
            directory,
            folder,
            file
          )} does not export a required name or execute property.`
        );

        continue;
      }

      const eventType = event.options?.once ? 'once' : 'on';
      client[eventType](event.name, event.execute);

      return;
    }
  }
}

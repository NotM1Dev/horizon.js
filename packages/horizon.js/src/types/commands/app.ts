import type { BaseCommandContext, BaseCommandsConfig } from './common';
import type {
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  RESTPostAPIApplicationCommandsJSONBody,
  ChatInputCommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction,
  ContextMenuCommandInteraction
} from 'discord.js';

export interface BaseContextMenuCommand {
  data: AnyContextMenuCommandData;
}

export interface AppCommandsConfig extends BaseCommandsConfig {}
export interface MessageCommandsConfig extends BaseCommandsConfig {}

/**
 * Context for the execute() method in slash commands.
 */
export interface SlashCommandContext extends BaseCommandContext {
  interaction: ChatInputCommandInteraction;
}

/**
 * Context for the execute() method in message context menu commands.
 */
export interface MessageContextMenuCommandContext extends BaseCommandContext {
  interaction: MessageContextMenuCommandInteraction;
}

/**
 * Context for the execute() method in user context menu commands.
 */
export interface UserContextMenuCommandContext extends BaseCommandContext {
  interaction: UserContextMenuCommandInteraction;
}

/**
 * Represents a data object for slash commands.
 */
export type SlashCommandData =
  | SlashCommandBuilder
  | RESTPostAPIApplicationCommandsJSONBody;

/**
 * Represents a data object for context menu commands.
 */
export type AnyContextMenuCommandData =
  | ContextMenuCommandBuilder
  | RESTPostAPIApplicationCommandsJSONBody;

/**
 * Represents a data object for both slash commands
 * and context menu commands.
 */
export type AnyApplicationCommandData = SlashCommandData | AnyContextMenuCommandData;

/**
 * Represents a slash command.
 */
export interface SlashCommand {
  data: SlashCommandData;
  execute: (context: SlashCommandContext) => void | Promise<void>;
}

/**
 * Represents a message context menu command.
 */
export interface MessageContextMenuCommand extends BaseContextMenuCommand {
  execute: (context: MessageContextMenuCommandContext) => any;
}

/**
 * Represents a user context menu command.
 */
export interface UserContextMenuCommand extends BaseContextMenuCommand {
  execute: (context: UserContextMenuCommandContext) => any;
}

/**
 * Represents either a slash command, message context menu command,
 * or a user context menu command.
 */
export type AnyApplicationCommand = {
  data: AnyContextMenuCommandData;
  execute: (context: AnyApplicationCommandContext) => any;
};

/**
 * Any application command's interaction.
 */
export type AnyApplicationCommandInteraction =
  | ChatInputCommandInteraction
  | ContextMenuCommandInteraction;

/**
 * Context for slash & context menu commands.
 */
export type AnyApplicationCommandContext =
  | SlashCommandContext
  | MessageContextMenuCommandContext
  | UserContextMenuCommandContext;

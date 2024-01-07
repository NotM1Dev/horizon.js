import type {
  Client,
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  RESTPostAPIApplicationCommandsJSONBody,
  ChatInputCommandInteraction,
  MessageContextMenuCommandInteraction,
  UserContextMenuCommandInteraction
} from 'discord.js';

import type { BaseCommandContext, BaseContextMenuCommand } from './index';

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

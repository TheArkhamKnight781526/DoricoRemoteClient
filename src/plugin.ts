import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { SendCommand } from "./actions/send-command";
import { ToggleSlur } from "./actions/toggle-slur";
import { ToggleProperty } from "./actions/toggle-property";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new SendCommand());
streamDeck.actions.registerAction(new ToggleSlur());
streamDeck.actions.registerAction(new ToggleProperty());

// Finally, connect to the Stream Deck.
streamDeck.connect();

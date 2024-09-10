import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { SendCommand } from "./actions/send-command";
import { ToggleSlur } from "./actions/toggle-slur";
import { ToggleProperty } from "./actions/toggle-property";
import path from "path";
import fs from "fs";
import os from "os";

// Check if custom port is specified - if not, use 5608
let serverPort = 5608;

// Read the port from the config file
try {
  const portFilePath = path.join(os.homedir(), ".dorico_remote/.port");
  if (fs.existsSync(portFilePath)) {
    let port = parseInt(
      fs.readFileSync(portFilePath, "utf-8").trim().toString()
    );
    serverPort = port;
  }
} catch (err) {
  console.error(`Error reading port file: ${err}`);
}

export function send(opts: NodeJS.fetch.RequestInit) {
  return fetch(`http://localhost:${serverPort}/`, opts);
}

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new SendCommand());
streamDeck.actions.registerAction(new ToggleSlur());
streamDeck.actions.registerAction(new ToggleProperty());

// Finally, connect to the Stream Deck.
streamDeck.connect();

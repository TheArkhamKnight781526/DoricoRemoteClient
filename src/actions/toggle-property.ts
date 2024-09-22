import {
  action,
  KeyDownEvent,
  SingletonAction,
  WillAppearEvent,
} from "@elgato/streamdeck";
import { send } from "../plugin";

/**
 * An example action class that displays a count that increments by one each time the button is pressed.
 */
@action({ UUID: "com.finishingahat.doricoremote.toggle-property" })
export class ToggleProperty extends SingletonAction<CommandSettings> {
  /**
   * The {@link SingletonAction.onWillAppear} event is useful for setting the visual representation of an action when it become visible. This could be due to the Stream Deck first
   * starting up, or the user navigating between pages / folders etc.. There is also an inverse of this event in the form of {@link streamDeck.client.onWillDisappear}. In this example,
   * we're setting the title to the "count" that is incremented in {@link IncrementCounter.onKeyDown}.
   *

  /**
   * Listens for the {@link SingletonAction.onKeyDown} event which is emitted by Stream Deck when an action is pressed. Stream Deck provides various events for tracking interaction
   * with devices including key down/up, dial rotations, and device connectivity, etc. When triggered, {@link ev} object contains information about the event including any payloads
   * and action information where applicable. In this example, our action will display a counter that increments by one each press. We track the current count on the action's persisted
   * settings using `setSettings` and `getSettings`.
   */
  async onKeyDown(ev: KeyDownEvent<CommandSettings>): Promise<void> {
    send({
      method: "POST",
      body: JSON.stringify({
        command: "ToggleProperty",
        property: ev.payload.settings.property ?? "",
        property_value: ev.payload.settings.property_value,
        on_command: ev.payload.settings.on_command,
        off_command: ev.payload.settings.off_command,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }
}

type CommandSettings = {
  property: string;
  property_value?: string;
  on_command: string;
  off_command: string;
};

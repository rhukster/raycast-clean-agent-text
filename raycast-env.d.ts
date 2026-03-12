/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `cat` command */
  export type Cat = ExtensionPreferences & {
  /** Mode - How to format the cleaned text */
  "mode": "auto" | "text" | "code"
}
}

declare namespace Arguments {
  /** Arguments passed to the `cat` command */
  export type Cat = {}
}


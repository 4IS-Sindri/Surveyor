/** This interface defines the `scripts` property of a package.json file. */
export interface IScripts {
  /** For adding non-standard/custom scripts. */
  [key: string]: string | undefined;

  /** The command executed when starting your module. */
  start?: string;

  /** The command to be executed when testing your module/codebase. */
  test?: string;

  /** A custom script I include that transpiles the TypeScript to JavaScript. */
  build?: string;

  /** A custom script I include for executing prettier across the codebase. */
  pretty?: string;
}

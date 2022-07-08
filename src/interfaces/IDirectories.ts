export interface IDirectories {
  [key: string]: string | undefined;

  /**
   * If you provide a `bin` directory to this property, all the files in that
   * folder will be added.
   *
   * Because of the way the `bin` directive works, specifying both a `bin` path
   * and setting `directories.bin` is an error. If you want to specify
   * individual files, use `bin`, and for all the files in an existing `bin`
   * directory, use `directories.bin`.
   */
  bin?: string;

  /**
   * A folder that is full of man pages. Sugar to generate a "man" array by
   * walking the folder.
   */
  man?: string;
}

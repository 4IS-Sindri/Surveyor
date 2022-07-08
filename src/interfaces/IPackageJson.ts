import {
  IAuthor,
  IBugs,
  IDirectories,
  IFunding,
  IPublishConfig,
  IRepository,
  IScripts
} from './index.js'

/**
 * This interfaces defines the most common properties of a package.json file.
 * The only required property is the `name`.
 */
export interface IPackageJson {
  /** The name of the package. */
  name: string

  /** The display name of the package. */
  displayName?: string

  /** The version of the package. */
  version?: string

  /** The description of the package. */
  description?: string

  /**
   * An optional array of keywords associated with the package. Useful for
   * helping other developers find your package.
   */
  keywords?: string[]

  /** The url to the project homepage. */
  homepage?: string

  /** Where to report bugs. */
  bugs?: IBugs | string

  /** The license of the package. */
  license?: string

  /** The author of the package. */
  author?: IAuthor | string

  /**
   * An array of individuals who have contributed to the package. The array can
   * contain strings, objects, or both.
   */
  contributors?: Array<IAuthor | string>

  /** Provides information on how to help fund the development of the module. */
  funding?: IFunding | Array<IFunding | string>

  /** The type of module exported by the package: ESM (`module`) or CommonJS. */
  type?: 'module' | 'commonjs'

  /**
   * An array of file patterns that describes the entries to be included when
   * your package is installed as a dependency. Any file(s) specified here can
   * **_NOT_** be excluded through `.npmignore` or `.gitignore`.
   */
  files?: string[]

  /** A module ID that is the primary entry point to your program. */
  main?: string

  /**
   * If your module is meant to be used client-side the browser field should be
   * used instead of the main field. This is helpful to hint users that it might
   * rely on primitives that aren't available in Node.js modules.
   *
   * @example
   * `window`
   */
  browser?: string

  /**
   * Specifies either a single file or an array of filenames to be put in place
   * for the `man` program to find.
   */
  man?: string | string[]

  /**
   * A map of command names to local file names. From the official documentation
   * of this property:
   *
   * When this package is installed globally, that file will be linked where
   * global bins go so it is available to run by name. When this package is
   * installed as a dependency in another package, the file will be linked where
   * it will be available to that package either directly by npm exec or by name
   * in other scripts when invoking them via npm run-script.
   */
  bin?: string | Record<string, string>

  /** The repository where the packages code is stored. */
  repository?: IRepository | string

  /** The block of commands to be used during development. */
  scripts?: IScripts

  /**
   * A method for indicating the structure of your CommonJS package. For more
   * info, the following is from the official documentation of this property:
   *
   * > The CommonJS [Packages](http://wiki.commonjs.org/wiki/Packages/1.0) spec
   * details a few ways that you can indicate the structure of your package
   * using a directories object. If you look at
   * [npm's `package.json`](https://registry.npmjs.org/npm/latest), you'll see
   * that it has directories for `doc`, `lib`, and `man`.
   *
   * > In the future, this information may be used in other creative ways.
   */
  directories?: IDirectories

  /**
   * A "config" object can be used to set configuration parameters used in
   * package scripts that persist across upgrades.
   */
  config?: Record<string, any>

  // #region Dependencies
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  bundledDependencies?: Record<string, string>
  // #endregion Dependencies

  /**
   * The documentation for the `overrides` setting is far too verbose to fit
   * into a single comment so if you'd like more information, please refer to
   * the [official documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides).
   */
  overrides?: Record<string, string>

  /**
   * The property to set when you want/need a specific version of NodeJS/NPM in
   * order for your module to function.
   *
   * @see https://docs.npmjs.com/cli/v8/configuring-npm/package-json#engines
   */
  engines?: Record<string, string>

  /**
   * The property set when you need to specify which operating system your
   * module will run on. If you want to block a specific OS, just prepend the
   * OS name with a `!` character.
   *
   * For example, to allow MacOS but block Linux: `os: ["darwin", "!linux"]`
   */
  os?: string[]

  /**
   * If your code only runs on certain CPU architectures, specify them here. And
   * just like the `OS` property, you can use the `!` character to block a
   * specific CPU architecture.
   */
  cpu?: string[]

  /** If set to true, npm will refuse to publish it. */
  private?: boolean

  /**
   * This is a set of config values that will be used at publish-time. It's
   * especially handy if you want to set the tag, registry or access, so that
   * you can ensure that a given package is not tagged with "latest", published
   * to the global public registry or that a scoped module is private by
   * default.
   *
   * See [config](https://docs.npmjs.com/cli/v8/using-npm/config) to see the
   * list of config options that can be overridden.
   */
  publishConfig?: IPublishConfig

  /**
   * The optional workspaces field is an array of file patterns that describes
   * locations within the local file system that the install client should look
   * up to find each
   * [workspace](https://docs.npmjs.com/cli/v8/using-npm/workspaces) that needs
   * to be symlinked to the top level node_modules folder.
   *
   * It can describe either the direct paths of the folders to be used as
   * workspaces or it can define globs that will resolve to these same folders.
   *
   * For more examples and information, see the
   * [documentation](https://docs.npmjs.com/cli/v8/using-npm/workspaces).
   */
  workspaces?: string[]
}

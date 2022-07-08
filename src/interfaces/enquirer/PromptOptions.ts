import {
  IArrayPromptOptions,
  IBasePromptOptions,
  IBooleanPromptOptions,
  INumberPromptOptions,
  ISnippetPromptOptions,
  ISortPromptOptions,
  IStringPromptOptions
} from './index.js'

/**
 * A custom built type combining the various prompt options available from
 * Enquirer. This type data is copied directly from the Enquirer types, they
 * just don't export this object for some reason so I'm copying it here.
 */
export type PromptOptions =
  | IBasePromptOptions
  | IArrayPromptOptions
  | IBooleanPromptOptions
  | IStringPromptOptions
  | INumberPromptOptions
  | ISnippetPromptOptions
  | ISortPromptOptions

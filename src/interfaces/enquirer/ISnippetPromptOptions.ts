import { IBasePromptOptions } from "./index.js";

export interface ISnippetPromptOptions extends IBasePromptOptions {
  type: "snippet";
  newline?: string;
  template?: string;
}

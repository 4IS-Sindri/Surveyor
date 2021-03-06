import { IBasePromptOptions } from './index.js'

export interface IStringPromptOptions extends IBasePromptOptions {
  type: 'input' | 'invisible' | 'list' | 'password' | 'text'
  initial?: string
  multiline?: boolean
}

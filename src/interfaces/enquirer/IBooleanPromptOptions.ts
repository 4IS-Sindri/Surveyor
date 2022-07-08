import { IBasePromptOptions } from './index.js'

export interface IBooleanPromptOptions extends IBasePromptOptions {
  type: 'confirm'
  initial?: boolean
}

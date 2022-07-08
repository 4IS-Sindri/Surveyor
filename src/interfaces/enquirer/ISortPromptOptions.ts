import { IBasePromptOptions } from './index.js'

export interface ISortPromptOptions extends IBasePromptOptions {
  type: 'sort'
  hint?: string
  drag?: boolean
  numbered?: boolean
}

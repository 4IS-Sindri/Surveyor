import { Choice, IBasePromptOptions } from './index.js'

export interface IArrayPromptOptions extends IBasePromptOptions {
  type:
    | 'autocomplete'
    | 'editable'
    | 'form'
    | 'multiselect'
    | 'select'
    | 'survey'
    | 'list'
    | 'scale'
  choices: string[] | Choice[]
  maxChoices?: number
  muliple?: boolean
  initial?: number
  delay?: number
  separator?: boolean
  sort?: boolean
  linebreak?: boolean
  edgeLength?: number
  align?: 'left' | 'right'
  scroll?: boolean
}

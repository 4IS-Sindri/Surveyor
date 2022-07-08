import { PromptOptions } from '../../interfaces/index.js'

const PkgNamePrompt: PromptOptions = {
  name: 'name',
  message: 'What is the name of your package?',
  required: true,
  type: 'input'
}

/** The question that determines if it's a JBH or 4IS project. */
const ScopePrompt: PromptOptions = {
  name: 'projectScope',
  message: 'Is this a JBH or 4IS project?',
  required: true,
  type: 'select',
  choices: [{
    
  }]
}

/**
 * Creates and returns an array of Prompts to be used when creating a new
 * package.
 *
 * @returns An array of prompts to show the user.
 */
export function getPrompts(): PromptOptions[] {
  const prompts: PromptOptions[] = []

  prompts.push(PkgNamePrompt)

  return prompts
}

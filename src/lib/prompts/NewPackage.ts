import { PromptOptions } from '../../interfaces/index.js'
import { AvailableLicenses } from '../constants/index.js'

// const PkgNamePrompt: PromptOptions = {
//   name: 'name',
//   message: 'What is the name of your package?',
//   required: true,
//   type: 'input'
// }

/** The question that determines if it's a JBH or 4IS project. */
// const ScopePrompt: PromptOptions = {
//   name: 'projectScope',
//   message: 'Is this a JBH or 4IS project?',
//   required: true,
//   type: 'select',
//   choices: ['JBH', '4IS']
// }

// const VersionPrompt: PromptOptions = {}

/**
 * This variable contains an array of Prompt questions that the user should be
 * asked to answer no matter what kind of project it is (as long as it's written
 * in TypeScript/NodeJS).
 */
// const StandardPrompts: PromptOptions[] = [ScopePrompt, PkgNamePrompt]

/**
 * Creates and returns an array of Prompts to be used when creating a new
 * package.
 *
 * @returns An array of prompts to show the user.
 */
export function getPrompts(): PromptOptions[] {
  const prompts: PromptOptions[] = []

  prompts.push(
    // Determine if the project/module is for me or JBH.
    {
      name: 'projectScope',
      message: 'Is this a JBH or 4IS project?',
      required: true,
      type: 'select',
      choices: ['JBH', '4IS']
    },

    // Get the name of the project/module.
    {
      name: 'name',
      message: 'What is the name of your package?',
      required: true,
      type: 'input'
    },

    // Get a description of the project/module.
    {
      name: 'description',
      message: 'What is the description of your package?',
      required: true,
      type: 'input'
    },

    // Get the license of the project/module.
    {
      name: 'license',
      message: 'What is the license of your package?',
      required: true,
      type: 'select',
      choices: AvailableLicenses,
      initial: 7
    },

    // Get the Module type (ESM/CommonJS).
    {
      name: 'moduleType',
      message: 'What type of module is this (ESM or CommonJS)?',
      required: true,
      type: 'select',
      choices: ['ESM', 'CommonJS']
    },

    // Get the version of the project/module.
    {
      name: 'version',
      type: 'numeral',
      message: 'What version number should the project start on? (Default: 0.0.0)',
      initial: '0.0.0'
    }
  )

  return prompts
}

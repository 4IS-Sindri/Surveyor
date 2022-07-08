import { IPackageJson } from '../../interfaces/index.js'
import { MY_AUTHOR_DATA } from './Author.js'

/** The default text to use when a value is not yet known. */
export const PLACEHOLDER = '#{PLACEHOLDER}#'

export const MY_GH_URL = 'https://github.com/4lch4'

/** An object containing the default values for the package.json file. */
export const DefaultValues: IPackageJson = {
  name: PLACEHOLDER,
  displayName: PLACEHOLDER,
  version: '0.0.0',
  description: PLACEHOLDER,
  keywords: [PLACEHOLDER],
  homepage: `${MY_GH_URL}/${PLACEHOLDER}`,
  bugs: {
    url: `${MY_GH_URL}/${PLACEHOLDER}/issues`,
    email: 'bugs@4lch4.email'
  },
  license: 'MIT',
  author: MY_AUTHOR_DATA,
  type: 'module',
  repository: {
    type: 'git',
    url: `${MY_GH_URL}/${PLACEHOLDER}`
  },
  scripts: {
    start: 'node dist/index.js',
    build: 'tsc',
    pretty: 'prettier --write .'
  }
}

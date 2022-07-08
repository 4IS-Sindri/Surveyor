import { prompt } from 'enquirer'
import { IPackageJson } from './interfaces'
import { getPrompts } from './lib/index.js'

async function getPackageData(): Promise<IPackageJson> {
  const pkgData: IPackageJson = {
    name: ''
  }

  const answers = await prompt(getPrompts())

  console.log('Answers received...')
  console.log(answers)

  return pkgData
}

getPackageData()
  .then(pkgData => {
    console.log('Package data...')
    console.log(pkgData)
  })
  .catch(err => {
    console.error('Error encountered...')
    console.error(err)
  })

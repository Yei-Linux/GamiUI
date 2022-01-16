/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const ATOMIC_TYPES = {
  ATOM: { folder: 'atoms', nameToReplace: 'Atoms' },
  MOLECULE: { folder: 'molecules', nameToReplace: 'Molecules' },
  LAYOUT: { folder: 'layouts', nameToReplace: 'Layout' },
  STYLED: { folder: 'styled', nameToReplace: 'Styled' },
  GAME: { folder: 'game', nameToReplace: 'Game' },
}

const getFileTypes = (componentName = 'Component') => {
  return {
    COMPONENT: { nameFile: `${componentName}.tsx` },
    STORY: { nameFile: `${componentName}.stories.tsx` },
    STYLED: { nameFile: `${componentName}.styles.tsx` },
    CONSTANTS: { nameFile: 'constants.tsx' },
    INDEX: { nameFile: 'index.tsx' },
  }
}

const validateArguments = (atomicType = '', componentName = '') => {
  if ([atomicType, componentName].includes('')) {
    console.error(
      '😩 Need to pass params: "atomicType(ATOM | MOLECULE | LAYOUT | STYLED)" and "componentName"'
    )
    process.exit(1)
  }

  if (!Object.keys(ATOMIC_TYPES).includes(atomicType)) {
    console.error(
      `😩 Atomic type must be: "(ATOM | MOLECULE | LAYOUT | STYLED)"`
    )
    process.exit(1)
  }
}

const readTemplateComponentByFileType = (
  atomicType = '',
  componentName = '',
  type
) => {
  let componentModifiedData
  const componentData = fs.readFileSync(
    `./src/template/Component/${getFileTypes()[type].nameFile}`,
    'utf8'
  )

  componentModifiedData = componentData.replace(/Component/g, componentName)

  if (type === 'STORY') {
    componentModifiedData = componentModifiedData.replace(
      /Atomic/g,
      ATOMIC_TYPES[atomicType].nameToReplace
    )
  }

  return componentModifiedData
}

const validateFolderExist = (route) => {
  return fs.existsSync(route)
}

const writeFolder = (route) => {
  fs.mkdirSync(route)
  console.log(`😄 Folder created on : ${route}`)
}

const writeFile = (route, dataToWrite) => {
  fs.writeFileSync(route, dataToWrite, { encoding: 'utf8' })
  console.log(`😄 File ${route} created`)
}

/**
 * Function to generate files of component to create:
 * To execute, type on console:
 * npm run create-component 'ATOMIC_TYPE' 'COMPONENT_NAME'
 * Exp: npm run create-component ATOM MyComponent
 */
const createComponent = () => {
  const [, , atomicType, componentName] = process.argv
  validateArguments(atomicType, componentName)

  const routeComponent = path.join(
    __dirname,
    '..',
    'src',
    'designSystem',
    ATOMIC_TYPES[atomicType].folder,
    componentName
  )

  const isFolderExists = validateFolderExist(routeComponent)

  if (!isFolderExists) {
    console.log(`Preparing to create your component files 😜`)
    writeFolder(routeComponent)

    Object.keys(getFileTypes()).map((fileType) => {
      const componentFileData = readTemplateComponentByFileType(
        atomicType,
        componentName,
        fileType
      )
      writeFile(
        `${routeComponent}/${getFileTypes(componentName)[fileType].nameFile}`,
        componentFileData
      )
    })
  }
}

createComponent()

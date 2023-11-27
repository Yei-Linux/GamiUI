import React, { Fragment } from 'react'
import { Sidebar } from './Sidebar'
import { Wrapper } from './Wrapper'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'
import { TLayoutTypes } from './type'

/**
 * Deletes the "Fragment" element from the given array of React child components and returns the modified array.
 *
 * @param {React.ReactNode[]} children - The array of React child components.
 * @return {React.ReactNode[]} The modified array of React child components after removing the "Fragment" element.
 */
export const deleteFragmentFromChildrens = (children: React.ReactNode[]) => {
  let childrenModified = children

  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      [Fragment].includes(child.type as any) &&
      child.props?.children
    ) {
      childrenModified = child.props.children
    }
  })

  return childrenModified
}

/**
 * Validates if the given array of React nodes contains a Sidebar component.
 *
 * @param {React.ReactNode[]} childrenModified - An array of React nodes.
 * @return {boolean} Returns true if a Sidebar component is present, otherwise false.
 */
export const validateHasSidebar = (childrenModified: React.ReactNode[]) => {
  let isSidebarPresent = false

  React.Children.map(childrenModified, (child) => {
    const hasSidebarElement =
      React.isValidElement(child) && [Sidebar].includes(child.type as any)
    if (!isSidebarPresent) {
      isSidebarPresent = hasSidebarElement
    }
  })

  return isSidebarPresent
}

/**
 * Returns the layout area name for a given React child component.
 *
 * @param {React.ReactNode} child - The child component to determine the layout area for.
 * @return {TLayoutTypes | null} - The layout area name for the given child component,
 *                                 or null if the child component is not valid.
 */
export const getLayoutAreaName = (
  child: React.ReactNode
): TLayoutTypes | null => {
  if (!React.isValidElement(child)) return null
  const type = (child.type as any)?.__emotion_base ?? child.type

  if (type === Sidebar) return 'sidebar'
  if (type === Header) return 'header'
  if (type === Content) return 'main'
  if (type === Footer) return 'footer'
  if (type === Wrapper) return 'wrapper'

  return null
}

/**
 * Generates an array of grid template area names based on the given React children.
 *
 * @param {React.ReactNode} children - The React children to process.
 * @return {Array<TLayoutTypes | TLayoutTypes[]>} An array of grid template area names.
 */
export const makeGridTemplateAreaNames = (children: React.ReactNode) => {
  const gridTemplateAreas: Array<TLayoutTypes | TLayoutTypes[]> = []
  React.Children.map(children, (child) => {
    const areaName = getLayoutAreaName(child)
    if (!areaName) return

    if (areaName === 'wrapper') {
      const childValid = React.isValidElement(child)
      if (!childValid) return null

      const childrenAreaNames: any = makeGridTemplateAreaNames(
        child.props.children
      )
      gridTemplateAreas.push(childrenAreaNames)
      return
    }

    gridTemplateAreas.push(areaName)
    return
  })

  return gridTemplateAreas
}

/**
 * Generates a string representation of a grid matrix based on the given template area names.
 * TODO: Add feature related with sizes and dimensions
 *
 * @param {Array<TLayoutTypes | TLayoutTypes[]>} templateAreaNames - An array of template area names. Each name can be a string or an array of strings.
 * @return {string} The generated grid matrix string.
 */
export const makeGridMatrixString = (
  templateAreaNames: Array<TLayoutTypes | TLayoutTypes[]>
) => {
  const rows = templateAreaNames.length
  const maxColSize = templateAreaNames.reduce((acc, item) => {
    const isArray = Array.isArray(item)

    if (!isArray) return acc

    return item.length > acc ? item.length : acc
  }, 1)
  const cols = maxColSize < 3 ? 3 : maxColSize
  let hasSide = false

  let matrixString = ''

  for (let i = 0; i < rows; i++) {
    const item = templateAreaNames[i]
    const itemIsStr = !Array.isArray(item)

    const block: TLayoutTypes[] = []

    for (let j = 0; j < cols; j++) {
      if (itemIsStr) {
        block.push(item)
        continue
      }
      const subItem = item[j]
      block.push(`${subItem ?? item.at(-1)}`)
    }

    const isNotMain = block.includes('header') || block.includes('footer')
    if (!hasSide) {
      hasSide = block.includes('sidebar')
    }

    const blockString = block.join(' ')
    const rowString = `'${blockString}' ${
      isNotMain ? 'minmax(min-content, max-content)' : 'auto'
    }`

    matrixString += `${rowString} `
  }

  if (hasSide) {
    matrixString += ` / auto ${Array.from({ length: cols - 1 }, (_, i) => i)
      .map(() => '1fr')
      .join(' ')}`
  }

  return matrixString
}

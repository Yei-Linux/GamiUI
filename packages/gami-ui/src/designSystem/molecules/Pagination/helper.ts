/**
 * Generates an array of pages based on the current page and a default array of pages.
 *
 * @param {Array<number | string>} defaultArrayOfPages - The default array of pages.
 * @param {number} currentPage - The current page.
 * @param {Function} computePageSelected - A function to compute the selected page.
 * @return {Array<number | string>} - The array of pages.
 */
const getPages = (
  defaultArrayOfPages: (number | string)[],
  currentPage: number,
  computePageSelected: (prop: (string | number)[]) => void
): (number | string)[] => {
  const initialIndex = 3
  const beforePositionsFromLast = 4

  const arrayWithCuts: (number | string)[] = defaultArrayOfPages.reduce(
    (acc, page, index) => {
      if (currentPage < initialIndex - 1) {
        if (index < initialIndex) {
          return [...acc, page]
        }
        if (index >= defaultArrayOfPages.length - 2) {
          return [...acc, page]
        }
        return acc.includes('middle') ? acc : [...acc, 'middle']
      }

      if (
        currentPage >= initialIndex - 1 &&
        currentPage <= defaultArrayOfPages.length - beforePositionsFromLast
      ) {
        if (index === 0) {
          return [...acc, page]
        }
        if (index === defaultArrayOfPages.length - 1) {
          return [...acc, page]
        }
        if (index === currentPage || index === currentPage + 1) {
          return [...acc, page]
        }
        if (index < currentPage || index < currentPage + 1) {
          return acc.includes('before') ? acc : [...acc, 'before']
        }
        return acc.includes('after') ? acc : [...acc, 'after']
      }

      if (currentPage >= defaultArrayOfPages.length - 3) {
        if (index === 0 || index === 1) {
          return [...acc, page]
        }
        if (index >= defaultArrayOfPages.length - 3) {
          return [...acc, page]
        }
        return acc.includes('middle') ? acc : [...acc, 'middle']
      }
      return acc
    },
    [] as (number | string)[]
  )

  computePageSelected(arrayWithCuts)
  return arrayWithCuts
}

type TGetArrayOfPage = {
  numberPages: number
  computePageSelected: (prop: (string | number)[]) => void
  pageIndex: number
}
/**
 * Generates an array of pages based on the given parameters.
 *
 * @param {TGetArrayOfPage} param - The parameters for generating the array of pages.
 * @param {number} param.numberPages - The number of pages to generate.
 * @param {Function} param.computePageSelected - The function to compute the selected page.
 * @param {number} param.pageIndex - The index of the current page.
 * @return {(string | number)[]} - The generated array of pages.
 */
export const getArrayOfPage = ({
  numberPages,
  computePageSelected,
  pageIndex,
}: TGetArrayOfPage): (string | number)[] => {
  const defaultArrayOfPages = Array.from(Array(numberPages).keys())

  if (numberPages <= 5) {
    computePageSelected(defaultArrayOfPages)
    return defaultArrayOfPages
  }

  const pagesTransformed = getPages(
    defaultArrayOfPages,
    pageIndex,
    computePageSelected
  )
  return pagesTransformed
}

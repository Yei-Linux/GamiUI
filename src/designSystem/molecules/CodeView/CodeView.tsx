import React, { useEffect, useState } from 'react'
import CodeBlock from '../CodeBlock'
import * as S from './CodeView.styles'

export interface ICodeView {
  /**
   * Html String value to render on code view
   */
  valueString: string
}

const CodeView = ({ valueString }: ICodeView) => {
  const [allElementsString, setAllElementsString] = useState('')
  const [allElements, setAllElements] = useState<string[]>([])

  useEffect(() => {
    onSetValue(valueString)
  }, [valueString])

  const getPureCode = (rawElement: string) => {
    const pureCode = rawElement
      .replace(/<pre>/g, '')
      .replace(/<\/pre>/g, '')
      .replace(/(<span([^>]+)>)/gi, '')
      .replace(/(<\/span>)/g, '')
      .replace('<pre__format>', '')
      .replace('</pre__format>', '')
      .replace(/<br>/g, '\n')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;&nbsp;/g, ' ')
      .replace(/&nbsp;/g, ' ')

    return pureCode
  }

  const isCodeBlock = (rawElement: string): boolean =>
    rawElement.includes('<pre__format>') &&
    rawElement.includes('</pre__format>')

  const isPreFirstElement = (htmlToView: string) => {
    const firstTag = htmlToView.slice(0, 5)

    return firstTag == '<pre>'
  }

  const getFinalRawElements = (tagsIterate: string[], tagsSearch: string[]) => {
    let finalRawElements: string[] = []

    tagsIterate.map((element: string, index: number) => {
      if (index !== 0 && tagsSearch?.[index - 1]) {
        finalRawElements.push(tagsSearch[index - 1])
      }

      finalRawElements.push(element)

      if (index === tagsIterate.length - 1 && index < tagsSearch?.length) {
        const tagWithPreWithout = tagsSearch.slice(index)
        finalRawElements = [...finalRawElements, ...tagWithPreWithout]
      }
    })

    return finalRawElements
  }

  const addCodeBlockOnHtml = (htmlToView: string) => {
    const REGEX__START__AND__END__WORDS__WITH__TAG__PRE =
      /<pre[\s\S]*?<\/pre>/gm

    const rawElements: string = htmlToView
      .replace(/<pre>/g, '<pre><pre__format>')
      .replace(/<\/pre>/g, '</pre__format></pre>')

    const tagsNoPre: string[] = rawElements
      .split(REGEX__START__AND__END__WORDS__WITH__TAG__PRE)
      .filter((item) => item != '')

    const tagWithPre: string[] | undefined = rawElements
      ?.match(REGEX__START__AND__END__WORDS__WITH__TAG__PRE)
      ?.filter((item) => item != '')

    const isPreFirstElementTag = isPreFirstElement(rawElements)

    if (!tagWithPre) {
      setAllElements([])
      return
    }

    const tagsIterate: string[] = isPreFirstElementTag ? tagWithPre : tagsNoPre
    const tagsSearch: string[] = isPreFirstElementTag ? tagsNoPre : tagWithPre

    const finalRawElements: string[] = getFinalRawElements(
      tagsIterate,
      tagsSearch
    )

    setAllElements(finalRawElements)
  }

  const onSetValue = (value: string) => {
    setAllElementsString(value)
    addCodeBlockOnHtml(value)
  }

  return (
    <S.CodeView>
      {allElements.length > 0 ? (
        allElements.map((element) =>
          isCodeBlock(element) ? (
            <div style={{ width: '350px', margin: '1rem 0px' }}>
              <CodeBlock
                width="full"
                heigth="full"
                code={getPureCode(element)}
                language="jsx"
              />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: element }} />
          )
        )
      ) : (
        <div dangerouslySetInnerHTML={{ __html: allElementsString }} />
      )}
    </S.CodeView>
  )
}

export default CodeView

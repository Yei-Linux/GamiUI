import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import TextEditor from '.'
import CodeBlock from 'designSystem/molecules/CodeBlock'
import Row from 'designSystem/layouts/Row'
import { theme } from 'styles/tokens'
import Button from '../Button'

export default {
  title: 'Atoms/TextEditor',
  component: TextEditor,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('')

  return <TextEditor defaultValue={value} onChange={setValue} />
}
Basic.args = {}

export const WithCodeBlocks = () => {
  const [value, setValue] = useState('')

  const [allElementsString, setAllElementsString] = useState('')
  const [allElements, setAllElements] = useState<string[]>([])

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

  const addCodeBlockOnHtml = (htmlToView: string) => {
    const REGEX__START__AND__END__WORDS__WITH__TAG__PRE =
      /<pre[\s\S]*?<\/pre>/gm

    const rawElements: string = htmlToView
      .replace(/<pre>/g, '<pre><pre__format>')
      .replace(/<\/pre>/g, '</pre__format></pre>')

    const tagsNoPre: string[] = rawElements
      .split(REGEX__START__AND__END__WORDS__WITH__TAG__PRE)
      .filter((item) => item != '')

    if (tagsNoPre.length <= 1) {
      setAllElements([])
      return
    }

    const tagWithPre: string[] | undefined = rawElements
      ?.match(REGEX__START__AND__END__WORDS__WITH__TAG__PRE)
      ?.filter((item) => item != '')

    if (!tagWithPre) {
      setAllElements([])
      return
    }

    let finalRawElements: string[] = []

    tagsNoPre.map((element: string, index: number) => {
      if (index !== 0 && tagWithPre?.[index - 1]) {
        finalRawElements.push(tagWithPre[index - 1])
      }

      finalRawElements.push(element)

      if (index === tagsNoPre.length - 1 && index < tagWithPre?.length) {
        const tagWithPreWithout = tagWithPre.slice(index)
        finalRawElements = [...finalRawElements, ...tagWithPreWithout]
      }
    })

    setAllElements(finalRawElements)
  }

  return (
    <Row height="auto" justifyContent="space-around">
      <div
        style={{
          background: theme.light.primary.hawkesBlue,
          borderRadius: '0.5em',
          padding: '1rem',
        }}
      >
        <TextEditor defaultValue="" onChange={setValue} />
        <Button
          onClick={() => {
            setAllElementsString(value)
            addCodeBlockOnHtml(value)
          }}
        >
          Save
        </Button>
      </div>

      <div>
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
      </div>
    </Row>
  )
}
WithCodeBlocks.args = {}

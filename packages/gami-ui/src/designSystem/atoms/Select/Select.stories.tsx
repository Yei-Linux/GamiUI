import React, { useState } from 'react'
import { ComponentStory, Meta } from '@storybook/react'

import Select from '.'
import Container from 'designSystem/layouts/Container'
import Icon from '../Icon'
import { lightTheme } from 'styles/tokens/lightTheme'
import { storyConfig } from './storyConfig'
import { TJSXElements } from 'core/domain/interfaces/common'

const { mainConfig } = storyConfig

export default mainConfig as Meta

/**
 * Custom Stories
 * @param args
 * @returns
 */

const StoryBasic = () => {
  const options = [
    {
      value: 'hamburger',
      label: (
        <Container
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
        >
          <Container
            rounded="full"
            padding="0.5rem"
            style={{ background: 'white' }}
          >
            <Icon color={lightTheme.primary.mediumPurple} name="burger" />
          </Container>
          Hamburger
        </Container>
      ),
    },
    {
      value: 'drink',
      label: (
        <Container
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
        >
          <Container
            rounded="full"
            padding="0.5rem"
            style={{ background: 'white' }}
          >
            <Icon color={lightTheme.primary.mediumPurple} name="drink" />
          </Container>
          Drink
        </Container>
      ),
    },
    {
      value: 'appetizer',
      label: (
        <Container
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
        >
          <Container
            rounded="full"
            padding="0.5rem"
            style={{ background: 'white' }}
          >
            <Icon color={lightTheme.primary.mediumPurple} name="appetizer" />
          </Container>
          Appetizer
        </Container>
      ),
    },
  ]
  const [value, setValue] = useState(options[0])

  const changeValue = (value: any) => setValue(value)

  return (
    <Select
      isClearable
      placeholder="Type your option"
      value={value}
      onChangeFormItem={changeValue}
      options={options}
    />
  )
}
export const StoryBasicTemplate: ComponentStory<TJSXElements> = StoryBasic.bind(
  {}
)
StoryBasicTemplate.storyName = 'With Single Select 🙂'
StoryBasicTemplate.args = {}

const StoryMultiple = () => {
  const [value, setValue] = useState()

  const changeValue = (value: any) => {
    setValue(value)
  }

  return (
    <Select
      isMultiple
      placeholder="Type your option"
      value={value}
      onChangeFormItem={changeValue}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )
}
export const StoryMultipleTemplate: ComponentStory<TJSXElements> =
  StoryMultiple.bind({})
StoryMultipleTemplate.storyName = 'With Multiple Select🙂'
StoryMultipleTemplate.args = {}

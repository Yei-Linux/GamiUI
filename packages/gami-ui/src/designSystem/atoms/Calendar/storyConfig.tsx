import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Calendar from '.'
import { CalendarWithInteractionForStorybook } from './mock'
import { dateHelper } from 'core/helpers/date.helper'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Display className prefix',
    table: {
      type: { summary: 'string' },
    },
  },
  currentDate: {
    control: 'object',
    description: 'Get the current date and manage it in the calendar',
    table: {
      type: { summary: 'date' },
    },
  },
  daySelected: {
    control: 'number',
    description: 'Get the current timestamp and select the day in the calendar',
    table: {
      type: { summary: 'number' },
    },
  },
}

const docArgTypes = {
  handleSelectCurrentDate: {
    control: 'object',
    description:
      'Function to handler when is going either to next or prev month',
    table: { type: { summary: 'object' } },
  },
  handleSelectDay: {
    control: 'object',
    description: 'Function to handler when is selecting a day into calendar',
    table: { type: { summary: 'object' } },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Calendar 🟢',
  component: Calendar,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: null,
  shadow: null,
  margin: null,
  padding: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [] as IStoryConfig[]

const dateManager = dateHelper({ date: new Date(2022, 10, 12) })
const customStories = [
  {
    storyBuilder: (args: any) => (
      <CalendarWithInteractionForStorybook {...args} />
    ),
    storyName: 'With Interaction 🙂',
    args: { defaultValue: new Date(2022, 10, 12) },
  },
  {
    storyBuilder: (args: any) => <Calendar {...args} />,
    storyName: 'With Current Date 🙂',
    args: {
      currentDate: dateManager.date,
      daySelected: dateManager.getTimeStampByDate,
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  customStories,
  component: Calendar,
})

export { storyConfig, argTypes }

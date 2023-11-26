import { Meta } from '@storybook/react'
import { storyConfig } from './storyConfig'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

const [one, two, three, four, five, six, seven, eight] = stories

export { one, two, three, four, five, six, seven, eight }

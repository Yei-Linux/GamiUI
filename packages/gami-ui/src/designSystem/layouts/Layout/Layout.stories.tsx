import { Meta } from '@storybook/react'

import { storyConfig } from './storyConfig'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

const [one, two, three, four] = stories

export { one, two, three, four }

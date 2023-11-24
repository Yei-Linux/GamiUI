import { Meta } from '@storybook/react'

import { storyConfig } from './storyConfig'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

const [one, two, three] = stories

export { one, two, three }

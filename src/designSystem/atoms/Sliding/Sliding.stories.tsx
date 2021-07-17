import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Sliding from '.'
import Button from '../Button'
import Title from '../Title'

export default {
  title: 'Atoms/Sliding',
  component: Sliding,
  args: { ...Sliding.defaultProps },
  argTypes: {},
} as Meta

const SlidingStory = ({ placementAnimation }: any) => {
  const [isCloseSliding, setIsCloseSliding] = useState(false)

  return (
    <Sliding
      initAnimationToClose={isCloseSliding}
      placementAnimation={placementAnimation}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Title>Preparado para escuchar la clase</Title>
        <Button onClick={() => setIsCloseSliding(true)}>Empezar</Button>
      </div>
    </Sliding>
  )
}

export const BasicLeft = (args: any) => <SlidingStory {...args} />
BasicLeft.args = {
  placementAnimation: 'left',
}

export const BasicRight = (args: any) => <SlidingStory {...args} />
BasicRight.args = {
  placementAnimation: 'right',
}

export const BasicTop = (args: any) => <SlidingStory {...args} />
BasicTop.args = {
  placementAnimation: 'top',
}

export const BasicBottom = (args: any) => <SlidingStory {...args} />
BasicBottom.args = {
  placementAnimation: 'bottom',
}

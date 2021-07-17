import React from 'react'
import { FeatureCardThemeTypes } from '../../../core/domain/types'
import Icon from '../../atoms/Icon'
import RichText from '../../atoms/RichText'
import Title from '../../atoms/Title'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import Card from '../Card'
import { FeatureCardDirection } from './constants'
import { FeaturedCardContent, FeaturedCardWrapper } from './FeaturedCard.styles'

export interface IFeaturedCard {
  themeType: FeatureCardThemeTypes
  iconId: string
  text: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  iconSize?: string
}

const FeaturedCard = ({
  iconId,
  text,
  themeType,
  direction = 'horizontal',
  iconSize = '20px',
}: IFeaturedCard) => {
  return (
    <Card>
      <FeaturedCardWrapper
        minWidth={FeatureCardDirection[direction].minWidth}
        themeType={themeType}
      >
        <Row
          flexDirection={FeatureCardDirection[direction].rowDirection}
          justifyContent={FeatureCardDirection[direction].rowJustify}
          alignItems="center"
        >
          <Icon size={iconSize} name={iconId} />
          <Spacer direction={FeatureCardDirection[direction].spacerDirection} />
          <FeaturedCardContent>{text}</FeaturedCardContent>
        </Row>
      </FeaturedCardWrapper>
    </Card>
  )
}

FeaturedCard.defaultProps = {
  iconId: 'planewhite',
  themeType: 'sky',
  text: (
    <div>
      <Title level="h3">Title</Title>
      <RichText text="Description" />
    </div>
  ),
}

export default FeaturedCard

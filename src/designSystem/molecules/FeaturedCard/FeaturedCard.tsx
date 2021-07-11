import React from 'react'
import { FeatureCardThemeTypes } from '../../../core/domain/types'
import Icon from '../../atoms/Icon'
import RichText from '../../atoms/RichText'
import Title from '../../atoms/Title'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import Card from '../Card'
import { FeaturedCardContent, FeaturedCardWrapper } from './FeaturedCard.styles'

export interface IFeaturedCard {
  themeType: FeatureCardThemeTypes
  iconId: string
  text: React.ReactNode
}

const FeaturedCard = ({ iconId, text, themeType }: IFeaturedCard) => {
  return (
    <Card>
      <FeaturedCardWrapper themeType={themeType}>
        <Row justifyContent="flex-start">
          <Icon size="20px" name={iconId} />
          <Spacer direction="right" />
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

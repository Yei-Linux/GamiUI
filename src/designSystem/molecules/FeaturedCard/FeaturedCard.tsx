import React from 'react'
import { FeatureCardThemeTypes } from 'core/domain/types'

import { FeatureCardDirection } from './constants'
import * as S from './FeaturedCard.styles'
import Icon from 'designSystem/atoms/Icon'
import RichText from 'designSystem/atoms/RichText'
import Title from 'designSystem/atoms/Title'
import Row from 'designSystem/layouts/Row'
import Spacer from 'designSystem/layouts/Spacer'
import Card from '../Card'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'

export interface IFeaturedCard extends IGeneralProps {
  /**
   * Feature Card theme type
   */
  themeType?: FeatureCardThemeTypes
  /**
   * Icon Id
   */
  iconId?: string
  /**
   * Text
   */
  text: React.ReactNode
  /**
   * Direction
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Icon Size
   */
  iconSize?: string
}

const FeaturedCard = ({
  iconId = 'like__white',
  text = (
    <div>
      <Title level="h3">Title</Title>
      <RichText text="Description" />
    </div>
  ),
  themeType = 'sky',
  direction = 'horizontal',
  iconSize = '20px',
  ...genericsProps
}: IFeaturedCard) => {
  return (
    <Card {...genericsProps}>
      <S.FeaturedCard
        $minWidth={FeatureCardDirection[direction].minWidth}
        $themeType={themeType}
      >
        <Row
          flexDirection={FeatureCardDirection[direction].rowDirection}
          justifyContent={FeatureCardDirection[direction].rowJustify}
          alignItems="center"
        >
          <Icon size={iconSize} name={iconId} />
          <Spacer direction={FeatureCardDirection[direction].spacerDirection} />
          <S.FeaturedCardContent>{text}</S.FeaturedCardContent>
        </Row>
      </S.FeaturedCard>
    </Card>
  )
}

export default FeaturedCard

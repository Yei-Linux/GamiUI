import styled from '@emotion/styled'
import {
  BorderType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const TrafficLight = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $height?: HeightType
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
  flex-direction: column;

  padding: 10px 0px;
  background-color: #3a3a3a;

  ${({ $border, $shadow, $width, $height }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      width: $width || 'fit',
      height: $height || 'auto',
    })};
`

export const TrafficLightContainer = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
  flex-direction: column;
  width: 100%;
  height: 100%; ;
`

export const Balls = styled.div<{ $color: string; $bright: string }>`
  border-radius: 4em;
  height: 40px;
  width: 40px;
  margin: 5px 30px;

  box-shadow: ${({ $bright }) => $bright};
  background-color: ${({ $color }) => $color};
`

export const TextCounter = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
  width: 100%;
  border-radius: 4em;
  font-weight: bold;

  min-height: 50px;
  margin: 15px 0px;
  color: #bababa;
  font-size: 3em;
  transition: color 0.3s;
`

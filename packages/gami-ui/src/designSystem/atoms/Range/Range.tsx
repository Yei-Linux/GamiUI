import React from 'react'
import { Range as RangeLib } from 'react-range'
import RangeThumb from './RangeThumb'
import RangeTrack from './RangeTrack'

export type TOnChangeFormItemRange = (value: number[]) => void

export interface IRange {
  /**
   * Height Container
   */
  heightContainer?: string
  /**
   * Height Range Container
   */
  heightRange?: string
  /**
   * Size Scroll Range
   */
  sizeScrollRange?: string
  /**
   * Icon Id
   */
  iconId?: string
  /**
   * Step Value
   */
  step?: number
  /**
   * Min Value
   */
  min?: number
  /**
   * Max Value
   */
  max?: number
  /**
   * Value Input
   */
  value?: number[]
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItemRange
}

const Range = ({
  heightContainer = '36px',
  heightRange = '5px',
  sizeScrollRange = '25px',
  iconId = '',
  step = 0.1,
  min = 0,
  max = 100,
  value = [50],
  onChangeFormItem,
}: IRange) => {
  return (
    <RangeLib
      values={value}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChangeFormItem?.(values)}
      renderTrack={({ props, children }) => (
        <RangeTrack
          heightContainer={heightContainer}
          heightRange={heightRange}
          value={value}
          props={props}
        >
          {children}
        </RangeTrack>
      )}
      renderThumb={({ props }) => (
        <RangeThumb
          props={props}
          sizeScrollRange={sizeScrollRange}
          iconId={iconId}
        />
      )}
    />
  )
}

export default Range

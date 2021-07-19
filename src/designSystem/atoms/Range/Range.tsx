import React from 'react'
import { getTrackBackground, Range as RangeLib } from 'react-range'
import { colorLight } from '../../../styles/theme'
import Icon from '../Icon'

export interface IRange {
  heightContainer?: string
  heightRange?: string
  sizeScrollRange?: string
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
  value?: any
  /**
   * Function to detect changes
   */
  onChangeFormItem?: (value: any) => any
}

const Range = ({
  heightContainer,
  heightRange,
  sizeScrollRange,
  iconId,
  step,
  min,
  max,
  value,
  onChangeFormItem = () => {
    return
  },
}: IRange) => {
  return (
    <RangeLib
      values={value}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChangeFormItem(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: heightContainer,
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: heightRange,
              width: '100%',
              borderRadius: '0.6em',
              background: getTrackBackground({
                values: value,
                colors: [colorLight.primary.one, colorLight.neutral.six],
                min: 0,
                max: 100,
              }),
              alignSelf: 'center',
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: sizeScrollRange,
            width: sizeScrollRange,
            borderRadius: '20em',
            backgroundColor: '#FFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 2px 6px #AAA',
            outline: 'none',
          }}
        >
          {iconId != '' && <Icon name={iconId} size="20px" />}
        </div>
      )}
    />
  )
}

Range.defaultProps = {
  value: [50],
  step: 0.1,
  min: 0,
  max: 100,
  iconId: '',
  heightContainer: '36px',
  heightRange: '5px',
  sizeScrollRange: '25px',
}

export default Range

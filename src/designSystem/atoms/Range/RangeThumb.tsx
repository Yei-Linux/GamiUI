/* eslint-disable react/prop-types */
import * as React from 'react'
import { IThumbProps } from 'react-range/lib/types'
import Icon from '../Icon'

interface IRangeThumb {
  props: IThumbProps
  sizeScrollRange?: string
  iconId?: string
}

const RangeThumb = ({ props, sizeScrollRange, iconId }: IRangeThumb) => {
  return (
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
  )
}

export default RangeThumb

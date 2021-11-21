/* eslint-disable react/prop-types */
import React from 'react'
import { getTrackBackground } from 'react-range'
import { ITrackProps } from 'react-range/lib/types'
import { theme } from 'styles/tokens'

interface IRangeTrack {
  props: ITrackProps
  children: React.ReactNode

  heightContainer: string
  heightRange: string
  value: number[]
}

const RangeTrack = ({
  props,
  children,
  heightContainer,
  heightRange,
  value,
}: IRangeTrack) => {
  return (
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
          alignSelf: 'center',
          background: getTrackBackground({
            values: value,
            colors: [theme.light.primary.jordyBlue, theme.light.neutral[600]],
            min: 0,
            max: 100,
          }),
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default RangeTrack

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useReducer, useRef } from 'react'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../core/utils/constants'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS_CANVAS,
  SET_CANVAS_VALUE,
  SET_POSITION_X,
  SET_POSITION_Y,
} from './types'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef: any = useRef(null)

  const initialState = {
    canvasValue: null,
    callbacks: null,
    positionX: 0,
    positionY: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setCanvasValue = (data: any) => {
    dispatch({
      type: SET_CANVAS_VALUE,
      payload: data,
    })
  }

  const setPositionX = (data: any) => {
    dispatch({
      type: SET_POSITION_X,
      payload: data,
    })
  }

  const setPositionY = (data: any) => {
    dispatch({
      type: SET_POSITION_Y,
      payload: data,
    })
  }

  const setCallbacks = (data: any) => {
    dispatch({
      type: SET_CALLBACKS_CANVAS,
      payload: data,
    })
  }

  useEffect(() => {
    setCanvasValue(canvasRef.current.getContext('2d'))
  }, [])

  return (
    <context.Provider
      value={{
        canvasValue: state.canvasValue,
        positionX: state.positionX,
        positionY: state.positionY,
        setPositionX,
        setPositionY,
        setCanvasValue,
        setCallbacks,
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      {children}
    </context.Provider>
  )
}

export default CanvasProvider

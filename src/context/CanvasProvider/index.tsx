/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import {
  MAP_DIMENSIONS,
  MOVE_DIRECTIONS,
  TILE_SIZE,
} from '../../core/utils/constants'
import useGameLoop from '../../hooks/useGameLoop'
import useKeyDown from '../../hooks/useKeyDown'
import context from './context'
import reducer from './reducer'
import { SET_CANVAS_VALUE, SET_POSITION_X, SET_POSITION_Y } from './types'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef: any = useRef(null)

  const initialState = {
    canvasValue: null,
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

  const doAction = (key: any) => {
    const [x, y] = MOVE_DIRECTIONS[key]
    setPositionX(x)
    setPositionY(y)
  }

  useKeyDown({
    keys: Object.keys(MOVE_DIRECTIONS),
    action: doAction,
  })

  useGameLoop({
    action: () => {},
  })

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
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      {children}
    </context.Provider>
  )
}

export default CanvasProvider

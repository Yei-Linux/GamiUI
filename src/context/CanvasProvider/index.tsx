import React, { useEffect, useReducer, useRef } from 'react'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../core/utils/constants'
import context from './context'
import reducer from './reducer'
import {
  SET_CANVAS_VALUE,
} from './types'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef: any = useRef(null)
  const initialState = {
    canvasValue: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setCanvasValue = (data: any) => {
    dispatch({
      type: SET_CANVAS_VALUE,
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
        setCanvasValue,
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      {children}
    </context.Provider>
  )
}

export default CanvasProvider

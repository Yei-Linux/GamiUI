import React, { useEffect, useReducer, useRef } from 'react'
import { PropsCanvas } from '../../core/domain/defaulProps/PropsCanvas'
import { ICanvasProviderInterface } from '../../core/domain/interfaces/ICanvas'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS_CANVAS,
  SET_CANVAS_VALUE,
  SET_CURRENT_DIRECTION,
  SET_POSITION_X,
  SET_POSITION_Y,
} from './types'

const CanvasProvider = ({
  mapConfig,
  keysDirection,
  heroSprite,
  layersConfig,
  children,
}: ICanvasProviderInterface) => {
  const { cols, rows, pixelSize } = mapConfig
  const width = pixelSize * cols
  const height = pixelSize * rows

  const canvasRef: any = useRef(null)

  const initialState = {
    canvasValue: null,
    callbacks: null,
    positionX: 0,
    positionY: 0,
    currentDirection: 'bottomDir',
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

  const setCurrentDirection = (data: any) => {
    dispatch({
      type: SET_CURRENT_DIRECTION,
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
        currentDirection: state.currentDirection,
        keysDirection,
        heroSprite,
        mapConfig,
        layersConfig,
        width,
        height,
        setCurrentDirection,
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

CanvasProvider.defaultProps = PropsCanvas

export default CanvasProvider

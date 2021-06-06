import React, { useEffect, useReducer, useRef } from 'react'
import { PropsCanvas } from '../../core/domain/defaulProps/PropsCanvas'
import { ICanvasProviderInterface } from '../../core/domain/interfaces/ICanvas'
import useReferredState from '../../hooks/useReferredState'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS_CANVAS,
  SET_CANVAS_VALUE,
  SET_CURRENT_DIRECTION,
  SET_DIRS,
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
  const [positionX, setPositionX] = useReferredState(0)
  const [positionY, setPositionY] = useReferredState(0)

  const initialState = {
    canvasValue: null,
    callbacks: null,
    currentDirection: 'bottomDir',
    dirs: {
      topDir: {
        x: 2,
        y: 4,
      },
      bottomDir: {
        x: 2,
        y: 1,
      },
      leftDir: {
        x: 2,
        y: 2,
      },
      rightDir: {
        x: 2,
        y: 3,
      },
    },
  }

  const changePositionX = (value: number) => {
    setPositionX(positionX.current + value)
  }

  const changePositionY = (value: number) => {
    setPositionY(positionY.current + value)
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setCanvasValue = (data: any) => {
    dispatch({
      type: SET_CANVAS_VALUE,
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

  const setDirs = (data: any) => {
    dispatch({
      type: SET_DIRS,
      payload: data,
    })
  }

  useEffect(() => {
    setCanvasValue(canvasRef.current.getContext('2d'))
  }, [])

  return (
    <context.Provider
      value={{
        dirs: state.dirs,
        canvasValue: state.canvasValue,
        currentDirection: state.currentDirection,
        positionX: positionX,
        positionY: positionY,
        keysDirection,
        heroSprite,
        mapConfig,
        layersConfig,
        width,
        height,
        setCurrentDirection,
        setPositionX: changePositionX,
        setPositionY: changePositionY,
        setCanvasValue,
        setCallbacks,
        setDirs,
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      {children}
    </context.Provider>
  )
}

CanvasProvider.defaultProps = PropsCanvas

export default CanvasProvider

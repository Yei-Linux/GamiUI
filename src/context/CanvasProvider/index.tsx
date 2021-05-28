import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../core/utils/constants'
import context from './context'
import reducer from './reducer'
import {
  SET_CANVAS_VALUE,
  SET_IS_UPDATE_REQUIRED,
  SET_IS_VISIBLE,
} from './types'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const canvasRef: any = useRef(null)
  const loopRef: any = useRef()
  const initialState = {
    canvasValue: null,
    isVisible: true,
    isUpdateRequired: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setCanvasValue = (data: any) => {
    dispatch({
      type: SET_CANVAS_VALUE,
      payload: data,
    })
  }

  const setIsVisible = (data: any) => {
    dispatch({
      type: SET_IS_VISIBLE,
      payload: data,
    })
  }

  const setIsUpdateRequired = (data: any) => {
    dispatch({
      type: SET_IS_UPDATE_REQUIRED,
      payload: data,
    })
  }

  const tick = useCallback(() => {
    if (state.isUpdateRequired) {
      setIsVisible(false)
      setIsVisible(true)
      setIsUpdateRequired(false)
    }
    loopRef.current = requestAnimationFrame(tick)
  }, [state.isUpdateRequired, setIsVisible, setIsUpdateRequired])

  useEffect(() => {
    loopRef.current = requestAnimationFrame(tick)
    return () => {
      loopRef.current && cancelAnimationFrame(loopRef.current)
    }
  }, [loopRef, tick])

  useEffect(() => {
    setCanvasValue(canvasRef.current.getContext('2d'))
    document.addEventListener('keypress', () => {
      return
    })
    return () => {
      document.removeEventListener('keypress', () => {
        return
      })
    }
  }, [])

  return (
    <context.Provider
      value={{
        canvasValue: state.canvasValue,
        isVisible: state.isVisible,
        isUpdateRequired: state.isUpdateRequired,
        setCanvasValue,
        setIsVisible,
        setIsUpdateRequired,
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} />
      {state.isVisible && children}
    </context.Provider>
  )
}

export default CanvasProvider

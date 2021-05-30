import React, { Fragment, useContext, useEffect } from 'react'
import CanvasProvider from '../../../context/CanvasProvider'
import context from '../../../context/CanvasProvider/context'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../../core/utils/constants'
import Character from '../Character'
import Grid from '../Grid'
import Map from '../Map'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const WorldContent = () => {
  const { canvasValue } = useContext(context)

  useEffect(() => {
    canvasValue?.clearRect(0, 0, canvasValue.width, canvasValue.height)
  }, [])

  return (
    <Fragment>
      {canvasValue && (
        <Fragment>
          <Character />

          <Grid width={width} height={height}>
            <Map />
          </Grid>
        </Fragment>
      )}
    </Fragment>
  )
}

const World = () => {
  return (
    <CanvasProvider>
      <WorldContent />
    </CanvasProvider>
  )
}

World.defaultProps = {}

export default World

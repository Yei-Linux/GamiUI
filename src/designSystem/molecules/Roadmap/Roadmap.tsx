import React, { Fragment, useContext, useEffect } from 'react'
import CanvasProvider from '../../../context/CanvasProvider'
import context from '../../../context/CanvasProvider/context'
import { RoadMapNames } from '../../../core/domain/types'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../../core/utils/constants'
import Grid from './Grid'
import ImageBuffer from './ImageBuffer'
import Map from './Map'

export interface IRoadmap {
  type?: RoadMapNames
}

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const MapContent = () => {
  const { canvasValue } = useContext(context)

  useEffect(() => {
    canvasValue?.clearRect(0, 0, canvasValue.width, canvasValue.height)
  }, [canvasValue])

  return (
    <Fragment>
      {canvasValue && <ImageBuffer />}
      {canvasValue && (
        <Grid width={width} height={height}>
          <Map />
        </Grid>
      )}
    </Fragment>
  )
}

const Roadmap = () => {
  return (
    <CanvasProvider>
      <MapContent />
    </CanvasProvider>
  )
}

Roadmap.defaultProps = {}

export default Roadmap

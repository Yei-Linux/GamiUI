import * as React from 'react'
import { MAP_TILE_IMAGES } from '../../../core/utils/constants'

const ImageBuffer = () => {
  return (
    <div className="images-buffer">
      {Object.keys(MAP_TILE_IMAGES).map((key) => (
        <img
          key={`map-tile-img-${key}`}
          id={`map-tile-img-${key}`}
          src={`${MAP_TILE_IMAGES[key]}`}
          alt={`map-tile-${key}`}
        />
      ))}
    </div>
  )
}

export default ImageBuffer

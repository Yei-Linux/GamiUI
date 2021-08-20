import { HeroNames } from 'core/domain/types'

export interface IMap {
  cols: number
  rows: number
  pixelSize: number
}

export interface IDirConfig {
  keyCode: string
  xPixelValue: number
  yPixelValue: number
}

export interface IKeysDirection {
  topDir: IDirConfig
  bottomDir: IDirConfig
  leftDir: IDirConfig
  rightDir: IDirConfig
}

export interface IHeroSprite {
  type: HeroNames
  pixelSize: number
  animation: number[]
}

export type TileType = 'OBSTACULE' | 'FLOOR'

export interface ITileImage {
  tileKey: number
  tileSrc: string
  tileType: TileType
}

export interface ILayersConfig {
  tileImages: ITileImage[]
  layers: number[][][]
}

export interface ICanvasProviderInterface {
  heroSprite: IHeroSprite
  keysDirection: IKeysDirection
  layersConfig: ILayersConfig
  mapConfig: IMap
  children: React.ReactNode
}

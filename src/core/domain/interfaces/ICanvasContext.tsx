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

export interface IDirection {
  x: number
  y: number
}

export interface IDirs {
  topDir: IDirection
  bottomDir: IDirection
  leftDir: IDirection
  rightDir: IDirection
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
export type TCurrentDirection = 'topDir' | 'bottomDir' | 'leftDir' | 'rightDir'

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

export interface IDirPayload {
  x: number
  currentDirection: TCurrentDirection
}

export interface ICanvasInitialState {
  dirs: IDirs
  currentDirection: TCurrentDirection
  canvasValue: CanvasRenderingContext2D
}

export interface ICanvasContext extends ICanvasInitialState {
  positionX: number
  positionY: number
  keysDirection: IKeysDirection
  heroSprite: IHeroSprite
  mapConfig: IMap
  layersConfig: ILayersConfig
  width: number
  height: number

  setCurrentDirection: (data: TCurrentDirection) => void
  setPositionX: (value: number) => void
  setPositionY: (value: number) => void
  setCanvasValue: (data: CanvasRenderingContext2D | null) => void
  setDirs: (data: IDirPayload) => void
}

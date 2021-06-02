import { HeroNames } from "../types";

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
}

export interface ITileImage {
  tileKey: number
  tileSrc: string
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

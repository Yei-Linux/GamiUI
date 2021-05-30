export const options = {
  width: ['NONE', 'SMALL', 'NORMAL', 'MEDIUM', 'LARGE', 'FULL'] as const,
  height: ['SMALL', 'NORMAL', 'MEDIUM', 'LARGE'] as const,
  border: ['NONE', 'SMALL', 'MEDIUM', 'ROUNDED', 'FULL'] as const,
  shadow: ['NONE', 'SMALL', 'MEDIUM', 'LARGE', 'XLARGE'] as const,
  textAlign: ['LEFT', 'CENTER', 'RIGHT', 'JUSTIFY'] as const,
  fontWeight: [
    'EXTRALIGHT',
    'LIGHT',
    'NORMAL',
    'MEDIUM',
    'SEMIBOLD',
    'BOLD',
  ] as const,
}

export const TILE_SIZE = 32

export const MAP_DIMENSIONS = {
  COLS: 12,
  ROWS: 12,
  TILE_SIZE,
}

const BASE_PATH =
  'https://raw.githubusercontent.com/KilroggD/rpg-react-redux/23983851d0e15ff7101ba701d47c8ac55479d7bd/public/assets/map/'

export const MAP_TILE_IMAGES: any = {
  1: `${BASE_PATH}floor_sand_stone_1.png`,
  2: `${BASE_PATH}floor_sand_rock_1.png`,
  3: `${BASE_PATH}floor_sand_stone_5.png`,
  4: `${BASE_PATH}tree_1_yellow.png`,
  5: `${BASE_PATH}stone_2_brown1.png`,
}

export const MOVE_DIRECTIONS: any = {
  ArrowUp: [0, -1],
  ArrowLeft: [-1, 0],
  ArrowDown: [0, 1],
  ArrowRight: [1, 0],
}

export const CHARACTERS: any = {
  charone: 'https://i.ibb.co/HCc3tpS/char1.png',
}

export const HERO_IMAGE_SIZE = 40

export const LAYERS = [
  [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3],
    [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3],
    [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3],
    [3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3],
  ],
  [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4],
  ],
]

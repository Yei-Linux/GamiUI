const BASE_PATH =
  'https://raw.githubusercontent.com/KilroggD/rpg-react-redux/23983851d0e15ff7101ba701d47c8ac55479d7bd/public/assets/map/'

export const PropsCanvas = {
  heroSprite: {
    type: 'charone',
    pixelSize: 40,
  },
  layersConfig: {
    tileImages: [
      {
        tileKey: 1,
        tileSrc: `${BASE_PATH}floor_sand_stone_1.png`,
      },
      {
        tileKey: 2,
        tileSrc: `${BASE_PATH}floor_sand_rock_1.png`,
      },
      {
        tileKey: 3,
        tileSrc: `${BASE_PATH}floor_sand_stone_5.png`,
      },
      {
        tileKey: 4,
        tileSrc: `${BASE_PATH}tree_1_yellow.png`,
      },
      {
        tileKey: 5,
        tileSrc: `${BASE_PATH}stone_2_brown1.png`,
      },
    ],
    layers: [
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
    ],
  },
  mapConfig: {
    cols: 12,
    rows: 12,
    pixelSize: 32,
  },
  keysDirection: {
    topDir: {
      keyCode: 'ArrowUp',
      xPixelValue: 0,
      yPixelValue: -1,
    },
    bottomDir: {
      keyCode: 'ArrowDown',
      xPixelValue: 0,
      yPixelValue: 1,
    },
    leftDir: {
      keyCode: 'ArrowLeft',
      xPixelValue: -1,
      yPixelValue: 0,
    },
    rightDir: {
      keyCode: 'ArrowRight',
      xPixelValue: 1,
      yPixelValue: 0,
    },
  },
}

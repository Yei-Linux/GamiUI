interface IDirection {
  spacerDirection: 'right' | 'bottom'
  rowDirection: 'row' | 'column'
  rowJustify: 'flex-start' | 'center'
  minWidth: string
}

interface IFeatureCardDirection {
  horizontal: IDirection
  vertical: IDirection
}

export const FeatureCardDirection: IFeatureCardDirection = {
  horizontal: {
    spacerDirection: 'right',
    rowDirection: 'row',
    rowJustify: 'flex-start',
    minWidth: '150px',
  },
  vertical: {
    spacerDirection: 'bottom',
    rowDirection: 'column',
    rowJustify: 'center',
    minWidth: 'none',
  },
}

export const options = {
  type: ['sky', 'skin', 'earth', 'spring', 'warm'] as const,
}

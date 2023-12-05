import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'

export type TRadioGroupsStyled = OnlyTheme
export const RadioGroupStyled = styled('div')(
  ({ theme }: TRadioGroupsStyled) => ({
    margin: theme?.tokens.spacing.margin.none,
    padding: theme?.tokens.spacing.padding.none,
    fontSize: '14px',
  })
)

export type TRadioItemStyled = OnlyTheme
export const RadioItemStyled = styled('label')(
  ({ theme }: TRadioItemStyled) => ({
    padding: theme?.tokens.spacing.padding.none,
    margin: '0 8px 0 0',
    position: 'relative',
    display: 'inline-flex',
    '&:hover': {
      cursor: 'pointer',
    },
  })
)

type TRadioCheckStyled = OnlyTheme
export const RadioCheckStyled = styled('span')(
  ({ theme }: TRadioCheckStyled) => ({
    margin: theme?.tokens.spacing.margin.none,
    padding: theme?.tokens.spacing.padding.none,
    position: 'relative',
    display: 'inline-block',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  })
)

type TRadioInputStyled = OnlyTheme
export const RadioInputStyled = styled('input')(
  ({ theme }: TRadioInputStyled) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: theme?.tokens.opacity[0],
    zIndex: theme?.tokens.zIndex[0],
    '&:hover': {
      cursor: 'pointer',
    },
  })
)

export const RadioInnerStyled = styled('span')(() => ({
  position: 'relative',
  top: 0,
  left: 0,
  display: 'block',
  width: '16px',
  height: '16px',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
  borderRadius: '50%',
  transition: 'all 0.3s',
  '&.checked': {
    borderColor: '#1890ff',
    '&::after': {
      transform: 'scale(1)',
      opacity: '1',
    },
  },
  '&::after': {
    display: 'table',
    position: 'absolute',
    top: '3px',
    left: '3px',
    width: '8px',
    height: '8px',
    backgroundColor: '#1890ff',
    borderTop: 0,
    borderLeft: 0,
    borderRadius: '8px',
    opacity: 0,
    transform: 'scale(0)',
    transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    content: "''",
  },
}))

export const RadioTextStyled = styled('span')(() => ({
  margin: '0 10px',
}))

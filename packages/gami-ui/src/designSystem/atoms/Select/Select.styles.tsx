import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'
import Select from 'react-select'

type TReactSelectStyled = OnlyTheme
export const ReactSelectStyled = styled(Select)(({ theme }: TReactSelectStyled) => ({
  maxWidth: '300px',
  '.Select__control': {
    padding: '5px',
    borderRadius: '0.7em',
    border: 'none',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)',
  },
  '.Select__multi-value': {
    borderRadius: '15px',
  },
  '.Select__multi-value__remove:hover': {
    backgroundColor: theme?.theme.primary.selago,
    color: theme?.theme.neutral[800],
  },
  '.Select__placeholder': {
    marginLeft: '0.5rem',
    color: theme?.theme.neutral[400],
  },
  '.Select__input': {
    marginLeft: '0.5rem',
  },
}))

import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import Icon from 'designSystem/atoms/Icon'
import { Panel } from 'styles/utilities/commonComponent'
import { flex } from 'styles/mixins/flex'
import { hover } from 'styles/mixins/transition'
import { OnlyTheme } from 'core/domain/types/mixins'

export const Calendar = styled(Panel)()

const flexBetween = flex({ justifyContent: 'space-between' })
export const Header = styled(Container)(
  () => ({
    marginBottom: '2rem',
  }),
  () => flexBetween
)

const BaseAction = styled(Icon)(() => hover)
export const Prev = styled(BaseAction)()
export const Next = styled(BaseAction)()

type TMonth = OnlyTheme
export const Month = styled('div')((props: TMonth) => ({
  fontWeight: props.theme?.tokens.font.weight.bold,
}))

export const Body = styled(Container)()

export const DayHead = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '1fr',
  marginBottom: '1rem',
}))

const flexCenter = flex({ justifyContent: 'center', alignItems: 'center' })
export const DayItem = styled('div')(
  (props: OnlyTheme) => ({
    fontWeight: props.theme?.tokens.font.weight.bold,
  }),
  () => flexCenter
)

const DaySpanBase = styled('span')(
  () => ({
    width: '30px',
    height: '30px',
    color: 'darkgray',
  }),
  () => flexCenter
)
export const DayNameSpan = styled(DaySpanBase)()

type TDayBody = { $rows: number }
export const DayBody = styled('div')(({ $rows }: TDayBody) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: `repeat(${$rows}, 1fr)`,
  gridRowGap: '1rem',
}))

export const DayWeekItem = styled('div')(() => flexCenter)

type TDaySpan = OnlyTheme
export const DaySpan = styled(DaySpanBase)(({ theme }: TDaySpan) => ({
  borderRadius: '0.4em',
  cursor: 'pointer',

  '&.month': {
    color: 'black',
    fontWeight: 'bold',
  },

  '&.today': {
    border: `1px solid ${theme?.theme.primary.mediumPurple}`,
    color: theme?.theme.primary.mediumPurple,
  },

  '&:hover': {
    backgroundColor: '#f2eeff',
  },

  '&.selected': {
    backgroundColor: theme?.theme.primary.mediumPurple,
    color: theme?.theme.neutral[800],
  },
}))

import styled from '@emotion/styled'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'

type TContainerStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const ContainerStyled = styled('div')((props: TContainerStyled) =>
  withGlobalStylesUI(props)()
)

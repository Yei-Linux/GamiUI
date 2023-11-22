import { cls } from 'core/utils/cls'
import * as React from 'react'
import * as S from './Loader.styles'

export type TBehavior = 'glass' | 'none'

export interface IWrapper {
  behavior?: 'glass' | 'none'
  minHeight?: string
  isLoading: boolean
  loaderNode: React.ReactNode
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Wrapper = ({
  children,
  loaderNode,
  isLoading,
  className,
  behavior = 'none',
  minHeight = 'none',
  as = 'div',
}: IWrapper) => {
  const none = () => (
    <React.Fragment>
      {isLoading ? (
        <S.Wrapper className={className} $minHeight={minHeight} as={as}>
          {loaderNode}
        </S.Wrapper>
      ) : (
        children
      )}
    </React.Fragment>
  )

  const glass = () => (
    <React.Fragment>
      <S.FragmentLoader $minHeight={minHeight} className={className} as={as}>
        {children}
        {isLoading && (
          <S.Wrapper className={cls('absolute')}>{loaderNode}</S.Wrapper>
        )}
      </S.FragmentLoader>
    </React.Fragment>
  )

  const behaviors: Record<TBehavior, () => JSX.Element> = {
    none,
    glass,
  }

  return <React.Fragment>{behaviors[behavior]()}</React.Fragment>
}

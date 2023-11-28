import { cls } from 'core/utils/cls'
import * as React from 'react'
import * as S from './Loader.styles'
import { TBehavior, TWrapper } from './type'

export const Wrapper = ({
  children,
  loaderNode,
  isLoading,
  className,
  behavior = 'none',
  minHeight = 'none',
  as = 'div',
}: TWrapper) => {
  const none = () => (
    <React.Fragment>
      {isLoading ? (
        <S.WrapperStyled className={className} $minHeight={minHeight} as={as}>
          {loaderNode}
        </S.WrapperStyled>
      ) : (
        children
      )}
    </React.Fragment>
  )

  const glass = () => (
    <React.Fragment>
      <S.FragmentLoaderStyled
        $minHeight={minHeight}
        className={className}
        as={as}
      >
        {children}
        {isLoading && (
          <S.WrapperStyled className={cls('absolute')}>
            {loaderNode}
          </S.WrapperStyled>
        )}
      </S.FragmentLoaderStyled>
    </React.Fragment>
  )

  const behaviors: Record<TBehavior, () => JSX.Element> = {
    none,
    glass,
  }

  return <React.Fragment>{behaviors[behavior]()}</React.Fragment>
}

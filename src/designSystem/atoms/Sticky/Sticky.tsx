import 'regenerator-runtime/runtime'
import React, { Fragment, useState, useRef } from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import * as S from './Sticky.styles'
import Icon from '../Icon'
import useToggle from 'hooks/useToggle'
import { TUseRefDiv, TUseRefDivParams } from 'core/domain/types'
import { timeout } from 'core/helpers/utilities.helper'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

type TStickyContentOrHidden = React.ReactNode | React.ReactNode[]

interface IStickyItem {
  /**
   * Sticky Item Content
   */
  stickyContent: TStickyContentOrHidden
  /**
   * Has Sticky Item Hide Content
   */
  hasHideContent: boolean
  /**
   * Sticky Item HideContent if has
   */
  stickyHidden?: TStickyContentOrHidden
}

export interface ISticky extends IGeneralProps {
  /**
   * Sticky Item
   */
  stickyItems: IStickyItem[]
}

const Sticky = ({ stickyItems, ...genericsProps }: ISticky) => {
  const { isVisible: isCollapse, handleToggle } = useToggle({
    defaultVisible: false,
  })

  const [stickyContent, setStickyContent] =
    useState<TStickyContentOrHidden>(null)
  const refSticky: TUseRefDiv = useRef<TUseRefDivParams>(null)

  const getWidth = (ref: TUseRefDiv) =>
    `${ref?.current?.clientWidth?.toString()}px`

  const handleClick = async ({
    hasHideContent,
    stickyHidden,
  }: IStickyItem): Promise<void> => {
    if (hasHideContent) {
      setStickyContent(stickyHidden)

      await timeout(100)

      handleToggle(true)
    }
  }

  const getRightOnStickyHide = () => (!isCollapse ? '100%' : '0%')

  const getRightOnSticky = () => (!isCollapse ? '0px' : getWidth(refSticky))

  const handleClose = () => handleToggle(false)

  return (
    <Fragment>
      <S.StickyHideContainer
        ref={refSticky}
        $right={getRightOnStickyHide()}
        {...getGenericPropStyles(genericsProps)}
      >
        <S.StickyHideHeader>
          <Icon fill="#7868e6" name="close" size="15px" onClick={handleClose} />
        </S.StickyHideHeader>
        {stickyContent}
      </S.StickyHideContainer>

      <S.Sticky
        $right={getRightOnSticky()}
        {...getGenericPropStyles(genericsProps)}
      >
        <S.StickyContainer>
          {stickyItems.map((item: IStickyItem, index: number) => (
            <S.StickyItem key={index} onClick={() => handleClick(item)}>
              {item.stickyContent}
            </S.StickyItem>
          ))}
        </S.StickyContainer>
      </S.Sticky>
    </Fragment>
  )
}

export default Sticky

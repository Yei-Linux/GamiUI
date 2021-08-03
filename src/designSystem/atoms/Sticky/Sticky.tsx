import 'regenerator-runtime/runtime'
import React, { Fragment, useState, useRef } from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import {
  StickyContainer,
  StickyHideContainer,
  StickyHideHeader,
  StickyItemWrapper,
  StickyWrapper,
} from './Sticky.styles'
import Icon from '../Icon'

interface StickyItem {
  stickyContent: React.ReactNode | React.ReactNode[]
  hasHideContent: boolean
  stickyHidden?: React.ReactNode | React.ReactNode[]
}

export interface ISticky extends IGeneralProps {
  stickyItems: StickyItem[]
}

const Sticky = ({ shadow, stickyItems }: ISticky) => {
  const [stickyContent, setStickyContent] = useState<any>(null)
  const refSticky: any = useRef()
  const [isCollapse, setIsCollapse] = useState(false)

  const getWidth = (ref: any) => {
    return `${ref?.current?.clientWidth?.toString()}px`
  }

  const timeout = (t: number): Promise<any> => {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, t)
    })
  }

  const handleClick = async (item: StickyItem) => {
    if (item?.hasHideContent) {
      setStickyContent(item?.stickyHidden)

      await timeout(500)

      setIsCollapse(true)
    }
  }

  const handleClose = () => setIsCollapse(false)

  return (
    <Fragment>
      <StickyHideContainer
        shadow={shadow}
        ref={refSticky}
        right={!isCollapse ? '100%' : '0%'}
      >
        <StickyHideHeader>
          <Icon fill="#7868e6" name="close" size="15px" onClick={handleClose} />
        </StickyHideHeader>
        {stickyContent}
      </StickyHideContainer>

      <StickyWrapper
        right={!isCollapse ? '0px' : getWidth(refSticky)}
        shadow={shadow}
      >
        <StickyContainer>
          {stickyItems.map((item: StickyItem, index: number) => (
            <StickyItemWrapper key={index} onClick={() => handleClick(item)}>
              {item.stickyContent}
            </StickyItemWrapper>
          ))}
        </StickyContainer>
      </StickyWrapper>
    </Fragment>
  )
}

Sticky.defaultProps = {
  shadow: 'MEDIUM',
}

export default Sticky

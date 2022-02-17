import React, { Fragment, useEffect } from 'react'
import CollapseProvider from 'context/CollapseProvider'
import { ICollapseCollomsContext } from 'core/domain/interfaces/ICollapseContext'
import useCollapseStore from 'hooks/store/useCollapseStore'
import useCloneElement from 'hooks/useCloneElements'

export interface ICollapseGroup extends ICollapseCollomsContext {
  children: React.ReactNode
}

const CollapseContent = ({ children, accordion, divider }: ICollapseGroup) => {
  const store = useCollapseStore()

  const { childrenWithProps } = useCloneElement({
    children,
    propsElement: {},
    maxChildrenNumber: 1,
    childrenTypes: [],
    addIndexPropOnItem: { fieldPropName: 'index', hasConfig: true },
  })

  useEffect(() => {
    if (!store) return

    store.setAccordion(accordion)
  }, [accordion])

  useEffect(() => {
    if (!store) return

    store.setDivider(divider)
  }, [divider])

  return <Fragment>{childrenWithProps}</Fragment>
}

const CollapseGroup = ({ children, ...props }: ICollapseGroup) => {
  return (
    <CollapseProvider>
      <CollapseContent {...props}>{children}</CollapseContent>
    </CollapseProvider>
  )
}

export default CollapseGroup

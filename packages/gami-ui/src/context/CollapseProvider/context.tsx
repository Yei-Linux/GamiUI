import { ICollapseContext } from 'core/domain/interfaces/ICollapseContext'
import { createContext } from 'react'

const context = createContext<ICollapseContext | null>(null)

export default context

import { ITabContext } from 'core/domain/interfaces/ITabContext'
import { createContext } from 'react'

const context = createContext<ITabContext | null>(null)

export default context

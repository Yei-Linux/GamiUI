import { IFormContext } from 'core/domain/interfaces/IFormContext'
import { createContext } from 'react'

const context = createContext<IFormContext | null>(null)

export default context

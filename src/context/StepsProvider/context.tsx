import { IStepsContext } from 'core/domain/interfaces/IStepsContext'
import { createContext } from 'react'

const context = createContext<IStepsContext | null>(null)

export default context

import { IRadioContext } from 'core/domain/interfaces/IRadioContext'
import { createContext } from 'react'

const context = createContext<IRadioContext | null>(null)

export default context

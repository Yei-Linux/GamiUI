import { ICanvasContext } from 'core/domain/interfaces/ICanvasContext'
import { createContext } from 'react'

const context = createContext<ICanvasContext | null>(null)

export default context

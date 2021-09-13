import { ISurveyContext } from 'core/domain/interfaces/ISurveyContext'
import { createContext } from 'react'

const context = createContext<ISurveyContext | null>(null)

export default context

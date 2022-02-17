import { useContext } from 'react'

export interface IUseStoreProps {
  /**
   * Context
   */
  context: any
  /**
   * Name of context
   */
  contextName?: string
  /**
   * Name of Provider
   */
  providerName?: string
  /**
   * Vlidation
   */
  hasValidation?: boolean
}

const useStore = ({
  context,
  contextName = 'Context',
  providerName = 'Provider',
  hasValidation = false,
}: IUseStoreProps): any => {
  const GeneralContext = useContext(context)
  if (GeneralContext === undefined) {
    if (hasValidation) return null

    throw new Error(`${contextName} must be used within a ${providerName}`)
  }
  return GeneralContext
}

export default useStore

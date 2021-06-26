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
}

const useStore = ({ context, contextName = 'Context', providerName = 'Provider' }: IUseStoreProps) : any=> {
  const GeneralContext = useContext(context)
  if (GeneralContext === undefined) {
    throw new Error(`${contextName} must be used within a ${providerName}`)
  }
  return GeneralContext
}

export default useStore

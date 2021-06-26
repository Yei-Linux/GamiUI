import { useRef, useState } from "react"

const useReferredState = (initialValue: any) => {
  const [state, setState] = useState(initialValue)
  const reference: any = useRef(state)

  const setReferredState = (value: any) => {
    reference.current = value
    setState(value)
  }

  return [reference, setReferredState]
}

export default useReferredState
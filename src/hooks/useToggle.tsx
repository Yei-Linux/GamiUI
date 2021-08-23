import { useState } from "react"

interface IUseToggle {
    defaultVisible?: boolean
}

const useToggle = ({defaultVisible = false}: IUseToggle) => {
    const [isVisible, setIsVisible] = useState(defaultVisible)

    const handleToggle = () => setIsVisible(!isVisible)

    return {
        isVisible, 
        handleToggle
    }
}

export default useToggle
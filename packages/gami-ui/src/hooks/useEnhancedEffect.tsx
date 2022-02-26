import { canUseDom } from 'core/helpers/dom.helper'
import { useLayoutEffect, useEffect } from 'react'

const useEnhancedEffect = canUseDom ? useLayoutEffect : useEffect

export default useEnhancedEffect

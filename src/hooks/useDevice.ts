import { useState, useEffect } from 'react'

export const sizes = {
  tablet: 600,
  laptop: 960,
  desktop: 1280,
}

const useDevice = (
  breakpoints = sizes
): { device: 'phone' | 'tablet' | 'laptop' | 'desktop' } => {
  if (typeof window === 'undefined') {
    return {
      device: 'desktop',
    }
  }

  const onLoadDevice = () => {
    if (window?.innerWidth < breakpoints.tablet) return 'phone'

    if (window?.innerWidth < breakpoints.laptop) return 'tablet'

    if (window?.innerWidth < breakpoints.desktop) return 'laptop'

    return 'desktop'
  }

  const [device, setDevice] = useState<
    'phone' | 'tablet' | 'laptop' | 'desktop'
  >(onLoadDevice())

  const onResizeDevice = () => {
    const result = onLoadDevice()
    setDevice(result)
  }

  useEffect(() => {
    window?.addEventListener('resize', onResizeDevice)
    return () => {
      window?.removeEventListener('resize', onResizeDevice)
    }
  }, [])

  return {
    device,
  }
}

export default useDevice

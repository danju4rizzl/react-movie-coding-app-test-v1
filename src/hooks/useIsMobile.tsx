'use client'

import { useState, useEffect } from 'react'

const useIsMobile = (): boolean => {
  const [isBreakpoint, setIsBreakpoint] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint(window.innerWidth <= 640)
    }

    handleResize() // Call the function initially to set the state

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize) // Cleanup the event listener
  }, [])

  return isBreakpoint
}

export default useIsMobile

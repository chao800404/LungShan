import React, { useEffect, useState } from 'react'

export const useCalcWindowSize = () => {
  const [{ screenW }, setScreen] = useState({ screenW: 0 })

  useEffect(() => {
    const handleCalcScreen = () => setScreen({ screenW: window.innerWidth })

    handleCalcScreen()
    window.addEventListener('resize', handleCalcScreen)
    return () => window.removeEventListener('resize', handleCalcScreen)
  }, [])

  return {
    screenW,
  }
}

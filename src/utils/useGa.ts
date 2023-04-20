import ReactGA, { EventArgs, TrackerNames } from 'react-ga'
import React, { useEffect } from 'react'

export const useGa = () => {
  useEffect(() => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])

  const handleClick = (args: EventArgs, trackerNames?: TrackerNames) => {
    ReactGA.event(args, trackerNames)
  }

  return {
    handleClick,
  }
}

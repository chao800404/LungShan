import { create } from 'zustand'

type StatusState = {
  scrollYPosition: number
  setScrollYPosition: (y: number) => void
}

export const useWindowStore = create<StatusState>((set) => ({
  scrollYPosition: 0,
  setScrollYPosition: (y) => set(() => ({ scrollYPosition: y })),
}))

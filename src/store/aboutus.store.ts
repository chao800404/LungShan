import { create } from 'zustand'

type AboutusState = {
  coverOnLoad: boolean
  setCoverOnLoad: (onLoad: boolean) => void
}

export const useAboutusStore = create<AboutusState>((set) => ({
  coverOnLoad: false,
  setCoverOnLoad: () => set(() => ({ coverOnLoad: true })),
}))

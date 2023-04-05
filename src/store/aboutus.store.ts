import { create } from 'zustand'

type AboutusState = {
  coverOnLoad: boolean
  setCoverOnLoad: (onLoad: boolean) => void
}

export const useAboutusStore = create<AboutusState>((set) => ({
  coverOnLoad: false,
  setCoverOnLoad: (onLoad) => set(() => ({ coverOnLoad: onLoad })),
}))

useAboutusStore.subscribe(console.log)

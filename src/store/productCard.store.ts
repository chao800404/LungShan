import { create } from 'zustand'

type AboutusState = {
  shouldShow: boolean
  setShouldShow: (onLoad: boolean) => void
}

export const useProductCardStore = create<AboutusState>((set) => ({
  shouldShow: false,
  setShouldShow: (onLoad) => set(() => ({ shouldShow: onLoad })),
}))

process.env.NODE_ENV === 'development' &&
  useProductCardStore.subscribe(console.log)

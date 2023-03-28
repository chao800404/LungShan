import { create } from 'zustand'

type Load = 'success' | 'fail' | 'pedding'

type StatusState = {
  load: Load
  setOnload: (load: Load) => void
}

export const useStatusStore = create<StatusState>((set) => ({
  load: 'fail',
  setOnload: (load) => set(() => ({ load })),
}))

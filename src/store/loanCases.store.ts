import { create } from 'zustand'

type FocusId = string | null | number

type LoanCasesState = {
  focusId: FocusId
  setFocusId: (id: FocusId) => void
  reset: () => void
}

export const useLoanCasesStore = create<LoanCasesState>((set) => ({
  focusId: null,
  setFocusId: (id) => set(() => ({ focusId: `${id}` })),
  reset: () => set(() => ({ focusId: null })),
}))

useLoanCasesStore.subscribe(console.log)

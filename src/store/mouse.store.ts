import { create } from 'zustand'

enum PointerEvent {
  Default = 'DEFAULT',
  Focus = 'FOCUS',
  Link = 'LINK',
}

enum Color {
  Default = 'DEFAULT',
  White = 'WHITE',
}

type PointerEventState = keyof typeof PointerEvent
type ColorState = keyof typeof Color

type MouseState = {
  pointerEvent: PointerEventState
  color: ColorState
  content?: string
  setPointerEvent: (pointerEvent: PointerEventState) => void
  setColor: (color: ColorState) => void
  setContent: (content?: string) => void
}

export const useMouseStore = create<MouseState>((set) => ({
  pointerEvent: 'Default',
  color: 'Default',
  setPointerEvent: (pointerEvent) => set(() => ({ pointerEvent })),
  setColor: (color) => set(() => ({ color })),
  setContent: (content) => set(() => ({ content })),
}))

useMouseStore.subscribe(console.log)

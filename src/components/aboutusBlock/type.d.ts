export type TimeLineBlockProps = {
  id: number
  year: string
  description: string
  isLast: boolean
  isActive: boolean
  index: number
  setActiveIndex: (index: number) => vodi
  onClick: () => void
}

export type LabelContent = {
  title: string
  description: string
  id: number
}

export type NavbarItem<T> = {
  title: string
  id: number
  content?: T[]
}

export type NavbarListProps = {
  list: Label<LabelContent>[]
  shouldShowActive?: boolean
}

export type NavbarProps = NavbarItem<LabelContent> & {
  active?: boolean
}

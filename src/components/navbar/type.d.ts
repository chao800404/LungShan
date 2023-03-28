export type LabelContent = {
  title: string
  description: string
  id: number
  url: string
}

export type NavbarItem<T> = {
  title: string
  id: number
  content?: T[]
  url: string
}

export type NavbarListProps = {
  list: NavbarItem<LabelContent>[]
}

export type NavbarProps = NavbarItem<LabelContent> & {
  isActive?: boolean
}

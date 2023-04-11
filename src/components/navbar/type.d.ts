export type LabelContent = {
  title: string
  description: string
  id: number
  slug: string
}

export type NavbarItem<T> = {
  title: string
  id: number
  content?: T[]
  slug: string
}

export type NavbarListProps = {
  list: NavbarItem<LabelContent>[]
  route?: string
  transferRoute?: (slug: string) => void
  setRoute?: (slug) => void
}

export type NavbarProps = NavbarItem<LabelContent> & {
  isActive?: boolean
  setRoute?: (slug: sring) => void
  transferRoute?: (slug: string) => void
  onMouseEnter?: React.MouseEventHandler<HTMLLIElement>
  onMouseLeave?: React.MouseEventHandler<HTMLLIElement>
}

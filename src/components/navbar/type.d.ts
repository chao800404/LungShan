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

export type NavbarData = {
  title: string
  id: number
  slug: string
  description?: string
  content?: NavbarData[]
}

export type NavbarListProps = {
  list: NavbarData[]
  route?: string
  transferRoute?: (slug: string) => void
  setRoute?: (slug) => void
}

export type NavbarProps = NavbarItem<NavbarDatat> & {
  isActive?: boolean
  setRoute?: (slug: sring) => void
  transferRoute?: (slug: string) => void
  onMouseEnter?: React.MouseEventHandler<HTMLLIElement>
  onMouseLeave?: React.MouseEventHandler<HTMLLIElement>
}

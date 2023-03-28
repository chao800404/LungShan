export type PopupItemProps = {
  title: string
  description: string
  url: string
  id: number
}

export type PopupProps<T> = {
  list: T[]
}

export type WrapperAnimateNavbarItemProps<T> = {
  isVisible: boolean
  list: T[]
}

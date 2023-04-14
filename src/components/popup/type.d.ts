export type PopupItemProps = {
  title: string
  description: string
  slug: string
  id: number
  onPointerDown?: React.PointerEventHandler<HTMLLIElement>
}

export type PopupProps<T> = {
  list: T[]
  onPointerDown?: React.PointerEventHandler<HTMLLIElement>
}

export type WrapperAnimateNavbarItemProps<T> = {
  isVisible: boolean
  list: T[]
  onPointerDown?: React.PointerEventHandler<HTMLLIElement>
}

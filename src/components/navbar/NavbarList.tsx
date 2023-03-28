import React from 'react'
import { NavbarBaseItem, NavbarItem } from './NavbarItem'
import { NavbarListProps } from './type'

export const NavbarList = ({ list }: NavbarListProps) => {
  return (
    <ul className="flex gap-5  ">
      {list.map((label) => (
        <NavbarItem key={`${label.id}`} {...label} />
      ))}
    </ul>
  )
}

export const NavbarBaseList = ({ list }: NavbarListProps) => {
  return (
    <ul className="flex gap-5  ">
      {list.map((label, i) => (
        <NavbarBaseItem key={`${label.id}`} isActive={i === 0} {...label} />
      ))}
    </ul>
  )
}

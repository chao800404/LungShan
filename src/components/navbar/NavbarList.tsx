import React from 'react'
import { NavbarItem } from './NavbarItem'
import { NavbarListProps } from './type'

export const NavbarList = ({
  list,
  shouldShowActive = false,
}: NavbarListProps) => {
  return (
    <ul className="flex gap-5  ">
      {list.map((label, i) => (
        <NavbarItem
          key={`${label.id}`}
          active={shouldShowActive ? i === 0 : true}
          {...label}
        />
      ))}
    </ul>
  )
}

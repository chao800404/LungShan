import React from 'react'
import { NavbarItem } from './NavbarItem'
import { NavbarListProps } from './type'
import { motion } from 'framer-motion'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

export const NavbarList = ({
  list,
  route,
  transferRoute,
  setRoute,
}: NavbarListProps) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )

  return (
    <ul
      className="flex gap-5 max-lg:gap-2"
      onMouseEnter={() => setPointerEvent('Link')}
      onMouseLeave={() => setPointerEvent('Default')}
    >
      {list.map((label) => (
        <NavbarItem
          key={`${label.id}`}
          setRoute={setRoute}
          isActive={route === label.slug}
          transferRoute={transferRoute}
          {...label}
        />
      ))}
    </ul>
  )
}

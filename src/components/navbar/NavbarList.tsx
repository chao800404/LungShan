import React from 'react'
import { NavbarBaseItem, NavbarItem } from './NavbarItem'
import { NavbarListProps } from './type'
import { motion } from 'framer-motion'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

export const NavbarList = ({ list }: NavbarListProps) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )

  return (
    <ul
      className="flex gap-5"
      onMouseEnter={() => setPointerEvent('Link')}
      onMouseLeave={() => setPointerEvent('Default')}
    >
      {list.map((label) => (
        <NavbarItem key={`${label.id}`} {...label} />
      ))}
    </ul>
  )
}

export const NavbarBaseList = ({
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
    <motion.ul
      onMouseEnter={() => setPointerEvent('Link')}
      onMouseLeave={() => setPointerEvent('Default')}
      className="flex gap-5"
      layoutRoot
    >
      {list.map((label, i) => (
        <NavbarBaseItem
          key={`${label.id}`}
          setRoute={setRoute}
          isActive={route === label.slug}
          transferRoute={transferRoute}
          {...label}
        />
      ))}
    </motion.ul>
  )
}

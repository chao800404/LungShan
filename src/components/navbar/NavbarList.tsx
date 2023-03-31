import React, { useState, useCallback } from 'react'
import { NavbarBaseItem, NavbarItem } from './NavbarItem'
import { NavbarListProps } from './type'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export const NavbarList = ({ list }: NavbarListProps) => {
  return (
    <ul className="flex gap-5  ">
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
  return (
    <motion.ul className="flex gap-5" layoutRoot>
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

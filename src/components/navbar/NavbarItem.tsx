import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useCallback } from 'react'
import { NavbarProps } from './type'
import { Popup } from '../popup'

const LabelVaraints = {
  hover: {
    backgroundColor: '#F0F0F0',
    scaleX: 1.1,
    scaleY: 1.05,
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
}

export const WrapperAnimateNavbarItem = ({ isVisible, list }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        key="navbar_popup"
        className="absolute w-[16rem] pt-2"
      >
        <Popup list={list} />
      </motion.div>
    )}
  </AnimatePresence>
)

export const NavbarItem = ({ title, content, active = true }: NavbarProps) => {
  const [hover, setHover] = useState(false)

  const setHide = useCallback(() => setHover(false), [])
  const toggleShow = useCallback(() => setHover((prev) => !prev), [])

  return (
    <motion.li
      whileHover="hover"
      className={`cursor-pointer relative  ${
        active ? 'text-primaryBlack' : 'text-primaryGray'
      }`}
      onMouseEnter={toggleShow}
      onMouseLeave={toggleShow}
    >
      <motion.div className="p-2">
        <p>{title}</p>
      </motion.div>
      <motion.span
        variants={LabelVaraints}
        className="flex w-full h-full -z-10 absolute top-0 left-0 bg-white rounded-md will-change-auto scale-0"
      />
      {content && content.length > 0 && (
        <WrapperAnimateNavbarItem isVisible={hover} list={content} />
      )}
    </motion.li>
  )
}

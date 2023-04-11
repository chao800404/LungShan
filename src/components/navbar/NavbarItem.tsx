import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useCallback } from 'react'
import { NavbarProps } from './type'
import { Popup } from '../popup'
import { PopupItemProps, WrapperAnimateNavbarItemProps } from '../popup/type'
import Link from 'next/link'

const LabelVaraints = {
  hover: {
    backgroundColor: '#F0F0F0',
    scaleX: 1.1,
    scaleY: 1.05,
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
}

const spring = {
  type: 'just',
  stiffness: 700,
  damping: 30,
}

export const WrapperAnimateNavbarItem = ({
  isVisible,
  list,
}: WrapperAnimateNavbarItemProps<PopupItemProps>) => (
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

export const NavbarItem = ({ title, content, slug }: NavbarProps) => {
  const [hover, setHover] = useState(false)

  const setHide = useCallback(() => setHover(false), [])
  const toggleShow = useCallback(() => setHover((prev) => !prev), [])

  return (
    <motion.li
      whileHover="hover"
      className="relative z-30 cursor-pointer"
      onMouseEnter={toggleShow}
      onMouseLeave={toggleShow}
    >
      <motion.div className="p-2 ">
        <Link href={`${slug}`}>{title}</Link>
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

export const NavbarBaseItem = ({
  title,
  isActive,
  slug,
  setRoute,
  transferRoute,
  onMouseEnter = undefined,
  onMouseLeave = undefined,
}: NavbarProps) => {
  const handleOnClick = () => {
    if (typeof setRoute === 'function') {
      setRoute(slug)
    }
  }
  const handleTransferRoute = () => {
    if (typeof transferRoute === 'function') {
      transferRoute(slug)
    }
  }

  return (
    <motion.li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleOnClick}
      className="relative cursor-pointer"
    >
      <motion.div className="p-2">
        <motion.span>{title}</motion.span>
      </motion.div>
      {isActive && (
        <motion.span
          variants={LabelVaraints}
          className="absolute w-full h-[1.5px] rounded-lg bg-black bottom-0 z-40 will-change-transform"
          layoutId="underline"
          animate={{ x: 0 }}
          transition={spring}
          onAnimationComplete={handleTransferRoute}
        />
      )}
    </motion.li>
  )
}

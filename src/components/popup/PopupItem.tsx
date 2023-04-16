import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PopupItemProps } from './type'

const PopupItemVariants = {
  isHover: {
    backgroundColor: '#F0F0F0',
    scaleX: 1.3,
    scaleY: 1.2,
    width: '100%',
    height: '100%',
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
  isInit: {
    scaleX: 0,
    scaleY: 0,
  },
}

const ArrowVariants = {
  isHover: {
    x: [1, 5, 5, 5, 1],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
}

const MotionLink = motion(Link)

export const PopupItem = ({
  title,
  description,
  slug,
  onPointerDown,
}: PopupItemProps) => {
  return (
    <motion.li
      whileHover="isHover"
      onPointerDown={onPointerDown}
      className="pr-5 pl-5 pt-2 pb-2 relative overflow-hidden  will-change-auto"
    >
      <MotionLink
        href={slug || '#'}
        className="flex flex-col gap-1 relative z-20"
      >
        <motion.h4 className="font-bold flex items-center text-sm">
          {title}
          <motion.div variants={ArrowVariants}>&nbsp; &rArr;</motion.div>
        </motion.h4>
        <p className="text-xs text-primaryGray500 truncate ">{description}</p>
      </MotionLink>

      <motion.span className=" absolute w-full h-full left-0 top-0 flex items-center justify-center">
        <motion.span
          className="scale-0 bg-white will-change-auto w-0 h-0"
          variants={PopupItemVariants}
        />
      </motion.span>
    </motion.li>
  )
}

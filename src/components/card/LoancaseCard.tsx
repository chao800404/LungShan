import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LoancaseCardProps } from './type'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

const variants = {
  show: (index: number) => {
    return {
      x: 0,
      y: 0,
      opacity: 1,
    }
  },
  init: (index: number) => {
    return {
      x: (3 - index) * 300,
      y: 120 + index * 10,
      opacity: 0,
    }
  },
}

export const LoancaseCard = ({
  title,
  imgUrl,
  cases,
  id,
  index,
}: LoancaseCardProps) => {
  const { setContent, setPointerEvent } = useMouseStore(
    (state) => ({
      setContent: state.setContent,
      setPointerEvent: state.setPointerEvent,
    }),
    shallow
  )

  const update = () => {
    setContent(title)
    setPointerEvent('Focus')
  }

  const clear = () => {
    setContent(undefined)
    setPointerEvent('Default')
  }

  return (
    <motion.div
      variants={variants}
      custom={index}
      transition={{
        delay: 0.2,
      }}
      animate="show"
      onMouseEnter={update}
      onMouseLeave={clear}
      initial="init"
      className="rounded-lg relative w-80 h-80 overflow-hidden border drop-shadow-2xl mx-4 will-change-transform"
    >
      <Image
        sizes="auto"
        alt={title}
        src={imgUrl}
        fill
        priority
        className="object-cover saturate-50 hover:saturate-150 duration-300 will-change-contents"
        draggable={false}
      />
    </motion.div>
  )
}

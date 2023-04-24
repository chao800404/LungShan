import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LoancaseCardProps } from './type'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/router'

export const LoancaseCard = ({
  title,
  imgUrl,
  index,
  casePath,
}: LoancaseCardProps) => {
  const { setContent, setPointerEvent } = useMouseStore(
    (state) => ({
      setContent: state.setContent,
      setPointerEvent: state.setPointerEvent,
    }),
    shallow
  )

  const route = useRouter()

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
      custom={index}
      transition={{
        delay: 0.2,
      }}
      animate="show"
      onMouseEnter={update}
      onMouseLeave={clear}
      initial="init"
      onClick={() => {
        route.push(casePath || '')
        clear()
      }}
      className="rounded-lg cursor-pointer relative w-80 h-80 overflow-hidden border drop-shadow-2xl mx-4 will-change-transform max-lg:h-40 max-sm:h-52"
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

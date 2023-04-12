import React, { forwardRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type BaseImageBlockProps = {
  className?: string
  id: string | number
  imgUrl: string
  moveX?: number
  index?: number
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const variants = {
  show: {
    x: 0,
    y: 0,
  },
  hide: (index: number) => ({
    x: 100 - 50 * index,
    y: 100 + 30 * index,
  }),
}

export const BaseImageBlock = forwardRef<HTMLDivElement, BaseImageBlockProps>(
  ({ className, imgUrl, moveX = 0, index = 0, id, onClick }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`relative origin-bottom-right ${className}`}
        onClick={onClick}
        custom={index}
        variants={variants}
        transition={{ duration: 0.3, delay: 0.05 * index, type: 'just' }}
        id={`${id}`}
      >
        <Image
          src={imgUrl}
          alt="image"
          fill
          className="object-cover"
          sizes="auto"
          draggable={false}
          style={{
            objectPosition: `${50 + moveX}%`,
          }}
          priority
          placeholder="blur"
          blurDataURL={imgUrl}
        />
      </motion.div>
    )
  }
)

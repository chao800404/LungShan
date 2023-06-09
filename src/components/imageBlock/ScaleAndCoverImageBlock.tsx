import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
    },
  },
}

const ImageContainer = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: 1.2,
  },
}

const H3Container = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'tween',
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      stiffness: 50,
    },
  },
}

const BaseContainer = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      type: 'tween',
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      stiffness: 50,
    },
  },
}

type ScaleAndCoverImageBlockProps = {
  imageUrl: string
  title: string
  description: string
}

export const ScaleAndCoverImageBlock: React.FC<
  ScaleAndCoverImageBlockProps
> = ({ imageUrl, title, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileHover="show"
      className="w-[17rem] h-auto rounded-lg border shadow-sm shadow-primaryBlack overflow-hidden relative snap-center max-sm:flex-1 max-sm:w-full"
    >
      <motion.div
        variants={container}
        className="absolute top-0 left-0 select-none	w-full h-full z-20 bg-[rgba(0,0,0,0.8)]  pt-14 pb-14 pr-5 pl-5 flex flex-col items-center gap-10 max-sm:gap-2 max-sm:p-5 max-sm:justify-center"
      >
        <motion.h3
          variants={H3Container}
          className="text-gray-200 font-bold text-2xl mb-5 max-sm:text-xl max-sm:mb-0"
        >
          {title}
        </motion.h3>
        <motion.div
          variants={BaseContainer}
          className="text-[5rem] text-gray-200 h-4/6 max-sm:text-3xl max-sm:h-fit"
        >
          <HiOutlineExternalLink />
        </motion.div>
        <motion.p
          variants={BaseContainer}
          className="text-primary font-medium max-sm:text-base max-sm:text-center"
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div
        variants={ImageContainer}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <Image
          src={imageUrl}
          fill
          sizes="auto"
          className="object-cover"
          alt="image"
          priority
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}

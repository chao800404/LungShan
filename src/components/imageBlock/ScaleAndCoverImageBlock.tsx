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

export const ScaleAndCoverImageBlock = () => {
  return (
    <motion.div
      initial="hidden"
      whileHover="show"
      className="w-[17rem] h-full rounded-lg border shadow-sm shadow-primaryBlack overflow-hidden relative"
    >
      <motion.div
        variants={container}
        className="absolute top-0 left-0 select-none	w-full h-full z-20 bg-[rgba(0,0,0,0.8)] cursor-pointer pt-14 pb-14 pr-5 pl-5 flex flex-col items-center gap-10"
      >
        <motion.h3
          variants={H3Container}
          className="text-gray-200 font-black text-3xl mb-5"
        >
          無財力證明皆可辦理
        </motion.h3>
        <motion.div
          variants={BaseContainer}
          className="text-[5rem] text-gray-200 h-4/6"
        >
          <HiOutlineExternalLink />
        </motion.div>
        <motion.p variants={BaseContainer} className="text-primary font-black ">
          協助規劃高額度、優惠利率，房屋坪數、屋齡皆不限
        </motion.p>
      </motion.div>
      <motion.div
        variants={ImageContainer}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <Image
          src="/images/lungshan_lona_9.jpg"
          fill
          sizes="auto"
          className="object-cover"
          alt="image"
        />
      </motion.div>
    </motion.div>
  )
}

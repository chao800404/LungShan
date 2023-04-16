import React from 'react'
import { motion } from 'framer-motion'

type ScamPreventionHeaderProps = {
  title: string
  subtitle: string
  onTop?: boolean
}

export const ScamPreventionHeader = ({
  title,
  subtitle,
  onTop,
}: ScamPreventionHeaderProps) => {
  return (
    <motion.h1
      className={`font-black text-primaryBlack duration-500 max-md:text-center`}
    >
      <i>
        <motion.span
          className={`text-5xl block max-sm:text-3xl duration-300 ${
            !onTop && 'max-sm:-translate-x-[15vw]'
          }`}
        >
          {title}
        </motion.span>
        <motion.span
          className={`block font-medium mt-2 duration-300 max-sm:text-xl ${
            !onTop && 'max-sm:-translate-x-[10vw]'
          }`}
        >
          {subtitle}
        </motion.span>
      </i>
    </motion.h1>
  )
}

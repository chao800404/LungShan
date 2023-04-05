import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { TimeLineBlockProps } from './type'
import ABOUTUS_COVER_DATA from '@/data/about_us_cover.json'
import { shallow } from 'zustand/shallow'

import { useAboutusStore } from '@/store'

const lineStyle =
  'after:w-[9.5rem] after:h-[1px] after:bg-primaryBlack after:absolute after:top-1/2 after:-translate-y-1/2 after:-z-10 after:left-1/2'

const blockStyle =
  'p-2 mt-5 text-sm border rounded-md shadow-md text-center relative after:w-[2px] after:h-5 after:bg-primaryGray after:absolute after:-top-5'

const blockBorder =
  'border-white shadow-[0_0_0_5px_rgba(0,0,0,0.3)] border-4 bg-primaryBlack duration-300 hover:shadow-[0_0_0_6px_rgba(0,0,0,0.4)]'

const varaints = {
  show: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  initial: {
    x: 30,
    y: 20,
    opacity: 0,
  },
}

const descriptionBox = {
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.3,
    },
  },
  initial: {
    opacity: 0,
  },
}

const TimelineBlock = ({
  year,
  description,
  isLast,
  isActive,
  index,
  onClick,
}: TimeLineBlockProps) => {
  const [animateEnd, setAnimateEnd] = useState(false)
  const coverOnLoad = useAboutusStore((state) => state.setCoverOnLoad, shallow)

  return (
    <motion.li
      variants={varaints}
      transition={{
        type: 'jsut',
        delay: 0.05 * index,
      }}
      animate="show"
      initial="initial"
      className="w-[9rem] flex items-center flex-col"
      onAnimationComplete={() => {
        setAnimateEnd(true)
        isLast && coverOnLoad(true)
      }}
    >
      <motion.h3 className="mb-3">{year}</motion.h3>
      <motion.div
        onClick={onClick}
        className={`cursor-pointer relative rounded-full w-4 h-4 ${
          !isLast && animateEnd && lineStyle
        }
        ${isActive ? blockBorder : 'bg-slate-100 border-4 border-gray-300'}
        `}
      />
      {isActive && animateEnd && (
        <AnimatePresence>
          <motion.div
            animate="show"
            initial="initial"
            variants={descriptionBox}
            className={blockStyle}
          >
            <p>{description}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.li>
  )
}

export const AboutusCover = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="border-b">
      <div className="flex min-h-[75vh] w-full items-center pt-40 flex-col pl-40 pr-40 overflow-hidden">
        <div className="relative w-[15rem] h-[15rem]">
          <Image
            src="/images/logo.webp"
            fill
            alt="image"
            priority={true}
            sizes="auto"
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="mt-5">
          <h1 className="border rounded-md shadow-md text-lg font-bold p-2">
            攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。
          </h1>
        </div>
        <div className="overflow-hidden h-50 pt-3 pb-3 mt-10">
          <ul className="flex justify-center">
            {ABOUTUS_COVER_DATA.timelines.map((item, i) => (
              <TimelineBlock
                key={item.id}
                {...item}
                isLast={i === ABOUTUS_COVER_DATA.timelines.length - 1}
                onClick={() => activeIndex !== i && setActiveIndex(i)}
                isActive={activeIndex === i}
                index={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import React, { useRef, useState, useEffect } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useWindowStore } from '@/store'
import { shallow } from 'zustand/shallow'

export const MediaSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [sc, setSc] = useState(0)
  const scrollYPosition = useWindowStore(
    (state) => state.scrollYPosition,
    shallow
  )

  useEffect(() => {
    if (ref && ref.current) {
      const elem = ref.current
      const { bottom } = elem.getBoundingClientRect()
      const bodyHeight = document.body.getBoundingClientRect().height

      if (
        scrollYPosition > bottom &&
        scrollYPosition <= window.innerHeight / 2 + bottom
      ) {
        const move = (scrollYPosition - bottom) / bodyHeight

        setSc(move)
      }
    }
  }, [scrollYPosition])

  return (
    <motion.section className="flex items-center justify-center mb-12 overflow-hidden">
      <motion.div
        ref={ref}
        className={`flex flex-col w-full relative -z-10 max-w-screen-xxl px-5 max-sm:p-0 `}
        style={{ scale: 1 + sc }}
      >
        <div className="rounded-3xl overflow-hidden flex items-center justify-center relative max-sm:rounded-none">
          <motion.div
            whileHover={{ color: '#6190EB' }}
            className="text-primaryBlue z-10 absolute text-[5rem] max-sm:text-[3rem]"
          >
            <BsFillPlayCircleFill className="border-2 border-gray-900 rounded-full" />
          </motion.div>
          <video
            src="/medias/loan_media.mp4"
            width="100%"
            muted={true}
            loop={true}
            height="auto"
            autoPlay
            preload="auto"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

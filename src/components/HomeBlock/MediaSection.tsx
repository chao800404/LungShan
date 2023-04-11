import React, { useRef, useState, useEffect } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export const MediaSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [sc, setSc] = useState(0)

  useEffect(() => {
    if (ref && ref.current) {
      const elem = ref.current
      const { bottom } = elem.getBoundingClientRect()
      const bodyHeight = document.body.getBoundingClientRect().height
      const scrollY = window.scrollY
      const handleOnScroll = () => {
        if (scrollY > bottom && sc < 0.3) {
          const move = (scrollY - bottom) / bodyHeight
          setSc(move)
        }
      }

      window.addEventListener('scroll', handleOnScroll)
      return () => window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  return (
    <motion.section className="flex items-center justify-center mb-12 overflow-hidden">
      <motion.div
        ref={ref}
        className={`pl-40 pr-40 flex flex-col w-full relative -z-10`}
        style={{ scale: 1 + sc }}
      >
        <div className="rounded-3xl overflow-hidden flex items-center justify-center relative">
          <motion.div
            whileHover={{ color: '#6190EB' }}
            className="text-primaryBlue z-10 absolute text-[5rem]"
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

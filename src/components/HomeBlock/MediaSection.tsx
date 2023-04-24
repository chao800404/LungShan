import React from 'react'
import { motion } from 'framer-motion'

export const MediaSection = () => {
  return (
    <motion.section className="flex items-center justify-center mb-12 overflow-hidden">
      <motion.div
        className={`flex flex-col w-full relative -z-10 max-w-screen-xxl px-5 max-sm:p-0 `}
      >
        <div className="rounded-3xl overflow-hidden flex items-center justify-center relative max-sm:rounded-none">
          <video
            src="/medias/loan_media-1.mp4"
            width="100%"
            muted
            loop={true}
            height="auto"
            autoPlay={true}
            preload="auto"
            typeof="video/mp4"
            playsInline
            controls={false}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

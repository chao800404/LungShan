import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { ImArrowDownLeft2 } from 'react-icons/im'
import { FiExternalLink } from 'react-icons/fi'

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { pointerEvent, color, content } = useMouseStore(
    (state) => ({
      pointerEvent: state.pointerEvent,
      color: state.color,
      content: state.content,
    }),
    shallow
  )

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const isLink = pointerEvent === 'Link'
  const isFocus = pointerEvent === 'Focus'
  const defaultColor = color === 'Default' ? '#1c1c1c' : '#F3F3F3'
  const scale = () => {
    if (isLink) return 0.9
    else if (isFocus) return 1.3
    else return 0.3
  }
  const boxShadow = () => {
    if (isLink) return `0 0 0 2px ${defaultColor}`
    else if (isFocus) return '2px 2px 5px rgba(0,0,0,0.5)'
    else return '0 0 0 0 transparent'
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[999] pointer-events-none">
      <motion.div
        style={{
          transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
        }}
        className="absolute will-change-transform"
      >
        <motion.div
          animate={{
            scale: scale(),
          }}
          transition={{
            type: 'spring',
          }}
          style={{
            boxShadow: boxShadow(),
            backgroundColor: isLink ? 'transparent' : defaultColor,
          }}
          className="origin-center will-change-transform pointer-events-none w-14 h-14 rounded-full z-5 -translate-x-2 -translate-y-2"
        />
        {isLink && (
          <motion.div
            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
            initial={{ x: 5, y: -5 }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute -right-3 -top-3 z-30 text-3xl"
          >
            <ImArrowDownLeft2 />
          </motion.div>
        )}
        {isFocus && (
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center left-1/2 -translate-x-1/2  absolute top-1/2 -translate-y-1/2"
          >
            <div
              className={`text-2xl w-full ${
                color === 'Default' ? 'text-gray-50' : 'text-gray-800'
              } `}
            >
              <FiExternalLink />
            </div>
            {content && (
              <p className="whitespace-nowrap underline shadow absolute left-16 text-3xl text-primary font-extrabold">
                {content}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

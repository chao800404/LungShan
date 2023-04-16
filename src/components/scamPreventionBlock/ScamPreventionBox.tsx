import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '../button'
import { useMediaQuery } from 'react-responsive'

type BoxProps = Record<'title' | 'description', string> & {
  id: number
  onClick: () => void
  onTop: boolean
}

export const ScamPreventionBox: React.FC<BoxProps> = ({
  title,
  description,
  id,
  onTop,
  onClick,
}) => {
  const [onEnter, setOnEnter] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'some', once: true })
  const ScreenSm = useMediaQuery({
    query: '(max-width: 640px)',
  })

  const truncateSentence = useCallback((sentence: string) => {
    return sentence.split('').map((word, i) => {
      if (i <= 30)
        return (
          <motion.span key={i} className="block h-fit">
            {word}
          </motion.span>
        )
      else if (i === 31) return '...'
      else return null
    })
  }, [])

  const truncateSentenceAn = useCallback((sentence: string) => {
    return sentence.split('').map((word, i) => {
      if (i <= 30)
        return (
          <motion.span key={i} className="mb-auto">
            {word}
          </motion.span>
        )
      else
        return (
          <motion.span
            key={i}
            transition={{ delay: i * 0.03 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-auto"
          >
            {word}
          </motion.span>
        )
    })
  }, [])

  useEffect(() => {
    if (!ScreenSm) return
    setOnEnter(isInView)
  }, [isInView, ScreenSm])

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      ref={ref}
      onMouseEnter={() => setOnEnter(true)}
      className={`${
        onEnter ? 'border-gray-400' : ''
      } duration-300 bg-white border rounded-lg w-full p-5 shadow-md grid grid-rows-[2rem_1fr_3rem] hover:bg-gray-50 max-sm:w-[90vw] max-sm:m-auto max-sm:p-3`}
    >
      <h2 className="font-bold h-fit">{title}</h2>
      <motion.div className="my-2 h-full self-start flex items-start">
        <motion.p className="content-start h-fit flex flex-wrap mb-auto max-sm:text-sm">
          {onEnter && !onTop && ScreenSm
            ? truncateSentenceAn(description)
            : truncateSentence(description)}
        </motion.p>
      </motion.div>
      <div className="h-10 flex items-end">
        <Button onClick={onClick} className="border-none py-2 px-5">
          <span>查看案例</span>
        </Button>
      </div>
    </motion.div>
  )
}

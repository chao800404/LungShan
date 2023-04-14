import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const varaints = {
  show: {
    scale: 1,
  },
  hide: {
    scale: 0,
  },
}

const buttonVariants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
}

type ScamPreventionPopupProps = {
  close: React.MouseEventHandler<HTMLDivElement>
  title: string
  caseContent: string
}

export const ScamPreventionPopup: React.FC<ScamPreventionPopupProps> = ({
  close,
  title,
  caseContent,
}) => {
  const [complete, setComplete] = useState(false)

  const truncateSentenceAn = (sentence: string) => {
    return sentence.split('').map((word, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.005, type: 'tween' }}
      >
        {word}
      </motion.span>
    ))
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed overflow-hidden top-0 z-50 bg-[rgba(255,255,255,0.5)] backdrop-blur-sm flex items-center justify-center left-0 w-screen h-screen"
    >
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        onAnimationComplete={() => setComplete(true)}
        onClick={(e) => e.preventDefault}
        className="rounded-md w-full will-change-transform overflow-hidden bg-gray-50 max-w-3xl pb-8 shadow-lg border relative"
      >
        {complete ? (
          <motion.div whileHover="show" initial="hide">
            {complete && (
              <motion.div
                onClick={close}
                variants={varaints}
                className="absolute border -right-12 -top-12 h-24 w-24 flex items-center justify-center rounded-full bg-primaryBlack text-primary"
              >
                <motion.span
                  variants={buttonVariants}
                  transition={{ delay: 0.3 }}
                >
                  <AiOutlineClose className="mr-10  mt-10 text-xl" />
                </motion.span>
              </motion.div>
            )}
            <h1 className="font-bold pl-8 pr-20 py-3 mt-5">
              <span>『</span>
              <span>{title}</span>
              <span>』</span>
            </h1>
            <hr />
            <div className="p-8 max-h-96 overflow-scroll">
              <p className="flex flex-wrap text-justify">
                {truncateSentenceAn(caseContent)}
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="h-[50vh]"></div>
        )}
      </motion.div>
      <div
        onClick={close}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      ></div>
    </motion.div>
  )
}

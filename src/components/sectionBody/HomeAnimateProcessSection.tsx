import React, { useCallback, useRef, useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import * as LONA_PHONE_AN_2 from '../../../public/lottieJson/lona_phone_an_2.json'
import * as LONA_PHONE_AN_1 from '../../../public/lottieJson/lona_phone_an_1.json'
import * as LONA_PHONE_AN_3 from '../../../public/lottieJson/lona_phone_an_3.json'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Data = {
  title: string
  id: number
  subTitle?: string
  image: string
  jsonFile: object
}

const data: Data[] = [
  {
    jsonFile: LONA_PHONE_AN_1,
    title: '與我們專員聯絡, 快速協助及審核文件',
    subTitle: '絕不浪費您一絲時間',
    image: '/images/lungshan_lona_3.jpg',
    id: 0,
  },
  {
    jsonFile: LONA_PHONE_AN_2,
    title: '銀行審核,貸款核准並完成對保',
    subTitle: '專業評估維護您的權益',
    image: '/images/lungshan_lona_4.jpg',
    id: 1,
  },
  {
    jsonFile: LONA_PHONE_AN_3,
    title: '審核通過,撥款至您的銀行帳戶',
    subTitle: '接受任何方式快速撥款',
    image: '/images/lungshan_lona_5.jpg',
    id: 2,
  },
]

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -500,
    transition: {
      duration: 0.6,
      type: 'spring',
    },
  },
}

const ImageComponent = ({
  align = 'right',
  title,
  image,
}: {
  align?: 'left' | 'right'
  title: string
  image: string
}) => {
  return (
    <div
      className={`relative w-[20rem] h-[16rem] rounded-md shadow-gray-500 shadow-sm border border-gray-400 overflow-hidden ${
        align === 'left' ? 'mr-auto' : 'ml-auto'
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="auto"
      />
    </div>
  )
}

const AnimateBlock = ({
  title,
  subTitle,
  image,
  jsonFile,
  isActive,
  index,
  isLast,
}: Data & { isActive: boolean; index: number; isLast: boolean }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30%' })
  const [anComplete, setAnComplete] = useState(false)

  const anOption = (isInView: boolean) => {
    return {
      y: isInView ? 0 : 199,
      opacity: isInView ? 1 : 0,
      transition: {
        duration: isInView ? 0.5 : 0,
        type: 'just',
      },
    }
  }

  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`pl-40 pr-40 w-full grid grid-cols-[repeat(3,_1fr)] min-h-screen overflow-hidden absolute top-0 ${
        isActive ? 'z-10' : 'z-0'
      } `}
    >
      <motion.div
        className={`self-center col-span-1 justify-self-end row-start-1 row-span-1 ${
          isActive ? 'visible' : 'invisible'
        } ${isEven ? 'col-start-1' : 'col-start-3'}`}
      >
        <AnimatePresence>
          {isLast && isActive && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ImageComponent title={title} image={image} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        ref={ref}
        animate={anOption(isInView)}
        onAnimationComplete={() => setAnComplete(true)}
        className={`h-[40rem] w-[21rem] rounded-xl bg-primaryBlack p-2 col-start-2 col-span-1 shadow-sm shadow-black justify-self-center self-center ${
          isActive ? 'visible' : 'invisible'
        }`}
      >
        <div className="bg-gray-100 h-full w-full col-start-2 colr-span-1 rounded-[8px] overflow-hidden">
          <Lottie
            renderer={'canvas' as unknown as 'svg'}
            animationData={jsonFile}
            play={isActive}
            goTo={isActive && isInView ? 0 : undefined}
            loop={false}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </motion.div>
      <motion.div
        className={`text-black self-center col-span-1 justify-self-end row-start-1 row-span-1 ${
          isEven ? 'col-start-3' : 'col-start-1'
        } ${isEven ? 'text-start' : 'text-end'}   ${isLast && 'text-start'}`}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.h3
                className={`font-bold text-[2rem] ${!isLast && 'mb-5'}`}
              >
                <motion.span>{title}</motion.span>
                <motion.span
                  animate={{
                    opacity: isInView && anComplete ? 1 : 0,
                  }}
                  className="text-primaryGray"
                >
                  {` "${subTitle}" `}
                </motion.span>
              </motion.h3>
              {!isLast && (
                <ImageComponent
                  title={title}
                  image={image}
                  align={isEven ? 'left' : 'right'}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

const BackgroundScreen = ({
  index,
  updateCurScreenIndex,
  isLast,
}: {
  index: number
  updateCurScreenIndex: (index: number) => void
  isLast: boolean
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-50%' })

  useEffect(() => {
    if (isInView) updateCurScreenIndex(index)
  }, [isInView])

  return <div ref={ref} className="h-screen snap-center" />
}

export const HomeAnimateProcessSection = () => {
  const [curScreenIndex, setCurScreenIndex] = useState(0)

  const updateCurScreenIndex = useCallback((index: number) => {
    setCurScreenIndex(index)
  }, [])

  return (
    <section className="h-auto">
      <div className={`sticky top-0 h-screen snap-center`}>
        <div className="absolute top-0 w-full h-full">
          {data.map((item, i) => (
            <AnimateBlock
              key={i}
              index={i}
              isActive={curScreenIndex === i}
              isLast={i === data.length - 1}
              {...item}
            />
          ))}
        </div>
      </div>
      {data.map((_, i) => (
        <BackgroundScreen
          key={i}
          index={i}
          updateCurScreenIndex={updateCurScreenIndex}
          isLast={i === data.length - 1}
        />
      ))}
    </section>
  )
}

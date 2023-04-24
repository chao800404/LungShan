import React, { useCallback, useRef, useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import * as LOAN_PHONE_AN_2 from '../../../public/lottieJson/loan_phone_an_2.json'
import * as LOAN_PHONE_AN_1 from '../../../public/lottieJson/loan_phone_an_1.json'
import * as LOAN_PHONE_AN_3 from '../../../public/lottieJson/loan_phone_an_3.json'
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
    jsonFile: LOAN_PHONE_AN_1,
    title: '與我們聯絡快速協助及審核文件',
    subTitle: '絕不浪費您一絲時間',
    image: '/images/lungshan_loan_3.jpg',
    id: 0,
  },
  {
    jsonFile: LOAN_PHONE_AN_2,
    title: '銀行審核貸款核准並完成對保',
    subTitle: '專業評估維護您的權益',
    image: '/images/lungshan_loan_4.jpg',
    id: 1,
  },
  {
    jsonFile: LOAN_PHONE_AN_3,
    title: '審核通過撥款至您的銀行帳戶',
    subTitle: '接受任何方式快速撥款',
    image: '/images/lungshan_loan_5.jpg',
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
      className={`relative w-[20rem] h-[16rem] rounded-md shadow-gray-500 shadow-sm border border-gray-400 overflow-hidden ml-auto  ${
        align === 'left'
          ? 'mr-auto max-lg:ml-0 max-lg:mr-auto'
          : 'ml-auto max-lg:ml-0 max-lg:mr-auto'
      } max-md:hidden`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="auto"
        draggable={false}
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

  // const isDesktop = screenW >= 1024
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`w-full grid max-w-screen-xxl px-5 grid-cols-[repeat(3,_1fr)] min-h-screen overflow-hidden absolute top-0 ${
        isActive ? 'z-10' : 'z-0'
      } max-lg:grid-cols-[repeat(2,_1fr)] max-md:grid-cols-[100%]`}
    >
      <motion.div
        className={`self-center col-span-1 justify-self-end  row-start-1 row-span-1 ${
          isActive ? 'visible' : 'invisible'
        } ${
          isEven
            ? 'col-start-1 max-lg:col-start-2 max-lg:col-span-1 max-md:col-start-1  max-md:row-start-1'
            : 'col-start-3 max-lg:col-start-2 max-lg:col-span-1 max-md:col-start-1  max-md:row-start-1'
        } max-lg:ml-0 mr-auto`}
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
        } max-xl:h-[35rem] max-xl:w-[18rem] max-lg:h-[45rem] max-lg:w-[24rem] max-lg:col-start-1 max-lg:col-span-1 max-mmd:h-[85vw] max-mmd:w-[44vw] max-md:row-start-1 max-sm:w-[36vh] max-sm:h-[70vh]`}
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
          isEven
            ? 'col-start-3 max-lg:col-start-2 max-lg:col-span-1 max-md:col-start-1  max-md:row-start-1'
            : 'col-start-1 max-lg:col-start-2 max-lg:col-span-1 max-md:col-start-1  max-md:row-start-1'
        } ${isEven ? 'text-start' : 'text-end max-lg:text-start'}   ${
          isLast && 'text-start max-lg:mb-[25rem]'
        } max-md:z-20 max-md:mb-[25rem]`}
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
                className={`font-bold text-[2rem] ${
                  !isLast && 'mb-5'
                } max-xl:text-[1.8rem] max-md:max-w-sm max-md:bg-[rgba(255,255,255,0.8)] max-md:p-5 max-md:text-2xl max-md:rounded-lg max-md:drop-shadow-lg max-md:border-2 max-md:backdrop-blur-sm max-md:border-primaryBlack max-sm:text-base max-sm:p-2`}
              >
                <motion.span>{title}</motion.span>
                <hr className="hidden max-sm:block" />
                <motion.span
                  animate={{
                    opacity: isInView && anComplete ? 1 : 0,
                  }}
                  className="text-primaryGray max-md:text-primaryBlue"
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
        <div className="absolute top-0 w-full h-full flex justify-center">
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

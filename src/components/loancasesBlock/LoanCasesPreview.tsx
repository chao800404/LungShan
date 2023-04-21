import { useLoanCasesStore, useMouseStore } from '@/store'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { shallow } from 'zustand/shallow'
import { LoanCasesBody } from './LoanCasesBody'
import { LoancaseCardProps } from '../card/type'
import { LoanCasesOverview } from './LoanCasesOverview'

export type LoanCasesPreviewProps = {
  list: LoancaseCardProps[]
}

const variants = {
  show: {
    x: 0,
  },
  hide: {
    x: '100%',
  },
}

export const LoanCasesPreview = ({ list }: LoanCasesPreviewProps) => {
  const router = useRouter()
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )
  const { focusId, reset } = useLoanCasesStore(
    (state) => ({ focusId: state.focusId, reset: state.reset }),
    shallow
  )

  const caseData = useMemo(() => {
    if (focusId) {
      return list[0].cases.filter((item) => item.id === focusId)[0]
    } else return null
  }, [focusId])

  const transferRoute = () => {
    if (focusId) {
      return reset()
    }
    router.back()
  }

  if (!list) return null

  const isOverView = focusId && caseData

  return (
    <motion.div
      className="h-screen w-full max-md:bg-[rgba(255,255,255,0.8)] max-md:backdrop-blur max-md:shadow-[0rem_0_1rem_5px_rgba(0,0,0,0.4)]"
      animate={{ opacity: [0, 1] }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="w-full h-12 border-b flex items-center gap-5 max-md:border-[rgba(255,255,255,0.8)] max-sm:h-10">
        <div
          onMouseEnter={() => setPointerEvent('Link')}
          onMouseLeave={() => setPointerEvent('Default')}
          onClick={transferRoute}
          className="border-r text-4xl h-full w-12 text-center cursor-pointer max-md:border-[rgba(255,255,255,0.8)] max-sm:w-10"
        >
          <motion.div
            whileHover={{
              x: [0, -5, 0],
              transition: { repeat: Infinity, duration: 2 },
            }}
            className="w-full h-full"
          >
            <MdKeyboardArrowLeft className="block m-auto h-full" />
          </motion.div>
        </div>
        <motion.h2 className="font-bold max-sm:text-base max-sm:font-medium">
          {isOverView ? list[0].title : '全部案例'}
        </motion.h2>
      </div>
      <div className="w-full h-[calc(100%-2.5rem)]  relative max-md:border-l max-md:border-white">
        <div className="p-10">
          <LoanCasesBody
            titleSize="text-4xl max-sm:text-2xl"
            className="grid-cols-[repeat(1,minmax(0,_1fr))]"
            list={list}
          />
        </div>
        <AnimatePresence>
          {isOverView && (
            <motion.div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <motion.div
                variants={variants}
                animate="show"
                exit="hide"
                initial="hide"
                transition={{
                  delay: 0.2,
                  type: 'just',
                }}
                className="w-full h-full bg-gray-50 shadow-md shadow-[rgba(0,0,0,0.3)] p-12 max-lg:p-5 max-sm:pt-[5vh]"
              >
                <LoanCasesOverview {...caseData} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

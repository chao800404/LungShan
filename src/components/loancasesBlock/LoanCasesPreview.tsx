import { useLoanCasesStore, useMouseStore } from '@/store'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { shallow } from 'zustand/shallow'
import { LoanCasesBody } from './LoanCasesBody'
import { LoancaseCardProps } from '../card/type'
import { LoanCasesOverview } from './LoanCasesOverview'

type LoanCasesPreviewProps = {
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
    <motion.div className="flex-1">
      <motion.div
        className="h-full w-full "
        animate={{ opacity: [0, 1] }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-full h-12 border-b flex items-center gap-5">
          <div
            onMouseEnter={() => setPointerEvent('Link')}
            onMouseLeave={() => setPointerEvent('Default')}
            onClick={transferRoute}
            className="border-r text-4xl h-full w-12 text-center cursor-pointer "
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
          {isOverView && <h2 className="font-black">{list[0].title}</h2>}
        </div>
        <div className="w-full h-full relative">
          <div className="p-10">
            <LoanCasesBody titleSize="text-4xl" list={list} />
          </div>
          <AnimatePresence>
            {isOverView && (
              <motion.div
                style={{ height: `calc(100% - 3rem)` }}
                className="absolute top-0 overflow-hidden left-0 w-full"
              >
                <motion.div
                  variants={variants}
                  animate="show"
                  exit="hide"
                  initial="hide"
                  transition={{
                    delay: 0.2,
                    type: 'just',
                  }}
                  className="w-full h-full bg-gray-50 p-14 shadow-md shadow-[rgba(0,0,0,0.3)]"
                >
                  <LoanCasesOverview {...caseData} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

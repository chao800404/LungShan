import React, { useEffect } from 'react'
import { BlockComponent } from './type'
import { useLoanCasesStore, useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { FiExternalLink } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { LoancaseCardProps } from '../card/type'
import { motion } from 'framer-motion'

type LoanCasesBodyProps = {
  className?: string
  list: LoancaseCardProps[]
  length?: number
  titleSize?: string
}

export const LoanCasesBody = ({
  list,
  className,
  length = 1,
  titleSize = 'text-2xl',
}: LoanCasesBodyProps) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )
  const setFocusId = useLoanCasesStore((state) => state.setFocusId, shallow)
  const route = useRouter()

  if (length >= 3) length = 3

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))` }}
      className={`h-full w-full grid gap-5 ${className}`}
    >
      {list?.map((item) => (
        <div className="w-full" key={item.id}>
          <h3
            className={`${titleSize} cursor-pointer font-black mb-5 hover:text-gray-700 hover:underline duration-300`}
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            onClick={() => route.push(item.slug || '')}
          >
            {item.title}
          </h3>
          <div className="mt-3">
            {item?.cases?.map((item) => (
              <motion.div
                onMouseEnter={() => setPointerEvent('Focus')}
                onMouseLeave={() => setPointerEvent('Default')}
                onPointerDown={() => setFocusId(item.id)}
                key={item.id}
                whileHover={{
                  scale: 1.01,
                  transition: { type: 'tween', duration: 0.3 },
                }}
                initial={{ scale: 1 }}
                className="shadow border cursor-pointer mt-2 p-3 flex justify-between group items-center hover:bg-gray-100 duration-300"
              >
                <p className="w-4/5 truncate">{item.title}</p>
                <FiExternalLink className="text-gray-300 group-hover:text-gray-700 duration-200" />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

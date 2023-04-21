import React, { useState, useEffect } from 'react'
import { ProductCard } from '@/components/card'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { useProductCardStore } from '@/store'
import { shallow } from 'zustand/shallow'
import * as uuid from 'uuid'

type MotionBlockProps = {
  children: JSX.Element
  index: number
}

export type ProductBlockProps = {
  data: {
    title: string
    path: string
    id: number
    casePath: string
    productPath: string
  }[]
  className?: string
  showProduct?: boolean
  title?: string
}

const variants = {
  show: (index: number) => {
    return {
      x: 0,
      opacity: 1,
      zIndex: 10 - index,
      transition: {
        delay: 0.3 * index,
        duration: 0.5,
        type: 'spring',
      },
    }
  },
  hide: (index: number) => {
    return {
      x: `-${index * 100}%`,
      opacity: 0,
    }
  },
}

const MotionBlock: React.FC<MotionBlockProps> = ({ children, index }) => {
  return (
    <motion.div custom={index} className="flex-1 bg-white" variants={variants}>
      {children}
    </motion.div>
  )
}

export const ProductBlock = ({
  data,
  className,
  showProduct = true,
  title = '產品服務項目',
}: ProductBlockProps) => {
  const { coverOnload, setCoverOnload } = useProductCardStore(
    (state) => ({
      coverOnload: state.shouldShow,
      setCoverOnload: state.setShouldShow,
    }),
    shallow
  )
  const [shouldShow, setShouldShow] = useState(true)
  const [load, setLoad] = useState(false)
  const handleToggleShow = () => setShouldShow((toggle) => !toggle)

  useEffect(() => {
    if (coverOnload) setLoad(true)
  }, [coverOnload])

  return (
    <section
      className={`max-w-screen-xxl m-auto overflow-hidden pt-2  pb-20 ${className} max-xxl:px-5 max-sm:bg-white max-sm:relative max-sm:z-10`}
    >
      <div className="grid grid-cols-[10rem_1fr_1.5rem]">
        <h3 className="text-xl rounded-sm w-full text-center font-bold bg-primaryBlack text-white pt-2 pb-2 pl-3 pr-3">
          {title}
        </h3>
        <div className="w-full h-[2px] bg-primaryBlack self-center" />
        <motion.div
          onClick={handleToggleShow}
          whileHover={{ scale: 1.05 }}
          className="rounded-full border-primaryBlack border-2 text-base justify-self-center w-full self-center"
        >
          <MdKeyboardArrowDown
            className={`w-full h-full m-auto ${
              shouldShow ? 'rotate-0' : 'rotate-90'
            }`}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {load && (
          <motion.div className="max-sm: w-full max-sm:overflow-scroll max-sm:py-3 max-sm:px-1 hide_scrollbar touch-pan-x">
            <motion.div
              initial="hide"
              whileInView="show"
              className={`flex gap-2 mt-10 ${
                !shouldShow && 'hidden'
              } max-xl:grid max-xl:grid-cols-[repeat(3,_1fr)] max-xl:gap-5 max-sm:grid-cols-[repeat(6,_15rem)]`}
              viewport={{
                margin: '-30%',
                once: true,
              }}
              onAnimationComplete={() => setCoverOnload(false)}
            >
              {data?.map((item, i) => (
                <MotionBlock key={item.id} index={i}>
                  <ProductCard {...item} showProduct={showProduct} />
                </MotionBlock>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

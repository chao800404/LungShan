import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { wrap } from 'popmotion'
import Image from 'next/image'
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

type SwipperHandleDrag = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo
) => void

type HandleOnDrag = React.DragEventHandler<HTMLImageElement> & SwipperHandleDrag

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const MotionImage = motion(Image)

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Swipper = ({
  images,
  index = 0,
  newPage,
  updatePage,
}: {
  images: string[]
  index?: number
  newPage?: number
  updatePage?: (index: number) => void
}) => {
  const [[page, direction], setPage] = useState([index, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const handleOnDrag: SwipperHandleDrag = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) paginate(1)
    else if (swipe > swipeConfidenceThreshold) paginate(-1)
  }

  useEffect(() => {
    if (typeof newPage === 'number' && newPage !== page) {
      const direction = page > newPage ? -1 : 1
      setPage([newPage, direction])
    }
  }, [newPage])

  useEffect(() => {
    if (typeof updatePage === 'function' && newPage !== page)
      updatePage(imageIndex)
  }, [page])

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <MotionImage
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          fill
          className="object-cover cursor-grab active:cursor-grabbing shadow-md rounded-sm overflow-hidden"
          whileDrag={{
            cursor: 'grabbing',
          }}
          sizes="auto"
          alt="image"
          onDragEnd={handleOnDrag as HandleOnDrag}
          priority
        />
      </AnimatePresence>
      <div className="absolute right-0 bottom-0 z-20 flex bg-primaryBlack text-primary cursor-pointer">
        <div
          className="next text-[2.2rem] border-r border-gray-700"
          onClick={() => paginate(-1)}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div className="prev text-[2.2rem]" onClick={() => paginate(1)}>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  )
}

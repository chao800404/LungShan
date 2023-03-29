import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { wrap } from 'popmotion'
import Image from 'next/image'
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'

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

export const Swipper = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const handleOnDrag: SwipperHandleDrag = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      return paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      return paginate(-1)
    }
  }

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
          className="object-cover cursor-grab active:cursor-grabbing rounded-md border border-primaryGray shadow-sm shadow-primaryBlack"
          whileDrag={{
            cursor: 'grabbing',
          }}
          sizes="auto"
          alt="image"
          onDragEnd={handleOnDrag as HandleOnDrag}
          // onDragEnd={handleOnDrag}
        />
      </AnimatePresence>
      <div
        className="next cursor-pointer rounded-md absolute top-[50%] left-0 -translate-y-1/2 -translate-x-1/2 z-20 text-3xl bg-white shadow-md  shadow-[rgba(0,0,0,0.3)]"
        onClick={() => paginate(1)}
      >
        <BsFillArrowLeftSquareFill />
      </div>
      <div
        className="prev cursor-pointer top-[50%] right-0 -translate-y-1/2 translate-x-1/2 z-20 text-3xl absolute bg-white rounded-md shadow-md shadow-[rgba(0,0,0,0.3)]"
        onClick={() => paginate(-1)}
      >
        <BsFillArrowRightSquareFill />
      </div>
    </>
  )
}

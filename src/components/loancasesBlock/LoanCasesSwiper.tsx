import React, { useState, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion'
import { LoancaseCard } from '../card'
import { BlockComponent } from './type'

export const LoanCasesSwiper: BlockComponent = ({ list }) => {
  const baseX = useMotionValue(0)
  const [enter, setEnter] = useState(false)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
    stiffness: 100,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 12], {
    clamp: false,
  })
  const directionFactor = useRef<number>(1)
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * (delta / 1000) * (enter ? 0 : 2)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <motion.div
      style={{ x }}
      className="flex w-fit mt-20 will-change-transform"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <motion.div className="flex">
        {list?.map((item, i) => (
          <LoancaseCard key={item.id} index={i} {...item} />
        ))}
        {list?.map((item, i) => (
          <LoancaseCard key={item.id} index={i} {...item} />
        ))}
        {list?.map((item, i) => (
          <LoancaseCard key={item.id} index={i} {...item} />
        ))}
        {list?.map((item, i) => (
          <LoancaseCard key={item.id} index={i} {...item} />
        ))}
      </motion.div>
    </motion.div>
  )
}

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion'

interface ParallaxProps {
  children: string
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(0, -960, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

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
      className="will-change-transform w-64  flex whitespace-nowrap flex-nowrap text-3xl py-2"
    >
      <span className="block">{children}</span>
      <span className="block">{children}</span>
      <span className="block">{children}</span>
      {/* <span className="block">{children}</span> */}
    </motion.div>
  )
}

export function LoopSwiper({ one, two }: { one: string; two: string }) {
  return (
    <section className="w-full overflow-hidden py-5 text-gray-300 hover:text-gray-800 duration-300">
      <ParallaxText baseVelocity={-50}>{one}</ParallaxText>
      <ParallaxText baseVelocity={50}>{two}</ParallaxText>
    </section>
  )
}

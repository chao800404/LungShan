import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

const variants = {
  hover: {
    x: [0, 3, 0],
    transition: {
      repeat: Infinity,
      duration: 1.2,
    },
  },
  init: {
    x: 0,
  },
}

type ServiceCardProps = {
  imgUrl: string
  title: string
  description: string
  topLevel: {
    title: string
    amount: string
  }
  recommendations: boolean
  subtitle: string
  casePath: string
  slug: string
}

export const ServiceCard = ({
  imgUrl,
  title,
  topLevel,
  recommendations,
  subtitle,
  slug,
}: ServiceCardProps) => {
  const router = useRouter()

  return (
    <motion.div
      onClick={() => router.push(slug)}
      className="w-full relative duration-300 justify-self-center text-center z-0 border rounded-md shadow-md hover:scale-105 hover:-translate-y-2 hover:z-20 hover:shadow-xl will-change-transform will-change-contents"
    >
      <div className="w-full h-52 relative">
        <Image
          src={imgUrl}
          fill
          className="object-cover rounded-tr-md rounded-tl-md"
          draggable={false}
          alt={title}
          sizes="auto"
          priority
        />
        <div className="absolute z-10 w-full h-full flex items-start justify-end">
          <h1 className="py-2 px-3 mt-2 mr-2 border bg-[rgba(0,0,0,0.6)] text-sm font-normal text-white rounded-md shadow-xl">
            {title}
          </h1>
        </div>
      </div>
      <div className="py-4 h-36 overflow-scroll">
        <p className="px-6 text-start">{subtitle}</p>
      </div>
      <div className="border-t flex justify-between px-6 py-2 items-center">
        <h5 className="font-mono"> {title}</h5>
        <motion.button
          whileHover="hover"
          initial="init"
          className="px-3 py-1 border border-transparent duration-300 rounded-sm flex items-center gap-2 font-mono"
        >
          <p>了解詳情</p>
          <motion.div variants={variants}>
            <AiOutlineArrowRight />
          </motion.div>
        </motion.button>
      </div>
      <div className="border-t flex justify-between px-6 py-2 items-center">
        <h5 className="font-mono"> {topLevel.title}</h5>
        <motion.button className="px-3 py-1 border border-transparent duration-300 rounded-sm flex items-center gap-2">
          <p className="font-bold">{topLevel.amount}</p>
          <div className="text-xl">
            <RiMoneyDollarBoxLine />
          </div>
        </motion.button>
      </div>
      {recommendations && (
        <div className="w-full h-full absolute left-0 top-0 pointer-events-none">
          <div className="w-40 h-12 z-30 -rotate-45 absolute top-4 -left-10">
            <Image
              alt="ribbon"
              draggable={false}
              fill
              sizes="auto"
              src="/images/decoration/ribbon.svg"
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

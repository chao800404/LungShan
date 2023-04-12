import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const HomePageCover = () => {
  return (
    <section className="flex items-center justify-center snap-none">
      <div className="pl-40 pr-40 pt-40 pb-20 flex flex-col w-full ">
        <div className="relative w-[60rem] h-[13.5rem]">
          <Image
            className="object-cover"
            fill
            alt="cover"
            src="/images/cover.svg"
            priority
            draggable={false}
            placeholder="blur"
            blurDataURL="/images/cover.svg"
          />
          <div className="absolute left-0 -bottom-8 w-full h-5 overflow-hidden flex justify-center">
            <motion.div
              className="w-full h-1 bg-black bottom-8 origin-left"
              animate={{
                transition: {
                  repeat: Infinity,
                  duration: 15,
                  stiffness: 100,
                  delay: 2,
                },
                x: '-150%',
              }}
              initial={{
                x: '150%',
              }}
            />
          </div>
        </div>
        <div className="mt-12 mb-2">
          <motion.button
            whileTap={{ scale: 0.98, y: 1 }}
            className="bg-primaryBlue pt-3 pb-3 pl-5 pr-5 rounded-md text-primary font-bold"
          >
            快速聯絡我們
          </motion.button>
          <div className="mt-2 mb-2 text-sm">
            想使用表單聯繫嗎?
            <span className="text-primaryBlue">
              <Link href="#"> 點擊此處 </Link>
            </span>
            幫你快速連結表單
          </div>
        </div>
        <div className="flex items-center mt-2  border-[1px] w-fit pt-2 pb-2 pl-5 pr-5">
          <div className="relative w-[12rem] h-[2.5rem]">
            <Image
              className="object-cover"
              fill
              alt="cover"
              src="/images/fraud_prevention.png"
              priority
              sizes="auto"
            />
          </div>
          <div className="w-[1px] h-10  mr-5 ml-5 bg-primaryGray" />
          <p className="text-xs text-gray-800">
            165防詐騙中心提醒您小心受騙
            <br />
            經過認證安心使用!!
          </p>
        </div>
      </div>
    </section>
  )
}

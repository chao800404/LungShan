import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const HomePageCover = () => {
  return (
    <section className="flex items-center justify-center snap-none">
      <div className="max-w-screen-xxl py-20 flex flex-col w-full mt-28 px-5 max-mmd:h-fit max-sm:mt-2">
        <div className="relative w-[60rem] h-[13.5rem] max-lg:w-full max-md:h-fit">
          <h1 className="flex h-full text-primaryBlack max-md:flex-col max-sm:items-center">
            <span className="block mt-auto">
              <span className="block text-[4.5rem] font-black self-end leading-[4.5rem] max-lg:text-[7.1vw] max-md:text-[15.2vw] max-sm:text-[3.2rem] max-sm:leading-[3rem] max-sm:text-center">
                最低每10萬元
              </span>
              <span className="block text-[2.5rem] font-bold max-lg:text-[4vw] max-md:text-[5vw] max-md:mt-10 max-sm:mt-2 max-sm:text-center">
                <span className="text-gray-500 max-sm:font-black max-sm:text-2xl">
                  無權狀可，
                </span>
                最快當天撥款
              </span>
            </span>

            <span className="block ml-3 mt-auto leading-[5.5rem] -tracking-[20px]	text-[17rem] font-[900] h-50 max-lg:text-[25vw] max-md:text-end max-md:mt-20 max-md:mr-8 max-md:text-[35vw] max-sm:text-[9rem] max-sm:mt-10 max-sm:flex max-sm:items-end max-sm:leading-[9rem] max-sm:mx-0 max-sm:m-auto">
              <span className="max-sm:block max-sm:h-fit  max-sm:text-start">
                478
              </span>
              <span className="text-[4.5rem] ml-5 max-sm:text-start max-sm:leading-[5rem]">
                元
              </span>
            </span>
          </h1>
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
        <div className="mt-12 mb-2 max-md:text-center max-md:mt-32 max-sm:mt-14">
          <motion.button
            whileTap={{ scale: 0.98, y: 1 }}
            className="bg-primaryBlue pt-3 pb-3 pl-5 pr-5 rounded-md text-primary font-bold max-md:text-xl max-sm:text-sm"
          >
            快速聯絡我們
          </motion.button>
          <div className="mt-2 mb-2 text-sm max-md:text-xl max-md:mt-5 max-sm:text-sm">
            想使用表單聯繫嗎?
            <span className="text-primaryBlue">
              <Link href="#"> 點擊此處 </Link>
            </span>
            幫你快速連結表單
          </div>
        </div>
        <div className="flex items-center mt-2  border-[1px] w-fit pt-2 pb-2 pl-5 pr-5 max-md:m-auto">
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
            <span className="underline font-black">165防詐騙中心</span>
            <br />
            提醒您小心受騙 經過認證安心使用!!
          </p>
        </div>
      </div>
    </section>
  )
}

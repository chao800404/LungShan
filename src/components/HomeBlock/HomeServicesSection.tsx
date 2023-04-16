import React, { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Swipper } from '@/components/swipper'
import Lottie from 'react-lottie-player'
import Link from 'next/link'
import * as jsonFile from '../../../public/lottieJson/loan_phone_an_4.json'
import { Button } from '../button'

export const HomeServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-50%',
  })

  return (
    <section className="overflow-hidden border-t">
      <div
        ref={ref}
        className="pt-20 pb-10 relative h-screen grid grid-cols-[20rem_1fr] gap-5 max-w-screen-xxl m-auto px-5 max-xl:grid-cols-[30rem_1fr] max-xl:h-[40rem] max-xl:pb-0 max-xl:border-b max-mmd:grid-cols-[1fr] max-mmd:h-fit"
      >
        <div className="self-center cols-start-1 col-span-1 relative z-30 max-xl:p-3 max-xl:self-start">
          <motion.h3
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50,
              transition: {
                type: 'just',
              },
            }}
            className="font-bold text-[2.5rem] mb-5 leading-[2.8rem] max-mmd:text-center max-mmd:text-[8vw] max-mmd:leading-[9vw] max-sm:text-2xl"
          >
            讓客戶的債務減輕是公司最主要的經營理念
          </motion.h3>
          <motion.p
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50,
              transition: {
                type: 'just',
                delay: 0.3,
              },
            }}
            className="mb-8 indent-8 leading-7 max-xl:text-xl max-mmd:mx-10 max-mmd:mt-10 max-sm:text-base max-sm:m-0"
          >
            提供客戶最有利最便捷的服務即舒適環境,建立一個最新貸款及理財資訊的整合平台,
            始終堅持一貫的合法正派經營理念,也給予企業及客戶一個安全感,
            我們的理財顧問們將站在顧客的立場,深入了解客戶的需求開發更專業的服務內容。
          </motion.p>

          <motion.div
            className="will-change-opacity max-mmd:text-center max-sm:mt-10"
            animate={{
              opacity: isInView ? 1 : 0,
              transition: {
                type: 'spring',
                delay: 0.5,
              },
            }}
          >
            <Button>
              <Link
                className="pr-4 pl-4 pt-2 pb-2 block max-xl:text-xl max-sm:text-sm"
                href="#"
              >
                查看更多詳情
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="relative justify-self-end w-full flex items-center justify-end max-xl:items-start max-xl:h-full max-mmd:h-[40rem] max-sm:h-[20rem]">
          <div className="relative max-w-4xl h-3/4 w-full">
            <div className="absolute -bottom-5 -left-20 z-20 rounded-md overflow-hidden w-[10rem] h-[10rem] shadow-md shadow-[rgba(0,0,0,0.2)] max-mmd:-top-20 max-mmd:left-auto max-mmd:right-8 max-mmd:shadow-md max-mmd:shadow-gray-800 max-mmd:w-[15rem] max-mmd:h-[15rem] max-md:w-[25vw] max-md:h-[25vw] max-sm:top-auto max-sm:right-auto max-sm:-left-[0.5rem] max-sm:w-32 max-sm:h-32 max-sm:shadow-[rgba(0,0,0,0.2)]">
              <Lottie
                animationData={jsonFile}
                goTo={isInView ? 0 : undefined}
                play={isInView}
                loop={false}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <Swipper
              images={[
                '/images/lungshan_loan_6.jpg',
                '/images/lungshan_loan_7.jpg',
                '/images/lungshan_loan_8.jpg',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

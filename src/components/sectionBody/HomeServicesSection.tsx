import React, { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Swipper } from '@/components/swipper'
import Lottie from 'react-lottie-player'
import Link from 'next/link'
import * as jsonFile from '../../../public/lottieJson/lona_phone_an_4.json'
import { Button } from '../button'

const data = [
  {
    id: 0,
    title: 'HomeServicesSection1',
    image: "/images/lungshan_lona_6.jpg'",
  },
  {
    id: 1,
    title: 'HomeServicesSection2',
    image: "/images/lungshan_lona_6.jpg'",
  },
  {
    id: 2,
    title: 'HomeServicesSection3',
    image: "/images/lungshan_lona_6.jpg'",
  },
]

export const HomeServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: '-50%',
  })

  return (
    <section className="overflow-hidden border-t">
      <div
        ref={ref}
        className="pl-40 pr-40 pt-20 pb-10 relative h-screen grid grid-cols-[20rem_1fr] gap-5"
      >
        <div className=" self-center cols-start-1 col-span-1 relative z-30">
          <motion.h3
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50,
              transition: {
                type: 'just',
              },
            }}
            className="font-bold text-[2.5rem] mb-5 leading-[2.8rem]"
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
            className="mb-8 indent-8 leading-7"
          >
            提供客戶最有利最便捷的服務即舒適環境,建立一個最新貸款及理財資訊的整合平台,
            始終堅持一貫的合法正派經營理念,也給予企業及客戶一個安全感,
            我們的理財顧問們將站在顧客的立場,深入了解客戶的需求開發更專業的服務內容。
          </motion.p>

          <motion.div
            className="will-change-opacity"
            animate={{
              opacity: isInView ? 1 : 0,
              transition: {
                type: 'spring',
                delay: 0.5,
              },
            }}
          >
            <Button>
              <Link className="pr-4 pl-4 pt-2 pb-2 block" href="#">
                查看更多詳情
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="relative justify-self-end w-full flex items-center justify-end">
          <div className="relative max-w-4xl h-3/4 w-full">
            <div className="absolute -bottom-5 -left-20 z-20 rounded-md overflow-hidden w-[10rem] h-[10rem] shadow-md shadow-[rgba(0,0,0,0.2)]">
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
                '/images/lungshan_lona_6.jpg',
                '/images/lungshan_lona_7.jpg',
                '/images/lungshan_lona_8.jpg',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

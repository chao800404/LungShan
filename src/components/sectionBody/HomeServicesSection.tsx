import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
  const [hoverIndex, setHoverIndex] = useState(0)
  const [end, setEnd] = useState(true)

  return (
    <section className="">
      <div className="pl-40 pr-40 pt-20 pb-20 relative h-screen grid grid-cols-[20rem_1fr] gap-5">
        <div className="self-center">
          <h3 className="font-bold text-[2.5rem] mb-5">
            讓客戶的債務減輕是公司最主要的經營理念
          </h3>
          <p>
            提供客戶最有利最便捷的服務即舒適環境,建立一個最新貸款及理財資訊的整合平台,
            始終堅持一貫的合法正派經營理念,也給予企業及客戶一個安全感,
            我們的理財顧問們將站在顧客的立場,深入了解客戶的需求開發更專業的服務內容。
          </p>
        </div>
        <div className="relative justify-self-end w-full flex items-center justify-end">
          <div className="relative max-w-4xl h-3/4 w-full">
            <Image
              alt="img"
              fill
              sizes="auto"
              src="/images/lungshan_lona_6.jpg"
              className="object-cover rounded-md border border-primaryGray"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

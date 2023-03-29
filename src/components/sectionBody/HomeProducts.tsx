import React from 'react'
import { motion } from 'framer-motion'
import { ScaleAndCoverImageBlock } from '@/components/imageBlock'
import { SwipperTextBlock } from '@/components/textBlock'
import { MediaAndImageBlock } from '@/components/specialBlock'
import Image from 'next/image'

const data = [
  {
    id: 0,
    percentage: '90%',
    description: '百分之九十的貸款成功率，有上萬件成功經驗，專業分析貸款',
    subTitle: '有百分之六十的貸款人為女性的成功案例',
  },
  {
    id: 1,
    percentage: '32%',
    description: '全台媒合百分之三十二的銀行品牌，快速審核過件',
    subTitle: '個人資料絕對保密跟保護，個資不外流',
  },
  {
    id: 2,
    percentage: '100%',
    description: '百分之百全台服務，不限地區皆可處理，前端絕不收任何名目費用',
    subTitle: ' 攏山代書絕對是合法公司，合理收費',
  },
  {
    id: 3,
    percentage: '3%',
    description: '有百分之三的人會再次遇到困進，攏山依舊提供最優服務',
    subTitle: '攏山代書會透明告知客戶的方案，滿意再對保',
  },
]

export const HomeProducts = () => {
  return (
    <motion.div className="overflow-hidden">
      <section className="pr-40 pl-40 pb-40">
        <div className="flex gap-10 mt-[8rem] mb-[8rem]">
          {data.map((item) => (
            <div key={item.id} className="text-primaryBlack">
              <h3 className="text-6xl font-black mb-6">{item.percentage}</h3>
              <p className="text-xl font-bold">{item.description}</p>
              <p className="text-xs mt-5">{item.subTitle}</p>
            </div>
          ))}
        </div>
        <h2 className="text-5xl font-black pt-20 pb-20">
          我們提供這些服務項目
        </h2>
        <div className="flex w-full h-[35rem] justify-center items-center">
          <div className="w-full h-[30rem]">
            <motion.div className="grid grid-flow-col grid-rows-1 h-full gap-2">
              <ScaleAndCoverImageBlock />
              <SwipperTextBlock
                title="房屋借款"
                description="不完整產權，未保存登記，無須冗長審核，快速方便，不看聯徵，不照會。"
                subTitle="攏山代書給您超低利率：比照銀行年息2%"
              />
              <MediaAndImageBlock
                imageUrl="/images/lungshan_lona_10.jpg"
                mediaUrl="/medias/lona_media_1.mp4"
              />
              <SwipperTextBlock
                title="汽車機車貸款"
                description="依本息平均攤還，輕鬆還款無負擔。最高可貸車價220%，滿足您的資金需求。"
                subTitle="有汽機車即可辦理，分期也可增貸"
                base={false}
              />

              <ScaleAndCoverImageBlock />
              <SwipperTextBlock
                title="房屋借款"
                description="不完整產權，未保存登記，無須冗長審核，快速方便，不看聯徵，不照會。"
                subTitle="攏山代書給您超低利率：比照銀行年息2%"
              />
              <ScaleAndCoverImageBlock />
              <SwipperTextBlock
                title="房屋借款"
                description="不完整產權，未保存登記，無須冗長審核，快速方便，不看聯徵，不照會。"
                subTitle="攏山代書給您超低利率：比照銀行年息2%"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

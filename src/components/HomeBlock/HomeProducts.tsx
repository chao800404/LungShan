import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ScaleAndCoverImageBlock } from '@/components/imageBlock'
import { SwipperTextBlock } from '@/components/textBlock'
import { MediaAndImageBlock } from '@/components/specialBlock'
import { Button } from '../button'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

register()

const data = [
  {
    id: 0,
    percentage: '90%',
    description: '百分之九十的貸款成功率，有上萬件成功經驗，專業分析貸款',
    subTitle: '有百分之六十的貸款人為女性的成功案例',
  },
  {
    id: 1,
    percentage: '72%',
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

const data_2 = [
  {
    id: 0,
    type: 'onlyImage',
    name: '房屋借款',
    contents: [
      {
        title: '無財力證明皆可辦理',
        description: '協助規劃高額度、優惠利率，房屋坪數、屋齡皆不限',
        imageUrl: '/images/lungshan_loan_9.jpg',
      },
      {
        title: '房屋借款',
        description:
          '不完整產權，未保存登記，無須冗長審核，快速方便，不看聯徵，不照會。',
        subtitle: '攏山代書給您超低利率：利率0.45％起，每萬元478元起',
      },
    ],
  },
  {
    id: 2,
    type: 'onlyImage',
    name: '土地借款',
    contents: [
      {
        title: '全地區土地收購',
        description:
          '桃園青埔房屋、青埔建地、青埔持分土地收購資金快速到位最快只要三天。',
        imageUrl: '/images/lungshan_loan_12.jpg',
      },
      {
        title: '土地借款',
        description: '借1億也可以，殯葬用地、原住民保護地、公共共有都能承做。',
        subtitle: '急件可當天撥款一小時內審核，無權狀可',
        titleColor: 'text-yellow-400',
        descriptionColor: 'text-yellow-100',
        backgroundColor: 'bg-yellow-900',
      },
    ],
  },

  {
    id: 5,
    type: 'onlyImage',
    name: '民間代書借款',
    contents: [
      {
        title: '一個月薪轉紀錄就可借',
        description: '貸款利率12%~30%不等，需視客戶條件而定。',
        imageUrl: '/images/lungshan_loan_15.jpg',
      },
      {
        title: '民間代書借款',
        description: '警示戶也可以做，本利攤還可代償降息，當天對保當天撥款。',
        subtitle: '依資金需求，單筆貸款最高30萬',
        titleColor: 'text-zinc-300',
        descriptionColor: 'text-zinc-100',
        backgroundColor: 'bg-zinc-700',
      },
    ],
  },
  {
    id: 4,
    type: 'onlyImage',
    name: '銀行信用貸款',
    contents: [
      {
        title: '工作滿三個月即可',
        description: '薪資轉帳滿三個月，20至80歲之自然人，最高300萬。',
        imageUrl: '/images/lungshan_loan_14.jpg',
      },
      {
        title: '銀行信用貸款',
        description: '薪轉滿三個月即可辦理，最高月收入22倍。',
        subtitle: '貸款利率12%~30%不等，需視客戶條件而定',
        titleColor: 'text-blue-200',
        descriptionColor: 'text-gray-100',
        backgroundColor: 'bg-gray-800',
      },
    ],
  },
  {
    id: 1,
    type: 'hasVideo',
    name: '汽車機車貸款',
    contents: [
      {
        imageUrl: '/images/lungshan_loan_10.jpg',
        mediaUrl: '/medias/loan_media_1.mp4',
      },
      {
        title: '汽車機車貸款',
        description:
          '依本息平均攤還，輕鬆還款無負擔。最高可貸車價220%，滿足您的資金需求。',
        subtitle: '有汽機車即可辦理，分期也可增貸',
        titleColor: 'text-orange-200',
        descriptionColor: 'text-orange-100',
        backgroundColor: 'bg-primaryBrown',
      },
    ],
  },
  {
    id: 3,
    type: 'hasVideo',
    name: '手機或精品貸款',
    contents: [
      {
        imageUrl: '/images/lungshan_loan_13.jpg',
        mediaUrl: '/medias/loan_media_2.mp4',
      },
      {
        title: '手機或精品貸款',
        description: '適合目前無擔保品的您，單筆最高15萬元，萬物皆可貸。',
        subtitle: '不論負債比過高、貸款遲繳、銀行協商等問題，都可以輕鬆貸款',
        titleColor: 'text-gray-800',
        descriptionColor: 'text-gray-500',
        backgroundColor: 'bg-gray-100',
      },
    ],
  },
]

type Content = {
  title: string
  description: string
  imageUrl?: string
  titleColor?: string
  descriptionColor?: string
  backgroundColor?: string
  mediaUrl?: string
  subtitle?: string
}

const ImageBlock = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="flex gap-2 h-[90%] w-[30.5rem] m-auto justify-center max-sm:flex-col max-sm:w-[16rem]">
      <ScaleAndCoverImageBlock
        title={contents[0]?.title}
        description={contents[0]?.description}
        imageUrl={contents[0].imageUrl || ''}
      />
      <SwipperTextBlock
        title={contents[1]?.title}
        description={contents[1]?.description}
        subTitle={contents[1]?.subtitle || ''}
        titleColor={contents[1]?.titleColor}
        descriptionColor={contents[1]?.descriptionColor}
        backgroundColor={contents[1]?.backgroundColor}
      />
    </div>
  )
}

const VideoBlock = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="flex gap-2 h-[90%] w-[30.5rem] m-auto justify-center max-sm:flex-col max-sm:w-[16rem]">
      <MediaAndImageBlock
        imageUrl={contents[0].imageUrl || ''}
        mediaUrl={contents[0].mediaUrl || ''}
      />
      <SwipperTextBlock
        title={contents[1]?.title}
        description={contents[1]?.description}
        subTitle={contents[1]?.subtitle || ''}
        titleColor={contents[1]?.titleColor}
        descriptionColor={contents[1]?.descriptionColor}
        backgroundColor={contents[1]?.backgroundColor}
      />
    </div>
  )
}

export const HomeProducts = () => {
  const swiperRef = useRef<SwiperCore>()
  const [activeIndex, setActiveIndex] = useState(0)

  const render = useCallback(() => {
    const result = data_2.map((item) =>
      item.type === 'onlyImage' ? (
        <SwiperSlide className="w-fit swiper-slide" key={item.id}>
          <ImageBlock contents={item.contents as Content[]} />
        </SwiperSlide>
      ) : (
        <SwiperSlide className="w-fit swiper-slide" key={item.id}>
          <VideoBlock contents={item.contents as Content[]} />
        </SwiperSlide>
      )
    )
    return result
  }, [])

  const handleSlideTo = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
      setActiveIndex(index)
    }
  }

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <motion.div className="overflow-hidden">
      <section className="pb-40 max-w-screen-xxl m-auto max-xl:pb-20 max-sm:pb-5">
        <div className="max-sm:overflow-auto hide_scrollbar max-sm:touch-x">
          <div className="flex gap-10 mt-[8rem] mb-[8rem] max-w-screen-xxl m-auto px-5 max-xl:mt-[3rem] max-xl:mb-[3rem] max-lg:flex-wrap max-lg:gap-5 max-sm:gap-3 max-sm:flex  max-sm:flex-nowrap max-sm:w-fit">
            {data.map((item) => (
              <div
                key={item.id}
                className="text-primaryBlack max-lg:w-[48.5%] max-lg:m-auto max-lg:border max-lg:rounded-lg max-lg:shadow-md max-lg:p-5 max-md:w-[47%] max-sm:w-[18rem]"
              >
                <h3 className="text-6xl font-black mb-6 max-xl:text-center max-xl:text-7xl max-xl:mb-10 max-md:text-5xl">
                  {item.percentage}
                </h3>
                <p className="text-xl font-medium max-xl:text-justify max-md:h-32 max-sm:text-base max-sm:h-14">
                  {item.description}
                </p>
                <p className="text-xs mt-5 max-xl:text-base max-xl:border-t max-xl:pt-5 max-lg:text-lg">
                  {item.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-5xl font-bold pt-20 pb-10 max-w-screen-xxl m-auto px-5 max-xl:text-7xl max-mmd:text-[8vw] max-mmd:text-center max-sm:text-[9vw] max-sm:px-0">
          我們提供這些服務項目
        </h2>
        <ul className="flex gap-2 max-w-screen-xxl m-auto px-5 max-mmd:flex-wrap max-mmd:justify-center max-sm:justify-start">
          {data_2.map((item, i) => (
            <li key={item.id}>
              <Button
                className={`shadow-none shadow-gray-50 border  ${
                  i !== activeIndex &&
                  'bg-white text-primaryBlack hover:bg-gray-100 border-slate-200 hover:border-slate-400  font-medium ease-out duration-300'
                } max-xl:text-xl max-sm:text-[0.9rem]`}
              >
                <span
                  onClick={() => handleSlideTo(i)}
                  className="block pt-2 pb-2 pr-4 pl-4"
                >
                  {item.name}
                </span>
              </Button>
            </li>
          ))}
        </ul>
        <motion.div className="flex w-[31rem] h-[35rem] ml-5 justify-center items-center mt-10 max-sm:mt-0 max-sm:w-[16.5rem]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={handleSlideChange}
            pagination={{ clickable: true, el: null }}
            navigation
          >
            {render()}
          </Swiper>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default HomeProducts

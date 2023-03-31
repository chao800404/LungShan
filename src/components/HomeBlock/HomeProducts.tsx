import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ScaleAndCoverImageBlock } from '@/components/imageBlock'
import { SwipperTextBlock } from '@/components/textBlock'
import { MediaAndImageBlock } from '@/components/specialBlock'
import { Button } from '../button'

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
        imageUrl: '/images/lungshan_lona_9.jpg',
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
    id: 1,
    type: 'hasVideo',
    name: '汽車機車貸款',
    contents: [
      {
        imageUrl: '/images/lungshan_lona_10.jpg',
        mediaUrl: '/medias/lona_media_1.mp4',
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
    id: 2,
    type: 'onlyImage',
    name: '土地借款',
    contents: [
      {
        title: '桃園建地全區收購',
        description:
          '桃園青埔房屋、青埔建地、青埔持分土地收購資金快速到位最快只要三天。',
        imageUrl: '/images/lungshan_lona_12.jpg',
      },
      {
        title: '土地借款',
        description: '借1億也可以，殯葬用地、原住民保護地、公共共有都能承做。',
        subtitle: '急件可當天撥款一小時內審核，無權狀可',
      },
    ],
  },
  {
    id: 3,
    type: 'hasVideo',
    name: '手機或精品貸款',
    contents: [
      {
        imageUrl: '/images/lungshan_lona_13.jpg',
        mediaUrl: '/medias/lona_media_2.mp4',
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
  {
    id: 4,
    type: 'onlyImage',
    name: '銀行信用貸款',
    contents: [
      {
        title: '工作滿三個月即可',
        description: '薪資轉帳滿三個月，20至80歲之自然人，最高300萬。',
        imageUrl: '/images/lungshan_lona_14.jpg',
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
    id: 5,
    type: 'onlyImage',
    name: '民間代書借款',
    contents: [
      {
        title: '一個月薪轉紀錄就可借',
        description: '貸款利率12%~30%不等，需視客戶條件而定。',
        imageUrl: '/images/lungshan_lona_15.jpg',
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

type BlockProps = {
  type: string
  contents: Content[]
}

const ImageBlock = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="flex gap-2">
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
    <div className="flex gap-2">
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

const BLOCK_WIDTH = 17.5 * 16

export const HomeProducts = () => {
  const [blockIndex, setBlockIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const x = useMemo(() => BLOCK_WIDTH * blockIndex, [blockIndex])

  const render = useCallback(() => {
    const result = data_2.map((item) =>
      item.type === 'onlyImage' ? (
        <ImageBlock key={item.id} contents={item.contents as Content[]} />
      ) : (
        <VideoBlock key={item.id} contents={item.contents as Content[]} />
      )
    )
    return result
  }, [])

  return (
    <motion.div className="overflow-hidden">
      <section className="pb-40">
        <div className="flex gap-10 mt-[8rem] mb-[8rem] pr-40 pl-40">
          {data.map((item) => (
            <div key={item.id} className="text-primaryBlack">
              <h3 className="text-6xl font-black mb-6">{item.percentage}</h3>
              <p className="text-xl font-bold">{item.description}</p>
              <p className="text-xs mt-5">{item.subTitle}</p>
            </div>
          ))}
        </div>
        <h2 className="text-5xl font-black pt-20 pb-10 pl-40 pr-40">
          我們提供這些服務項目
        </h2>
        <ul className="pr-40 pl-40 flex gap-2">
          {data_2.map((item, i) => (
            <li key={item.id}>
              <Button
                className={`shadow-none shadow-gray-50 border  ${
                  i * 2 !== Math.abs(blockIndex) &&
                  i * 2 + 1 !== Math.abs(blockIndex) &&
                  'bg-white text-primaryBlack hover:bg-gray-100 border-slate-200 hover:border-slate-400  font-black ease-out duration-300'
                } `}
              >
                <span
                  onClick={() => setBlockIndex(-(i * 2))}
                  className="block pt-2 pb-2 pr-4 pl-4"
                >
                  {item.name}
                </span>
              </Button>
            </li>
          ))}
        </ul>
        <motion.div className="flex w-full h-[38rem] justify-center items-center mt-10">
          <motion.div
            className="w-full cursor-grab h-[30rem] will-change-transform touch-none"
            dragConstraints={{ left: 0, right: 0 }}
            drag="x"
            dragElastic={1}
            animate={{ x, transition: { type: 'just' } }}
            onDragEnd={(e, { offset, velocity }) => {
              const { x } = offset
              const index = Math.round(x / BLOCK_WIDTH)

              setBlockIndex((prev) => {
                const newIndex = prev + index

                if (newIndex > 0) {
                  return 0
                } else {
                  return newIndex
                }
              })
            }}
          >
            <motion.div
              ref={ref}
              className="grid grid-flow-col grid-rows-1 h-full gap-2 pl-40 pr-40"
            >
              {render()}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

{
  /* <div className="flex gap-2">
                <ScaleAndCoverImageBlock
                  title="無財力證明皆可辦理"
                  description="協助規劃高額度、優惠利率，房屋坪數、屋齡皆不限"
                  imageUrl="/images/lungshan_lona_9.jpg"
                />
                <SwipperTextBlock
                  title="房屋借款"
                  description="不完整產權，未保存登記，無須冗長審核，快速方便，不看聯徵，不照會。"
                  subTitle="攏山代書給您超低利率：利率0.45％起，每萬元478元起"
                />
              </div>
              <div className="flex gap-2">
                <MediaAndImageBlock
                  imageUrl="/images/lungshan_lona_10.jpg"
                  mediaUrl="/medias/lona_media_1.mp4"
                />
                <SwipperTextBlock
                  title="汽車機車貸款"
                  description="依本息平均攤還，輕鬆還款無負擔。最高可貸車價220%，滿足您的資金需求。"
                  subTitle="有汽機車即可辦理，分期也可增貸"
                  titleColor="text-orange-200"
                  descriptionColor="text-orange-100"
                  backgroundColor="bg-primaryBrown"
                />
              </div>
              <div className="flex gap-2">
                <ScaleAndCoverImageBlock
                  title="桃園建地全區收購"
                  description="桃園青埔房屋、青埔建地、青埔持分土地收購資金快速到位最快只要三天"
                  imageUrl="/images/lungshan_lona_12.jpg"
                />
                <SwipperTextBlock
                  title="土地借款"
                  description="借1億也可以，殯葬用地、原住民保護地、公共共有都能承做。"
                  subTitle="急件可當天撥款一小時內審核，無權狀可"
                />
              </div>
              <div className="flex gap-2">
                <MediaAndImageBlock
                  imageUrl="/images/lungshan_lona_13.jpg"
                  mediaUrl="/medias/lona_media_2.mp4"
                />
                <SwipperTextBlock
                  title="手機或精品貸款"
                  description="適合目前無擔保品的您，單筆最高15萬元，萬物皆可貸。"
                  subTitle="不論負債比過高、貸款遲繳、銀行協商等問題，都可以輕鬆貸款"
                  titleColor="text-gray-800"
                  descriptionColor="text-gray-500"
                  backgroundColor="bg-gray-100"
                />
              </div>
              <div className="flex gap-2">
                <ScaleAndCoverImageBlock
                  title="工作滿三個月即可"
                  description="薪資轉帳滿三個月，20至80歲之自然人，最高300萬"
                  imageUrl="/images/lungshan_lona_14.jpg"
                />
                <SwipperTextBlock
                  title="銀行信用貸款"
                  description="薪轉滿三個月即可辦理，最高月收入22倍。"
                  subTitle="精準媒合30家銀行，12年經驗不浪費聯徵，僅此次貸款使用。"
                  titleColor="text-blue-200"
                  descriptionColor="text-gray-100"
                  backgroundColor="bg-gray-800"
                />
              </div>
              <div className="flex gap-2">
                <ScaleAndCoverImageBlock
                  title="一個月薪轉紀錄就可借"
                  description="貸款利率12%~30%不等，需視客戶條件而定"
                  imageUrl="/images/lungshan_lona_15.jpg"
                />
                <SwipperTextBlock
                  title="民間代書借款"
                  description="警示戶也可以做，本利攤還可代償降息，當天對保當天撥款。"
                  subTitle="依資金需求，單筆貸款最高30萬"
                  titleColor="text-zinc-300"
                  descriptionColor="text-zinc-100"
                  backgroundColor="bg-zinc-700"
                />
              </div> */
}
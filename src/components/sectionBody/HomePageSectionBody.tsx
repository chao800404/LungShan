import React, { useCallback, useRef } from 'react'
import Image from 'next/image'
import LUNGSHAN_FEATURES from '@/data/lungshan_features.json'
import LUNGSHAN_PROCESO from '@/data/lungshan_proceso.json'
import LUNGSHAN_BANK_LOGO from '@/data/bank_logo_content.json'
import { TableProps, ImageContent } from './type'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ImageContent = ({ url }: { url: string }) => {
  return (
    <div className="h-[25rem] relative">
      <Image
        fill
        className="object-cover rounded-xl overflow-hidden border-[1px] border-gray-400"
        sizes="auto"
        alt="隴山特色"
        src={url}
      />
    </div>
  )
}

const ImageTableContent: React.FC<TableProps> = ({ title, contents }) => {
  return (
    <>
      <h2 className="text-4xl font-extrabold">{title}</h2>
      <ul className="flex gap-2 text-[0.8rem] pt-4 pb-4 font-bold">
        {contents.map((item, i) => (
          <li
            key={i}
            className="border-primary text-primary pt-1 pb-1 pr-2 pl-2 border  rounded-md shadow-xl"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="border-[1px] w-fit">
        {contents.map((item, i) => (
          <div className={`flex items-center`} key={i}>
            <div
              className={`p-2 w-[10rem] border-r-[1px] font-bold flex items-center bg-primary text-primaryBlack ${
                i < contents.length - 1 &&
                'border-b-[1px] border-b-primaryBlack'
              }`}
            >
              <span> {item.title}</span>
            </div>
            <div
              className={`pt-2 w-full pb-2 pr-5 pl-5 ${
                i < contents.length - 1 && 'border-b-[1px] border-b-primary'
              }`}
            >
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const LogoAnWrapper = ({ list }: { list: ImageContent[]; index?: number }) => {
  return (
    <>
      {list?.map((c, index) => {
        const init = index % 2 !== 1 ? 2 : 1

        return (
          <motion.div
            key={c.id}
            layout
            className={`bank_cover-image relative  col-span-1 col-start-${
              index + 1
            } h-[3rem] will-change-transform`}
            animate={{
              y: [0, -80, -80, -80, -80, -160, -160, -160],
              transition: {
                repeat: Infinity,
                duration: 5,
                delay: 4 * init,
              },
            }}
          >
            <Image
              src={c.url}
              fill
              className="object-cover"
              alt={c.title}
              sizes="auto"
            />
          </motion.div>
        )
      })}
    </>
  )
}

const BankLogoContent = ({ list }: { list: ImageContent[] }) => {
  const imageTotal = Math.ceil(list.length / 6)
  const splitImageGroup = React.useMemo(() => {
    const images = list
    const filling = Array(imageTotal).fill(1)
    return filling.map((_, i) => images.slice(6 * i, 6 * (i + 1)))
  }, [imageTotal])

  return (
    <>
      <h3 className="text-5xl font-bold text-center p-[5rem]">合作相關銀行</h3>
      <div className="overflow-hidden h-[5rem]">
        <div className="grid grid-cols-[repeat(6,_1fr)] gap-10">
          {splitImageGroup?.map((list, i) => (
            <LogoAnWrapper key={i} list={list} />
          ))}
          {splitImageGroup?.map((list, i) => (
            <LogoAnWrapper key={i} list={list} />
          ))}
        </div>
      </div>
    </>
  )
}

export const HomePageSectionBody = () => {
  const ref = useRef<HTMLSelectElement>(null)
  const firstBlockRef = useRef<HTMLDivElement>(null)
  const secondBlockRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-30%' })
  const firstBlockIsInView = useInView(firstBlockRef)
  const secondBlockIsInView = useInView(secondBlockRef)

  return (
    <motion.section ref={ref} className="text-primary relative z-20">
      <motion.div className="top-[5rem] grid gird grid-cols-[minmax(1rem,_10rem)_1fr_1fr_minmax(1rem,_10rem)] grid-rows-[5rem_12rem_repeat(2,_1.2fr)_1fr_5rem] bg-[rgba(31,31,31,0.98)] rounded-lg">
        <motion.div className="col-start-1 col-span-5 row-start-2 row-span-1 justify-self-center">
          <motion.h2
            animate={{
              y: isInView ? 0 : 50,
              opacity: isInView ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-5xl font-black text-center will-change-transform"
          >
            選擇攏山優勢
          </motion.h2>
          <motion.p
            animate={{
              y: isInView ? 0 : 50,
              opacity: isInView ? 1 : 0,
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className="pt-6 will-change-transform"
          >
            <span className="bg-primary text-primaryBlack pl-3 pr-3 pt-1 pb-1 shadow-lg">
              優質服務、透明流程、 絕對保密、快速支付
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          ref={firstBlockRef}
          animate={{
            x: firstBlockIsInView ? 0 : 100,
            opacity: firstBlockIsInView ? 1 : 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="col-start-2 col-span-1 row-start-3 row-span-1 relative"
        >
          <ImageContent url="/images/lungshan_lona_1.jpeg" />
        </motion.div>
        <motion.div
          animate={{
            opacity: firstBlockIsInView ? 1 : 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="col-start-3 col-span-1 row-start-3 row-span-1 self-center justify-self-start ml-10 flex flex-col items-start"
        >
          <ImageTableContent
            title={LUNGSHAN_FEATURES.title}
            contents={LUNGSHAN_FEATURES.contents}
          />
        </motion.div>
        <motion.div
          animate={{
            opacity: secondBlockIsInView ? 1 : 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="col-start-2 col-span-1 row-start-4 row-span-1 self-center justify-self-end mr-10 flex flex-col items-end"
        >
          <ImageTableContent
            title={LUNGSHAN_PROCESO.title}
            contents={LUNGSHAN_PROCESO.contents}
          />
        </motion.div>
        <motion.div
          ref={secondBlockRef}
          animate={{
            x: secondBlockIsInView ? 0 : -100,
            opacity: secondBlockIsInView ? 1 : 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="col-start-3 col-span-1 row-start-4 row-span-1"
        >
          <ImageContent url="/images/lungshan_lona_2.jpg" />
        </motion.div>
        <div className="col-start-1 col-span-4 row-start-5 row-span-1 text-primary self-center justify-self-center pl-40 pr-40 w-full">
          <BankLogoContent list={LUNGSHAN_BANK_LOGO} />
        </div>
      </motion.div>
    </motion.section>
  )
}

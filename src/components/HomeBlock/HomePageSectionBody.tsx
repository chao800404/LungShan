import React, { useRef } from 'react'
import Image from 'next/image'
import LUNGSHAN_FEATURES from '@/data/lungshan_features.json'
import LUNGSHAN_PROCESO from '@/data/lungshan_proceso.json'
import LUNGSHAN_BANK_LOGO from '@/data/bank_logo_content.json'
import { TableProps, ImageContent } from './type'
import { motion, useInView } from 'framer-motion'
import * as uuid from 'uuid'

const ImageContent = ({ url }: { url: string }) => {
  return (
    <div className="h-[25rem] relative max-sm:h-[10rem]">
      <Image
        fill
        className="object-cover rounded-xl overflow-hidden border-[1px] border-gray-400 max-sm:rounded-sm max-sm:border-0"
        sizes="auto"
        alt="隴山特色"
        src={url}
        priority
        draggable={false}
      />
    </div>
  )
}

const ImageTableContent: React.FC<TableProps> = ({
  title,
  contents,
  left = false,
}) => {
  return (
    <>
      <h2 className="text-4xl font-medium max-lg:text-5xl max-sm:text-3xl max-sm:m-auto">
        {title}
      </h2>
      <ul
        className={`flex gap-2 text-[0.8rem] pt-4 pb-4 font-bold max-xl:text-lg max-xl:flex-wrap max-xl:w-full max-sm:text-[0.95rem] ${
          left && 'justify-end'
        } max-sm:justify-center`}
      >
        {contents.map((item, i) => (
          <li
            key={i}
            className="border-primary text-primary pt-1 pb-1 pr-2 pl-2 border rounded-md shadow-xl font-thin"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="border-[1px] w-fit max-xl:w-full max-lg:flex max-lg:flex-wrap max-lg:text-lg max-sm:text-[0.95rem]">
        {contents.map((item, i) => (
          <div
            className="flex items-center max-lg:w-1/2 max-mmd:w-full"
            key={i}
          >
            <div
              className={`pt-2 pb-2 pr-4 pl-4 w-fit whitespace-nowrap border-r-[1px] font-medium flex items-center bg-primary text-primaryBlack ${
                i < contents.length - 1 &&
                'border-b-[1px] border-b-primaryBlack max-lg:h-full'
              } `}
            >
              <p> {item.title}</p>
            </div>
            <div
              className={`pt-2 w-full pb-2 pr-5 pl-5 ${
                i < contents.length - 1 && 'border-b-[1px] border-b-primary'
              } max-sm:text-sm`}
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
            className={`bank_cover-image relative col-span-1 col-start-${
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
              priority
              draggable={false}
            />
          </motion.div>
        )
      })}
    </>
  )
}

const BankLogoContent_2 = ({ list }: { list: ImageContent[] }) => {
  return (
    <motion.div
      animate={{ x: '-100%' }}
      initial={{ x: 0 }}
      transition={{ repeat: Infinity, duration: 10, ease: [0, 0, 0, 0] }}
      className="flex gap-3 w-fit"
    >
      {list.map((item, i) => (
        <div className="relative h-15 w-32" key={uuid.v4()}>
          <Image
            key={item.id}
            src={item.url}
            alt={item.title}
            width={150}
            height={50}
            className="grayscale object-cover"
          />
        </div>
      ))}
    </motion.div>
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
      <h3 className="text-5xl font-bold text-center p-[5rem] max-sm:text-3xl max-sm:p-0 max-sm:mt-5">
        合作相關銀行
      </h3>
      <div className="overflow-hidden h-[5rem] max-lg:h-fit">
        <div className="grid grid-cols-[repeat(6,_1fr)] gap-10 max-lg:hidden">
          {splitImageGroup?.map((list, i) => (
            <LogoAnWrapper key={i} list={list} />
          ))}
          {splitImageGroup?.map((list, i) => (
            <LogoAnWrapper key={i} list={list} />
          ))}
        </div>
        <div className="hidden max-lg:flex max-lg:flex-nowrap items-center max-lg:w-full max-sm:mt-6">
          <BankLogoContent_2 list={list} />
          <BankLogoContent_2 list={list} />
        </div>
      </div>
    </>
  )
}

export const HomePageSectionBody = () => {
  const ref = useRef<HTMLDivElement>(null)
  const firstBlockRef = useRef<HTMLDivElement>(null)
  const secondBlockRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-30%' })
  const firstBlockIsInView = useInView(firstBlockRef)
  const secondBlockIsInView = useInView(secondBlockRef)

  return (
    <motion.div
      ref={ref}
      className="text-primary relative z-20 overflow-hidden"
    >
      <motion.div className="top-[5rem] grid gird grid-cols-[minmax(1rem,_10rem)_1fr_1fr_minmax(1rem,_10rem)] grid-rows-[5rem_12rem_repeat(2,_1.2fr)_1fr_5rem] bg-[rgba(31,31,31,0.98)] rounded-lg max-xxl:grid-cols-[1.4rem_1fr_1fr_1.4rem] max-xl:gap-3 max-lg:flex max-lg:flex-col max-lg:px-5 max-lg:py-10 max-lg:gap-10 max-sm:rounded-none max-sm:gap-5">
        <motion.div className="col-start-1 col-span-5 row-start-2 row-span-1 justify-self-center">
          <motion.h2
            animate={{
              y: isInView ? 0 : 50,
              opacity: isInView ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-5xl font-bold text-center will-change-transform max-sm:text-3xl"
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
            className="pt-6 will-change-transform max-lg:my-5 max-lg:text-center max-sm:pt-2"
          >
            <span className="bg-primary text-primaryBlack pl-3 pr-3 pt-1 pb-1 shadow-lg ">
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
          className="col-start-2 col-span-1 row-start-3 row-span-1 relative max-lg:order-1"
        >
          <ImageContent url="/images/lungshan_loan_1.jpeg" />
        </motion.div>
        <motion.div
          animate={{
            opacity: firstBlockIsInView ? 1 : 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="col-start-3 col-span-1 row-start-3 row-span-1 self-center justify-self-start ml-10 flex flex-col items-start max-xl:ml-0 max-lg:w-full max-lg:order-2"
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
          className="col-start-2 col-span-1 row-start-4 row-span-1 self-center justify-self-end mr-10 flex flex-col items-end max-xl:mr-0 max-lg:w-full max-lg:order-4"
        >
          <ImageTableContent
            title={LUNGSHAN_PROCESO.title}
            contents={LUNGSHAN_PROCESO.contents}
            left={true}
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
          className="col-start-3 col-span-1 row-start-4 row-span-1 max-lg:order-3"
        >
          <ImageContent url="/images/lungshan_loan_2.jpg" />
        </motion.div>
        <div className="col-start-1 col-span-4 row-start-5 row-span-1 text-primary self-center justify-self-center max-w-screen-xxl px-5 w-full max-lg:order-6 max-lg:px-0">
          <BankLogoContent list={LUNGSHAN_BANK_LOGO} />
        </div>
      </motion.div>
    </motion.div>
  )
}

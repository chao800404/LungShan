import Head from 'next/head'
import { Layout } from '@/components/layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SERVICE_OFFERINGS_DATA from '@/data/service_offerings.json'
import Image from 'next/image'
import { LoopSwiper, Swipper } from '@/components/swipper'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import { motion } from 'framer-motion'
import LOAN_BOOK_AN from '../../../public/lottieJson/loan_book_an.json'
import Lottie from 'react-lottie-player'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { ProductBlock } from '@/components/productBlock'
import PRODUCT_DATA from '@/data/product.json'
import { useProductCardStore } from '@/store'
import { ServiceGrouproupBlock, LinkBlock } from '@/components/servicesBlock'
import * as uuid from 'uuid'

export default function Product() {
  const router = useRouter()
  const [show, setShow] = useState(false)

  const data = SERVICE_OFFERINGS_DATA.filter(
    (item) => item.slug === router.asPath
  )?.[0]

  useEffect(() => {
    const setShowShow = useProductCardStore.getState().setShouldShow
    setShowShow(true)

    const timeout = setTimeout(() => setShow(true), 1000)

    return () => {
      setShowShow(false)
      clearTimeout(timeout)
    }
  }, [])

  if (!data) return null

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-primary max-w-screen-2xl relative mr-auto ml-auto shadow-body min-h-screen flex items-center flex-col max-md:shadow-none">
        <Layout>
          <div className="h-12 mt-1 max-sm:h-5" />
          <div className="hidden fixed  max-md:flex h-12 top-0 bg-white text-2xl border-b z-50 w-full">
            <MdOutlineArrowBackIosNew
              onClick={() => router.back()}
              className="my-auto w-12 border-r p-3 h-full"
            />
          </div>

          <LoopSwiper
            one={`${data.subtitle} ${data.description}`}
            two={`${data.subtitle} ${data.description}`}
            show={show}
          />

          <section className="min-h-screen mx-10 max-lg:mx-0 max-lg:px-5 max-md:min-h-0 max-sm:sticky max-sm:-top-20 max-sm:z-0">
            <div className="px-10 py-5">
              <h1 className="text-7xl m-auto text-center font-bold max-md:text-5xl max-sm:text-3xl">
                {data.title}
              </h1>
            </div>
            <div className="m-auto w-full flex justify-center gap-2 mb-5 max-w-4xl">
              <div className="text-gray-400 font-mono flex items-center flex-wrap justify-center max-sm:text-sm">
                {data.feature.map((item, i) => (
                  <div key={uuid.v4()}>
                    <span>{item} </span>
                    {data.feature.length - 1 !== i && (
                      <span className="px-2 max-sm:px-1">/</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {data.linkGroup ? (
              <LinkBlock groupLink={data.linkGroup} caseLink={data.casePath} />
            ) : (
              <></>
            )}
            <div className="relative h-[80vh] rounded-xl overflow-hidden max-xl:h-[60vh]">
              <Image
                src={data.imgUrl}
                className="object-cover"
                fill
                alt={data?.title}
                draggable={false}
                priority
              />
            </div>
          </section>
          {data.content_1 && (
            <section className="-mt-10 mx-10 max-lg:px-5 max-lg:mx-0 max-md:mt-10  max-sm:z-10 max-sm:bg-[rgba(255,255,255,0.8)] max-sm:backdrop-blur">
              <div className="px-12 pt-24 pb-12 max-xl:pt-5 max-lg:px-0 max-lg:pt-0 max-sm:pt-5">
                <h3 className="text-3xl font-medium mb-12 text-center">
                  {data?.content_1?.title}
                </h3>
                <ul className="grid grid-cols-[repeat(4,_1fr)] border-x border-t max-md:grid-cols-[repeat(2,_1fr)]  max-sm:grid-cols-[100%]">
                  {data?.content_1?.list?.map((item, i) => (
                    <li
                      className={`${(i + 1) % 4 !== 0 && 'border-r'} border-b`}
                      key={uuid.v4()}
                    >
                      <div>
                        <h5 className="py-2 text-lg font-medium px-5 border-b">
                          {item.title}
                        </h5>
                        <p className="py-2 px-5 font-mono">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          <section className="relative max-w-[78vw] m-auto h-[20rem] overflow-hidden max-lg:max-w-full z-20">
            <h2 className="absolute text-base top-2 z-20 bg-[rgba(0,0,0,0.3)] text-[rgba(255,255,255,0.8)]  left-2 py-2 px-3 rounded-md">
              公司環境
            </h2>
            <Swipper
              images={[
                '/images/lungshan_loan_6.jpg',
                '/images/lungshan_loan_7.jpg',
                '/images/lungshan_loan_8.jpg',
              ]}
            />
          </section>
          {data.content_2 && (
            <section className="-mt-10 mx-10 max-lg:mx-0 max-lg:p-5 relative z-20 bg-white max-sm:mt-0 ">
              <div className="px-12 pt-24 pb-12 max-lg:px-0 max-sm:pt-12">
                <h3 className="text-3xl font-medium mb-12 text-center">
                  {data?.content_2?.title}
                </h3>
                {data.content_2.description && (
                  <div className="border rounded p-10 mb-5 flex max-w-5xl m-auto max-md:flex-col max-md:p-5">
                    <div className="w-1/5 relative max-md:w-full max-md:h-32">
                      <Lottie
                        animationData={LOAN_BOOK_AN}
                        loop={true}
                        play
                        className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-72"
                      />
                    </div>
                    <p className="flex-1 ml-5 max-md:ml-0">
                      {data.content_2.description}
                    </p>
                  </div>
                )}

                <ul className="grid grid-cols-[repeat(3,_1fr)] gap-5 max-md:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[100%] ">
                  {data.content_2.list.map((item, index) => (
                    <li className="border p-5" key={uuid.v4()}>
                      <h5 className="py-2 text-lg font-medium border-b mb-3">
                        <span className="text-gray-500 mr-2">{`${
                          index + 1
                        }.`}</span>

                        <span>{item.title}</span>
                      </h5>
                      <p className="indent-8">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="-mt-10 mx-10 max-lg:mx-0 max-lg:px-5 relative z-20 bg-white max-sm:px-0">
            <div className="px-12 flex gap-5 pt-24 pb-12 max-lg:px-0 max-md:flex-col max-sm:pt-5">
              {data.content_3 && (
                <div className="bg-gray-50 flex-1 rounded-md overflow-hidden border max-sm:border-none max-sm:rounded-none">
                  <h3 className="text-primaryBlack bg-slate-100 text-2xl border-b px-5 py-3 flex items-center gap-3 max-sm:text-base max-sm:font-medium">
                    <span className="text-xl">
                      <TfiWrite />
                    </span>
                    <span> {data.content_3.title}</span>
                  </h3>
                  <ul className="px-5 py-10 flex flex-col items-center">
                    {data.content_3.list.map((item, index) => (
                      <motion.li
                        key={uuid.v4()}
                        className="flex flex-col items-center w-full"
                      >
                        <motion.div
                          whileInView={{ scale: 1.05 }}
                          initial={{ scale: 1 }}
                          className="w-[90%]"
                          viewport={{ margin: '-40%', amount: 'some' }}
                        >
                          <div className="rounded-md w-full border overflow-hidden drop-shadow-md text-center">
                            <h3 className="bg-gray-100 text-base py-2">
                              {item.title}
                            </h3>
                            <p className="bg-white p-2">{item.description}</p>
                          </div>
                        </motion.div>
                        {index !== data.content_3.list.length - 1 && (
                          <motion.div className="text-2xl text-gray-300 py-5">
                            <BsFillArrowDownSquareFill />
                          </motion.div>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              {data.content_4 && (
                <ServiceGrouproupBlock list={data.content_4} />
              )}
              {data.compare_table && (
                <div className="flex-1 rounded-md border p-5 h-fit shadow sticky top-24 max-sm:border-none max-sm:rounded-none">
                  <h3 className="text-3xl font-bold py-3">
                    <span>產業服務比較</span>
                  </h3>
                  {data.compare_table.header && (
                    <div className="grid grid-cols-[repeat(3,_1fr)] w-full">
                      <div className="grid grid-cols-[inherit] col-span-3 bg-slate-300 px-5 py-3 border-b-2 border-white">
                        <h3 className="font-medium">
                          {data.compare_table.header[0].comp_1}
                        </h3>
                        <h3 className="font-medium">
                          {data.compare_table.header[0].name}
                        </h3>
                        <h3 className="font-medium">
                          {data.compare_table.header[0].comp_2}
                        </h3>
                      </div>
                      {data.compare_table.body.map((item) => (
                        <div
                          className="grid grid-cols-[inherit] col-span-3 bg-slate-100  border-b-2 border-white text-base text-gray-500 max-sm:border-none"
                          key={uuid.v4()}
                        >
                          <div className="px-5 py-3">{item.comp_1}</div>
                          <div className="bg-slate-200 h-full px-5 py-3">
                            {item.name}
                          </div>
                          <div className="px-5 py-3">{item.comp_2}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
          <ProductBlock data={PRODUCT_DATA} />
        </Layout>
      </main>
    </>
  )
}

import React, { useCallback, useState } from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { TabContainer } from '@/components/tabPanel'
import QUESTION_AND_ANSWER from '@/data/question_and_answer.json'
import * as jsonFile from '../../public/lottieJson/loan_qAndA_an_1.json'
import Lottie from 'react-lottie-player'
import { QAndABlockFigure } from '@/components/qAndABlock'
import { motion } from 'framer-motion'
import { Button } from '@/components/button'
import Link from 'next/link'
import { useGa } from '@/utils'

export default function QuestionAndAnswerPage() {
  const [curLabelIndex, setCurLabelIndex] = useState(0)

  const updateLabelIndex = useCallback((index: number) => {
    setCurLabelIndex(index)
  }, [])

  const content = QUESTION_AND_ANSWER.filter((_, i) => i === curLabelIndex)

  const { handleClickPhoneButton } = useGa()

  return (
    <>
      <Head>
        <title>攏山借貸相關問題</title>
        <meta name="description" content="攏山借貸相關問題" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <section className="min-h-screen">
            <div className="max-w-screen-xxl m-auto text-black pt-48 pb-40 flex gap-5 max-xxl:flex max-xxl:pt-28 max-xxl:gap-0 max-xxl:pb-10 max-md:flex-col">
              <motion.div className="hidden max-md:block sticky top-0 z-10 bg-white border-b shadow-md pb-5">
                <h2 className="p-5 text-base font-mono">
                  <span className="text-2xl block font-bold mb-2">
                    {content[0].title}
                  </span>

                  <span className="font-mono block ">適合客戶：</span>
                  <span className="text-xs font-medium">
                    {content[0].description}
                  </span>
                </h2>
                <motion.div className="ml-5">
                  <Button className="px-3 py-2 text-xs border-none shadow-none rounded-sm">
                    <a href="tel:0800-777-992" onClick={handleClickPhoneButton}>
                      快速聯絡我們
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                className="sticky top-48 h-[42rem] flex-1 border overflow-hidden rounded-md shadow-md group max-xxl:top-14 max-xxl:h-[calc(100vh-1rem)] max-xxl:border-none max-xxl:rounded-none max-xxl:shadow-none max-xxl:border-b-2 max-sm:-z-10"
              >
                <div className="max-xxl:h-full h-full max-md:h-[25rem]">
                  <QAndABlockFigure
                    imgUrl={content[0].imgUrl}
                    description={content[0].description}
                  />
                </div>
                <Lottie
                  animationData={jsonFile}
                  loop={true}
                  play
                  className="w-[22rem] h-[22rem] absolute z-20 -left-16 -bottom-20 "
                />
                <div className="absolute w-full h-full top-0 left-0 ease-in-out duration-300 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.3)]">
                  <button className="px-5 py-3 mt-16 text-primary border bg-gray-800 opacity-40 rounded-md group-hover:bg-[rgba(0,0,0,0.5)] group-hover:opacity-100">
                    <Link href={content[0].casePath}>查看更多案例</Link>
                  </button>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -50, opacity: 0 }}
                className="w-[45rem] min-h-[45rem] bg-gray-50 max-xxl:w-[50vw] max-xxl:mt-2.5 max-xxl:border-b max-xxl:border-l max-md:w-screen z-10 max-md:relative"
              >
                <TabContainer
                  updateLabelIndex={updateLabelIndex}
                  list={QUESTION_AND_ANSWER}
                  labelIndex={curLabelIndex}
                />
              </motion.div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}

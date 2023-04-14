import React, { useCallback, useState } from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { TabContainer } from '@/components/tabPanel'
import QUESTION_AND_ANSWER from '@/data/question_and_answer.json'
import * as jsonFile from '../../public/lottieJson/loan_qAndA_an_1.json'
import Lottie from 'react-lottie-player'
import { QAndABlockFigure } from '@/components/qAndABlock'
import { motion } from 'framer-motion'

export default function QuestionAndAnswerPage() {
  const [curLabelIndex, setCurLabelIndex] = useState(0)

  const updateLabelIndex = useCallback((index: number) => {
    setCurLabelIndex(index)
  }, [])

  const content = QUESTION_AND_ANSWER.filter((_, i) => i === curLabelIndex)

  return (
    <>
      <Head>
        <title>攏山借貸相關問題</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen">
        <Layout>
          <section className="min-h-screen">
            <div className="px-40 text-black pt-48 pb-40 flex gap-5">
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                className="sticky top-48 h-[42rem] flex-1 border overflow-hidden rounded-md shadow-md group"
              >
                <QAndABlockFigure
                  imgUrl={content[0].imgUrl}
                  description={content[0].description}
                />
                <Lottie
                  animationData={jsonFile}
                  loop={true}
                  play
                  className="w-[22rem] h-[22rem] absolute z-20 -left-16 -bottom-20"
                />
                <div className="absolute w-full h-full top-0 left-0 ease-in-out duration-300 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.3)]">
                  <button className="px-5 py-3 mt-16 text-primary border bg-gray-800 opacity-40 rounded-md group-hover:bg-[rgba(0,0,0,0.5)] group-hover:opacity-100">
                    查看更多案例
                  </button>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -50, opacity: 0 }}
                className="w-[45rem] min-h-[45rem] bg-gray-50"
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
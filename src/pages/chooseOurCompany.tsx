import React, { useCallback, useState } from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { TabContainer } from '@/components/tabPanel'
import QUESTION_AND_ANSWER from '@/data/question_and_answer.json'
import * as jsonFile from '../../public/lottieJson/loan_qAndA_an_1.json'
import Lottie from 'react-lottie-player'
import { QAndABlockFigure } from '@/components/qAndABlock'
import { motion } from 'framer-motion'

export default function ChooseOurCompany() {
  return (
    <>
      <Head>
        <title>選擇攏山理由</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen">
        <Layout>
          <section className="min-h-screen">
            <div className="px-40 py-40">
              
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}
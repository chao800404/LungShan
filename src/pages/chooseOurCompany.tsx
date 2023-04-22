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
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <section className="min-h-screen">
            <div className="px-40 py-40"></div>
          </section>
        </Layout>
      </main>
    </>
  )
}

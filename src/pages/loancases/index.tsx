import React from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { LoanCasesBody, LoanCasesCover } from '@/components/loancasesBlock'
import LOAN_CASES_DATA from '@/data/loan_cases.json'

export default function LoancasesPage() {
  return (
    <>
      <Head>
        <title>攏山借貸案例</title>
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.lungshan.tw/loancases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <motion.section className="overflow-hidden text-primary mb-20 max-lg:mb-0 max-sm:sticky max-sm:top-0 max-sm:z-0">
            <LoanCasesCover list={LOAN_CASES_DATA} />
          </motion.section>
          <section className="max-sm:relative z-10">
            <LoanCasesBody
              list={LOAN_CASES_DATA}
              length={LOAN_CASES_DATA.length}
              className="max-w-screen-xxl m-auto pt-20 pb-20 grid-cols-[repeat(3,minmax(0,_1fr))] bg-[rgba(255,255,255,0.8)] backdrop-blur px-5 max-lg:grid-cols-[repeat(2,minmax(0,_1fr))] max-sm:grid-cols-[repeat(1,minmax(0,_1fr))]"
            />
          </section>
        </Layout>
      </main>
    </>
  )
}

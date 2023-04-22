import Head from 'next/head'
import { Layout } from '@/components/layout'
import React, { useLayoutEffect, useEffect } from 'react'

import {
  MediaSection,
  HomePageSectionBody,
  TagLineSection,
  HomeAnimateProcessSection,
  HomeServicesSection,
  HomeProducts,
  HomePageCover,
} from '@/components/HomeBlock'
import dynamic from 'next/dynamic'

const DynamicProductBlock = dynamic(
  () => import('@/components/HomeBlock/HomeProducts'),
  { ssr: false }
)

export default function Home() {
  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual'
  // }, [])
  return (
    <>
      <Head>
        <title>攏山借貸</title>
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.lungshan.tw/" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen flex flex-col items-center max-md:shadow-none">
        <Layout>
          <div className="h-[3.3rem] max-md:h-0" />
          <TagLineSection description="了解更多最近快速成功借貸實例" />
          <HomePageCover />
          <section>
            <div className="sticky top-[4rem]">
              <MediaSection />
            </div>
            <HomePageSectionBody />
          </section>
          <HomeAnimateProcessSection />
          <HomeServicesSection />
          <HomeProducts />
        </Layout>
      </main>
    </>
  )
}

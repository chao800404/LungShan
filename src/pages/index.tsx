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

export default function Home() {
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
          content="土地貸款,土地二胎,持分貸款,土地借款,土地持分借款,房子持分借款,民間借款,房屋二胎,民間貸款,房屋借款,持分借款,持分,持分土地,房屋持分貸款,房子借款,房屋持分借款,房子貸款,房子持分貸款,"
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

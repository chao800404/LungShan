import { Layout } from '@/components/layout'
import Head from 'next/head'
import React from 'react'
import { AboutusBodySection, AboutusCover } from '@/components/aboutusBlock'
import { ProductBlock } from '@/components/productBlock'
import PRODUCT_DATA from '@/data/product.json'

export default function AboutusPage() {
  return (
    <>
      <Head>
        <title>關於攏山</title>
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
          <AboutusCover />
          <AboutusBodySection />
          <ProductBlock data={PRODUCT_DATA} />
        </Layout>
      </main>
    </>
  )
}

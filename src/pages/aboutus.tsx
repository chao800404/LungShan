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
        <meta name="description" content="Generated by create next app" />
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

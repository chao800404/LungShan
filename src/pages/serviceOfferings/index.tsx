import Head from 'next/head'
import { Layout } from '@/components/layout'
import React, { useEffect, useState } from 'react'
import SERVICE_OFFERINGS_DATA from '@/data/service_offerings.json'
import * as uuid from 'uuid'
import { ServiceCard } from '@/components/card'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ProductBlock } from '@/components/productBlock'
import PRODUCT_DATA from '@/data/product.json'
import { useProductCardStore } from '@/store'

export default function ServiceOfferings() {
  const [onTop, setOnTop] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) setOnTop(false)
    else setOnTop(true)
  })

  useEffect(() => {
    const setShowShow = useProductCardStore.getState().setShouldShow
    setShowShow(true)
    return () => setShowShow(false)
  }, [])

  return (
    <>
      <Head>
        <title>攏山服務項目</title>
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.lungshan.tw/serviceOfferings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none flex flex-col items-center">
        <Layout>
          <div className="h-14 mb-2 w-full max-sm:h-10" />
          <motion.div
            className={`mt-32 max-w-screen-xxl m-auto overflow-hidden max-lg:mt-0 max-sm:sticky max-sm:-top-2 max-sm:z-20 max-sm:bg-[rgba(255,255,255,0.8)] max-sm:py-5 max-sm:backdrop-blur  ${
              !onTop &&
              'max-sm:shadow-[0_0.5rem_0.8rem_rgba(0,0,0,0.05)] max-sm:border-b'
            }`}
          >
            <motion.p
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              最新內容
            </motion.p>
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, type: 'just', delay: 1 }}
              className="text-7xl font-bold text-center py-3 will-change-transform max-sm:text-4xl"
            >
              攏山服務項目
            </motion.h1>
            <motion.p
              transition={{ duration: 0.6, type: 'just', delay: 1 }}
              animate={{ rotateX: 0, scale: 1, opacity: 1 }}
              initial={{ rotateX: 100, scale: 1.2, opacity: 0 }}
              className="text-center w-fit m-auto mt-14 border p-2 will-change-transform max-md:mx-5 max-sm:mt-3"
              style={{ perspective: '1000px' }}
            >
              攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司
            </motion.p>
          </motion.div>
          <section className="py-20 max-w-screen-xxl m-auto  px-5 max-sm:relative max-sm:z-0">
            <div className="grid grid-cols-[repeat(4,_1fr)] gap-3 gap-y-6 max-xl:grid-cols-[repeat(3,_1fr)] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[100%]">
              {SERVICE_OFFERINGS_DATA.map((item) => (
                <ServiceCard key={uuid.v4()} {...item} />
              ))}
            </div>
          </section>
          <ProductBlock
            data={PRODUCT_DATA}
            showProduct={false}
            title="查看項目案例"
          />
        </Layout>
      </main>
    </>
  )
}

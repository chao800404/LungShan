import React, { useState, useEffect, useCallback } from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { LoanCasesPreview } from '@/components/loancasesBlock'
import LOAN_CASES_DATA from '@/data/loan_cases.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useProductCardStore } from '@/store'
import PRODUCT_DATA from '@/data/product.json'
import { ProductBlock } from '@/components/productBlock'
import { useMediaQuery } from 'react-responsive'

const CasesDynamicPage = () => {
  const router = useRouter()
  const { loanCase } = router.query
  const [anEnd, setAnEnd] = useState(false)
  const data = LOAN_CASES_DATA.filter((item) => {
    const splitSlug = item.casePath.split('/')
    return splitSlug[splitSlug.length - 1] === loanCase?.[0]
  })

  const ScreenTwoXl = useMediaQuery({
    query: '(max-width: 1679px)',
  })

  const ScreenMd = useMediaQuery({
    query: '(max-width: 767px)',
  })

  useEffect(() => {
    const setShowShow = useProductCardStore.getState().setShouldShow
    if (anEnd) {
      setShowShow(true)
      return () => setShowShow(false)
    }
  }, [anEnd])

  const ImageW = useCallback(() => {
    if (ScreenTwoXl) return '50vw'
    else if (ScreenMd) return '100vw'
    else return '43.5vw'
  }, [ScreenTwoXl, ScreenMd, ScreenMd])

  if (!data) return null

  return (
    <>
      <Head>
        <title>{data[0].title}</title>
        <meta name="description" content={data[0].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <div className="h-12 max-sm:h-0 max-sm:mt-0" />
          <section>
            <div className="flex max-sm:h-screen">
              <motion.div
                animate={
                  !ScreenMd
                    ? { width: ImageW(), opacity: 1 }
                    : { width: '100vw', opacity: [0, 1] }
                }
                initial={{ width: '100vw', height: '100vh' }}
                transition={
                  !ScreenMd
                    ? { delay: 1.2, type: 'tween' }
                    : { delay: 0.2, type: 'just' }
                }
                className="relative overflow-hidden z-20"
                onAnimationComplete={() => setAnEnd(true)}
              >
                {data[0] && data[0].imgUrl && (
                  <Image
                    src={data[0].imgUrl}
                    fill
                    className="object-cover"
                    sizes="auto"
                    alt={data[0].title}
                    priority
                  />
                )}
              </motion.div>
              {anEnd && (
                <AnimatePresence>
                  <motion.div
                    animate={ScreenMd ? { x: 0 } : { x: 0 }}
                    initial={ScreenMd ? { x: '100%' } : { x: 0 }}
                    exit={ScreenMd ? { x: '100%' } : { x: 0 }}
                    transition={{ type: 'just', delay: 0.5 }}
                    className="flex-1 max-md:absolute max-md:z-20 max-md:w-[80vw] max-md:right-0 max-sm:w-[100vw] max-sm:pl-5 max-md:overflow-hidden"
                  >
                    <LoanCasesPreview list={data} />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </section>
          <div className="h-24 border-t max-sm:h-12 max-sm:relative max-sm:bg-white max-sm:z-20 max-sm:-translate-y-1 max-sm:border-t max-sm:shadow-[0_-10px_10px_rgba(0,0,0,0.1)]" />
          <ProductBlock data={PRODUCT_DATA} />
        </Layout>
      </main>
    </>
  )
}

export default CasesDynamicPage

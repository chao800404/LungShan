import React, { useState, useEffect, useCallback } from 'react'
import { GetStaticProps } from 'next'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { LoanCasesPreview } from '@/components/loancasesBlock'
import Image from 'next/image'
import { useProductCardStore } from '@/store'
import PRODUCT_DATA from '@/data/product.json'
import { ProductBlock } from '@/components/productBlock'
import { useMediaQuery } from 'react-responsive'
import { client } from '../../../client'
import { CaseData } from './type'
import { caseQuery, swtichCaseCoverImage } from '@/utils'

export async function getStaticPaths() {
  const { data } = await client.query({
    query: caseQuery,
  })

  const caseData = data.menu.menuItems.nodes as CaseData[]

  const paths = caseData.map(
    (item) => `/loancases/${item.connectedNode.node.slug}`
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as any).loanCase[0] as string

  const { data } = await client.query({
    query: caseQuery,
  })

  const caseData = data.menu.menuItems.nodes as CaseData[]

  const c = caseData.filter((item) => item.connectedNode.node.slug === slug)

  return {
    props: {
      ...c[0],
    },
  }
}

const CasesDynamicPage = (props: CaseData) => {
  const [anEnd, setAnEnd] = useState(false)

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

  const imageUrl = swtichCaseCoverImage(props.connectedNode.node.slug)

  return (
    <>
      <Head>
        <title>{props.label}</title>
        <meta name="description" content="防詐騙專區，攏山提醒您小心受騙!" />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none flex flex-col items-center">
        <Layout>
          <div className="h-12 max-sm:h-0 max-sm:mt-0" />
          <section>
            <div className="flex min-h-screen max-sm:h-screen">
              <motion.div
                animate={
                  !ScreenMd
                    ? { width: ImageW(), opacity: 1 }
                    : { width: '100vw', opacity: [0, 1] }
                }
                initial={{ width: '100vw' }}
                transition={
                  !ScreenMd
                    ? { delay: 1.2, type: 'tween' }
                    : { delay: 0.2, type: 'just' }
                }
                className="relative overflow-hidden z-20"
                onAnimationComplete={() => setAnEnd(true)}
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    fill
                    className="object-cover"
                    sizes="auto"
                    alt={props.label}
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
                    className="flex-1 max-md:absolute max-md:z-20 max-md:w-[80vw] max-md:right-0 max-sm:w-screen max-sm:pl-5 max-md:overflow-hidden"
                  >
                    <LoanCasesPreview {...props} />
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

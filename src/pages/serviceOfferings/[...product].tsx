import Head from 'next/head'
import { Layout } from '@/components/layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SERVICE_OFFERINGS_DATA from '@/data/service_offerings.json'
import { LoopSwiper, Swipper } from '@/components/swipper'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { ProductBlock } from '@/components/productBlock'
import PRODUCT_DATA from '@/data/product.json'
import { useProductCardStore } from '@/store'
import {
  ServiceGrouproupBlock,
  ServiceCoverBlock,
  ServiceSuitable,
  ServiceKnowledge,
  ServiceTable,
  ServiceProcess,
} from '@/components/servicesBlock'
import { GetStaticProps } from 'next'
import { ServiceData } from '@/components/servicesBlock/type'

export async function getStaticPaths() {
  const paths = SERVICE_OFFERINGS_DATA.map((item) => item.slug)

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as any).product[0] as string

  const data = SERVICE_OFFERINGS_DATA.filter((item) => {
    const splitSlug = item.slug.split('/')
    return splitSlug[splitSlug.length - 1] === slug
  })

  return {
    props: {
      ...data[0],
    },
  }
}

export default function Product(props: ServiceData) {
  const router = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const setShowShow = useProductCardStore.getState().setShouldShow
    setShowShow(true)

    const timeout = setTimeout(() => setShow(true), 1000)

    return () => {
      setShowShow(false)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description + props.subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-primary max-w-screen-2xl relative mr-auto ml-auto shadow-body min-h-screen flex items-center flex-col max-md:shadow-none">
        <Layout>
          <div className="h-12 mt-1 max-sm:h-5" />
          <div className="hidden fixed  max-md:flex h-12 top-0 bg-white text-2xl border-b z-50 w-full">
            <MdOutlineArrowBackIosNew
              onClick={() => router.back()}
              className="my-auto w-12 border-r p-3 h-full"
            />
          </div>

          <LoopSwiper
            one={`${props.subtitle} ${props.description}`}
            two={`${props.subtitle} ${props.description}`}
            show={show}
          />

          <ServiceCoverBlock
            title={props.title}
            imgUrl={props.imgUrl}
            casePath={props.casePath}
            feature={props.feature}
            linkGroup={props.linkGroup}
          />
          {(props.content_1 && <ServiceSuitable {...props.content_1} />) || (
            <></>
          )}
          <section className="relative max-w-[78vw] m-auto h-[20rem] overflow-hidden max-lg:max-w-full z-20">
            <h2 className="absolute text-base top-2 z-20 bg-[rgba(0,0,0,0.3)] text-[rgba(255,255,255,0.8)]  left-2 py-2 px-3 rounded-md">
              公司環境
            </h2>
            <Swipper
              images={[
                '/images/lungshan_loan_6.jpg',
                '/images/lungshan_loan_7.jpg',
                '/images/lungshan_loan_8.jpg',
              ]}
            />
          </section>
          {(props.content_2 && <ServiceKnowledge {...props.content_2} />) || (
            <></>
          )}

          <section className="-mt-10 mx-10 max-lg:mx-0 max-lg:px-5 relative z-20 bg-white max-sm:px-0">
            <div className="px-12 flex gap-5 pt-24 pb-12 max-lg:px-0 max-md:flex-col max-sm:pt-5">
              {props.content_3 && <ServiceProcess {...props.content_3} />}
              {props.content_4 && (
                <ServiceGrouproupBlock list={props.content_4} />
              )}
              {props.compare_table && <ServiceTable {...props.compare_table} />}
            </div>
          </section>
          <ProductBlock data={PRODUCT_DATA} />
        </Layout>
      </main>
    </>
  )
}

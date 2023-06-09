import React, { useCallback, useState, useEffect } from 'react'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import SCAM_PREVENTION from '@/data/scam_prevention.json'
import { ScamPreventionPopup } from '@/components/popup'
import { AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { ProductBlock } from '@/components/productBlock'
import PRODUCT_DATA from '@/data/product.json'
import {
  BsFillHouseFill,
  BsFillCreditCard2BackFill,
  BsFillPhoneFill,
} from 'react-icons/bs'
import { useScroll } from 'framer-motion'
import { FaLandmark } from 'react-icons/fa'
import { TfiWrite } from 'react-icons/tfi'
import { GiGroundSprout } from 'react-icons/gi'

import {
  ScamPreventionHeader,
  ScamPreventionBox,
} from '@/components/scamPreventionBlock'
import { useProductCardStore } from '@/store'
import { shallow } from 'zustand/shallow'

type UpdatePopupFn = ({ show, index }: { show: boolean; index: number }) => void

export default function ScamPrevention() {
  const [{ show, index }, setPopup] = useState({ show: false, index: 0 })
  const [onTop, setOnTop] = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest !== 0) setOnTop(false)
    else setOnTop(true)
  })

  const { setShouldShow } = useProductCardStore(
    (state) => ({
      setShouldShow: state.setShouldShow,
    }),
    shallow
  )

  const updatePopup: UpdatePopupFn = (popupContent) => {
    setPopup(popupContent)
    document.body.style.overflow = popupContent.show ? 'hidden' : 'scroll'
  }

  useEffect(() => {
    setShouldShow(true)
    return () => setShouldShow(false)
  }, [])

  return (
    <>
      <Head>
        <title>攏山防詐騙專區</title>
        <meta name="description" content="攏山防詐騙專區" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <section>
            <AnimatePresence>
              {show && (
                <ScamPreventionPopup
                  title={SCAM_PREVENTION[index].case.title}
                  caseContent={SCAM_PREVENTION[index].case.content}
                  close={() => updatePopup({ index: 0, show: false })}
                />
              )}
            </AnimatePresence>

            <div className="max-w-screen-xxl m-auto px-5 gap-5 pt-60 pb-40 grid grid-flow-row grid-cols-[repeat(4_,1fr)] max-lg:grid-cols-[repeat(3_,1fr)] max-md:grid-cols-[repeat(2_,1fr)] max-md:pt-40 max-sm:grid-cols-[100%] max-sm:pt-0 max-sm:px-0 max-sm:pb-10">
              <div
                className={`col-span-2 max-sm:col-span-1 max-sm:sticky max-sm:-top-16 max-sm:bg-[rgba(255,255,255,0.8)] max-sm:backdrop-blur max-sm:pt-20 max-sm:pb-10 ${
                  !onTop &&
                  'max-sm:border-b max-sm:shadow-md max-sm:pb-4 max-sm:z-20'
                }`}
              >
                <ScamPreventionHeader
                  title="害怕擔心受騙嗎?"
                  subtitle="攏山告訴你不得不知的小技巧"
                  onTop={onTop}
                />
                <div
                  className={`flex text-[2.5rem] gap-3 mt-3 duration-300 text-gray-400 max-md:justify-center max-sm:text-[2.2rem] ${
                    !onTop && 'max-sm:-translate-x-[8vw]'
                  }`}
                >
                  <BsFillHouseFill className="border p-2 rounded-md" />
                  <GiGroundSprout className="border p-2 rounded-md" />
                  <TfiWrite className="border p-2 rounded-md" />
                  <FaLandmark className="border p-2 rounded-md" />
                  <BsFillCreditCard2BackFill className="border p-2 rounded-md" />
                  <BsFillPhoneFill className="border p-2 rounded-md" />
                </div>
              </div>
              {SCAM_PREVENTION.map((item, index) => (
                <ScamPreventionBox
                  onClick={() => updatePopup({ show: true, index })}
                  key={`${item.id}_${item.title}`}
                  {...item}
                />
              ))}
            </div>
            <ProductBlock data={PRODUCT_DATA} />
          </section>
        </Layout>
      </main>
    </>
  )
}

import React from 'react'
import { AiFillPhone, AiOutlineToTop } from 'react-icons/ai'
import { useGa } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { TfiWrite } from 'react-icons/tfi'

const FloatBlock = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 })
  const {
    handleClickLineButton,
    handleClickPhoneButton,
    handleTranferContactusPage,
  } = useGa()

  return (
    <div className="fixed right-7 rounded-md p-3 bottom-6 z-50 border shadow-md flex gap-2 text-3xl bg-primary">
      <a
        href="tel:0800-777-992"
        className="p-1 border rounded-r-sm"
        onClick={() => {
          handleClickPhoneButton()
        }}
      >
        <AiFillPhone />
      </a>
      <a
        href="https://line.me/R/ti/p/@798advyq"
        className="p-1 border rounded-r-sm flex"
        onClick={() => {
          handleClickLineButton()
        }}
      >
        <Image
          alt="lineIcon"
          className="block m-auto p-1"
          sizes="auto"
          src="/images/decoration/line-logo.svg"
          width={30}
          height={30}
          priority={true}
        />
      </a>
      <Link
        href="/contact"
        className="p-1 px-2 border rounded-r-sm text-2xl flex"
        onClick={handleTranferContactusPage}
      >
        <TfiWrite className="cursor-pointer m-auto" />
      </Link>
      <a className="p-1 border rounded-r-sm" onClick={scrollToTop}>
        <AiOutlineToTop className="cursor-pointer" />
      </a>
    </div>
  )
}

export default FloatBlock

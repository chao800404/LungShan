import React, { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'
import { NavbarList } from './NavbarList'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Button } from '../button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { NavbarData } from './type'
import { useMediaQuery } from 'react-responsive'
import { GrMenu } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiWrite } from 'react-icons/tfi'
import { useGa } from '@/utils'

export type NavbarProps = {
  list: NavbarData[]
  show?: boolean
  setShowMenu?: () => void
}

type NavbarPropsDs = {
  overHeader: boolean
  screenXl: boolean
  transferRoute: (slug: string) => void
  slug: string
  setRoute: (slug: string) => void
} & NavbarProps

const DesktopNavbar = ({
  overHeader,
  screenXl,
  transferRoute,
  list,
  slug,
  setRoute,
}: NavbarPropsDs) => {
  const { handleClickPhoneButton } = useGa()

  return (
    <motion.header
      animate={
        overHeader
          ? {
              width: screenXl ? '100%' : '80%',
              marginTop: '1rem',
              padding: screenXl ? '0 1.2rem' : '0',
            }
          : { width: '100%', marginTop: '0' }
      }
      initial={{ width: '100%' }}
      transition={{ type: 'just' }}
      className={`font-normal fixed text-sm text-primaryBlack top-0 max-w-screen-2xl z-50 max-md:bottom-0 max-md:top-auto max-md:hidden`}
    >
      <motion.nav
        className={`flex bg-white items-center border-b-[1px] will-change-contents m-auto ${
          overHeader && 'border-x border-t shadow-md rounded-md'
        }`}
      >
        <Link
          href="/"
          className="w-40 border-r border-gray-200 h-full px-8 py-2 max-xxl:px-4 max-xxl:w-36 "
        >
          <Image
            src="/images/logo-2.webp"
            alt="logo"
            priority
            sizes="auto"
            width={150}
            height={30}
            className="h-auto w-auto"
            draggable={false}
          />
        </Link>

        <div className="flex items-center justify-between w-full px-5">
          <NavbarList
            transferRoute={transferRoute}
            list={list}
            route={slug}
            setRoute={setRoute}
          />
          <Button
            className={`pt-2 pb-2 pr-4 duration-200 pl-4 text-primaryBlue border-[1.5px] ml-7 rounded-md border-sky-700 bg-white shadow-none shadow-white ${
              overHeader && 'bg-slate-700 text-white border-none'
            }`}
          >
            <Link onClick={handleClickPhoneButton} href="tel:0800-777-992">
              聯絡我們
            </Link>
          </Button>
        </div>
      </motion.nav>
    </motion.header>
  )
}

type MobileNavbarMb = {
  slug: string
} & NavbarProps

const MobileNavbar = ({ list, slug, setShowMenu, show }: MobileNavbarMb) => {
  const {
    handleClickPhoneButton,
    handleClickLineButton,
    handleTranferContactusPage,
  } = useGa()

  return (
    <motion.header className="hidden w-[101%] max-md:flex justify-between fixed bottom-0 z-40">
      <div className="h-14 flex mt-auto justify-between flex-1 bg-white border-t border-primaryBlack pl-3">
        {show ? (
          <AiOutlineClose
            onClick={setShowMenu}
            className="w-16 h-full p-2 border-x"
          />
        ) : (
          <GrMenu onClick={setShowMenu} className="w-16 h-full p-2 border-x" />
        )}
        <div className="flex">
          <Link
            onClick={handleTranferContactusPage}
            href="/contact"
            className="h-full border-l w-14 text-[1.5rem]"
          >
            <TfiWrite className="h-full m-auto" />
          </Link>
          <Link
            href="https://line.me/R/ti/p/@798advyq"
            className="h-full border-l w-16 flex"
            onClick={handleClickLineButton}
          >
            <Image
              alt="lineIcon"
              className="block m-auto"
              sizes="auto"
              src="/images/decoration/line-logo.webp"
              width={28}
              height={28}
              priority={true}
            />
          </Link>
        </div>
      </div>
      <Link
        onClick={handleClickPhoneButton}
        href="tel:0900640606"
        className="h-20 w-20 bg-primaryBlue flex flex-col justify-center items-center active:scale-[0.98] duration-150"
      >
        <Image
          src="/images/decoration/callus_icon.webp"
          alt="logo"
          priority
          sizes="auto"
          width={20}
          height={20}
          className="h-9 w-9"
          draggable={false}
        />
        <p className="text-xs mt-1 font-thin text-white">聯絡我們</p>
      </Link>
    </motion.header>
  )
}

export const Navbar = ({ list, setShowMenu, show }: NavbarProps) => {
  const router = useRouter()
  const screenXl = useMediaQuery({
    query: '(max-width: 1279px)',
  })

  const screenMd = useMediaQuery({
    query: '(max-width: 767px)',
  })

  const [overHeader, setOverHeader] = useState(false)
  const [curRoute, setCurRoute] = useState({
    slug: router.route,
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (screenMd) return
    if (latest > window.innerHeight) setOverHeader(true)
    else setOverHeader(false)
  })

  const transferRoute = useCallback((slug: string) => {
    router.push(slug)
  }, [])

  const setRoute = useCallback((slug: string) => {
    return setCurRoute({ slug })
  }, [])

  return (
    <>
      <DesktopNavbar
        list={list}
        setRoute={setRoute}
        transferRoute={transferRoute}
        screenXl={screenXl}
        overHeader={overHeader}
        slug={curRoute.slug}
      />
      <MobileNavbar
        list={list}
        slug={curRoute.slug}
        setShowMenu={setShowMenu}
        show={show}
      />
    </>
  )
}

export default Navbar

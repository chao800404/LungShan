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
import { AiFillPhone } from 'react-icons/ai'

type NavbarProps = {
  list: NavbarData[]
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
          className="w-40  border-r border-gray-200 h-full px-8 py-2 max-xxl:px-4 max-xxl:w-36 "
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
            <Link href="#">聯絡我們</Link>
          </Button>
        </div>
      </motion.nav>
    </motion.header>
  )
}

const MobileNavbar = ({ list }: NavbarProps) => {
  return (
    <motion.header className="h-10 w-full text-xl flex justify-between fixed bottom-0 bg-white z-40 border-t shadow-[0_-1px_0.5rem_rgba(0,0,0,0.05)]">
      <div className="h-full border-r w-10">
        <GrMenu className="h-full m-auto" />
      </div>
      <div className="flex items-center">
        <a href="tel:0800-777-992" className="h-full border-l w-10">
          <AiFillPhone className="h-full m-auto" />
        </a>
        <a
          href="https://line.me/R/ti/p/@798advyq"
          className="h-full border-l w-10 flex"
        >
          <Image
            alt="lineIcon"
            className="block m-auto"
            sizes="auto"
            src="/images/decoration/line-logo.svg"
            width={20}
            height={20}
            priority={true}
          />
        </a>
      </div>
    </motion.header>
  )
}

export const Navbar = ({ list }: NavbarProps) => {
  const router = useRouter()

  const [overHeader, setOverHeader] = useState(false)
  const [curRoute, setCurRoute] = useState({
    slug: router.route,
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > window.innerHeight) setOverHeader(true)
    else setOverHeader(false)
  })

  const transferRoute = useCallback((slug: string) => {
    router.push(slug)
  }, [])

  const setRoute = useCallback((slug: string) => {
    return setCurRoute({ slug })
  }, [])

  const screenXl = useMediaQuery({
    query: '(max-width: 1280px)',
  })

  const screenMd = useMediaQuery({
    query: '(max-width: 768px)',
  })

  return !screenMd ? (
    <DesktopNavbar
      list={list}
      setRoute={setRoute}
      transferRoute={transferRoute}
      screenXl={screenXl}
      overHeader={overHeader}
      slug={curRoute.slug}
    />
  ) : (
    <MobileNavbar list={list} />
  )
}

export default Navbar

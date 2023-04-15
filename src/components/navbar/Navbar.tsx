import React, { useCallback, useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { NavbarList, NavbarBaseList } from './NavbarList'
import { motion } from 'framer-motion'
import { Button } from '../button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { NavbarData } from './type'
import { useWindowStore } from '@/store'
import { shallow } from 'zustand/shallow'

type NavbarProps = {
  list: {
    first: NavbarData[]
    second: NavbarData[]
  }
}

export const Navbar = ({ list }: NavbarProps) => {
  const router = useRouter()
  const routes = [...list.first, ...list.second]
  const [curRoute, setCurRoute] = useState({
    slug: router.route,
  })
  const [onTop, setOnTop] = useState(true)
  const routeName = useMemo(() => {
    return selectRouteName(routes, router.route)
  }, [router.route])
  const setScrollYPostition = useWindowStore(
    (state) => state.setScrollYPosition,
    shallow
  )

  const transferRoute = useCallback((slug: string) => {
    router.push(slug)
  }, [])

  const setRoute = useCallback((slug: string) => {
    return setCurRoute({ slug })
  }, [])

  function selectRouteName(item: NavbarData[], slug: string) {
    return item?.filter((item) => {
      if (item.content && item.content.length > 0) {
        selectRouteName(item?.content, slug)
      } else return item.slug === slug
    })
  }

  useEffect(() => {
    const handleOnScroll = () => {
      const scrollY = window.scrollY
      setScrollYPostition(scrollY)
      if (scrollY !== 0) setOnTop(false)
      else setOnTop(true)
    }

    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <header
      className={`font-normal text-sm text-primaryBlack fixed top-0 w-full max-w-screen-2xl bg-white z-50 max-sm:hidden`}
    >
      <motion.nav
        animate={{ height: !onTop ? 0 : 60, opacity: !onTop ? 0 : 1 }}
        initial={{ height: 60 }}
        className="flex items-center border-b-[1px] will-change-contents"
      >
        <Link
          href="/"
          className="w-40 h-auto border-r border-gray-200 mr-5 px-8 py-2 max-xxl:px-4 max-xxl:w-36"
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
        <NavbarList list={list.first} />
      </motion.nav>
      <nav className="flex justify-between items-center border-b-[1px] px-8 py-3 max-xxl:px-5">
        <motion.div className="text-lg overflow-hidden ">
          <motion.h2
            className="will-change-transform"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { type: 'just', delay: 0.6 } }}
          >
            {routeName[0]?.title || ''}
          </motion.h2>
        </motion.div>
        <div className="flex items-center">
          <NavbarBaseList
            transferRoute={transferRoute}
            list={list.second}
            route={curRoute.slug}
            setRoute={setRoute}
          />
          <Button className="pt-2 pb-2 pr-4 pl-4 text-primaryBlue border-[1.5px] ml-7 rounded-md border-sky-700 bg-white shadow-none shadow-white">
            <Link href="#">聯絡我們</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

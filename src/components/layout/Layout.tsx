import React, { useState } from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'
import NAVBAR_DATA from '@/data/navbar.json'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const DynamicMenu = dynamic(() => import('@/components/popup/MenuPopup'), {
  loading: () => null,
  ssr: false,
})

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const hide = () => setShowMenu(false)

  return (
    <>
      <Navbar
        list={NAVBAR_DATA}
        setShowMenu={() => setShowMenu((prev) => !prev)}
      />
      <DynamicMenu list={NAVBAR_DATA} showMenu={showMenu} hide={hide} />
      <div className="min-w-[100%]">{children}</div>
      <Footer list={NAVBAR_DATA} />
    </>
  )
}

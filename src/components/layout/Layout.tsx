import React, { useState } from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'
import NAVBAR_DATA from '@/data/navbar.json'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const DynamicMenu = dynamic(() => import('@/components/popup/MenuPopup'), {
  loading: () => null,
  ssr: false,
})

const DynamicHeader = dynamic(
  () => import('@/components/mouse/MouseFollower'),
  {
    loading: () => null,
    ssr: false,
  }
)

const DynamicFloatBlock = dynamic(
  () => import('@/components/floatBlock/FloatBlock'),
  { ssr: false, loading: () => null }
)

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const screenLg = useMediaQuery({
    query: '(max-width: 1024px)',
  })

  const screenSm = useMediaQuery({
    query: '(max-width: 767px)',
  })

  const hide = () => setShowMenu(false)

  return (
    <>
      <Navbar
        list={NAVBAR_DATA.filter((item) => item.public)}
        setShowMenu={() => setShowMenu((prev) => !prev)}
        show={showMenu}
      />
      <DynamicMenu list={NAVBAR_DATA} showMenu={showMenu} hide={hide} />
      {!screenSm && <DynamicFloatBlock />}
      {!screenLg && <DynamicHeader />}
      <div className="w-full">{children}</div>
      <Footer list={NAVBAR_DATA} />
    </>
  )
}

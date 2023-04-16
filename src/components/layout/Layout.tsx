import React from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'
import NAVBAR_DATA from '@/data/navbar.json'
import dynamic from 'next/dynamic'
const DynamicHeader = dynamic(() => import('../navbar/Navbar'), {
  loading: () => null,
  ssr: false,
})

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DynamicHeader list={NAVBAR_DATA} />
      <div className="min-h-screen w-full">{children}</div>
      <Footer list={NAVBAR_DATA} />
    </>
  )
}

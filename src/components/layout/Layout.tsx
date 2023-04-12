import React from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'
import NAVBAR_DATA from '@/data/navbar.json'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar list={NAVBAR_DATA} />
      <div className="min-h-screen">{children}</div>
      <Footer list={NAVBAR_DATA} />
    </>
  )
}

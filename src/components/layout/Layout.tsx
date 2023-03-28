import React from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  )
}

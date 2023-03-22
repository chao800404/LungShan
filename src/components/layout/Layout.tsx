import React from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </div>
  )
}

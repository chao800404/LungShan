import { Layout } from '@/components/layout'
import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutusCover } from '@/components/aboutusBlock'

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen">
        <Layout>
          <AboutusCover />
        </Layout>
      </main>
    </>
  )
}

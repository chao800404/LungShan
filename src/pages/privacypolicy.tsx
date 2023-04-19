import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layout'
import PRIVACYPOLOLICY from '@/data/privacyploicy.json'

const Privacypolicy = () => {
  return (
    <>
      <Head>
        <title>隱私權政策 Privacy Policy</title>
        <meta
          name="description"
          content="感謝您使用我們的網站/應用程序/服務。我們非常重視您的隱私權，並致力於保護您的個人信息。在這份隱私政策中，我們將解釋我們如何收集、使用和保護您的個人信息。"
        />
        <meta name="author" content="Chao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none">
        <Layout>
          <div className="h-12 max-md:hidden" />
          <section className="mt-32 m-auto max-w-screen-xxl max-xxl:px-5 max-md:mt-0 max-md:pt-24">
            <div className="text-center flex flex-col gap-3">
              <h1 className="text-4xl font-bold">{PRIVACYPOLOLICY.title}</h1>
              <h2 className="text-lg p-5 font-mono max-w-screen-lg m-auto">
                <span className="text-primaryBlue font-bold">
                  {PRIVACYPOLOLICY.company_name}
                </span>
                <span>{PRIVACYPOLOLICY.description}</span>
              </h2>
            </div>
            <div className="pt-24 pb-32 max-w-screen-xl m-auto">
              <ul className="flex flex-col gap-10">
                {PRIVACYPOLOLICY.list.map((item, index) => (
                  <li key={item.id}>
                    <h3 className="text-2xl mb-5">
                      <span>{index + 1}</span>
                      <span>.</span>
                      <span className="ml-3">{item.title}</span>
                    </h3>
                    <p className="ml-8 font-mono">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Privacypolicy

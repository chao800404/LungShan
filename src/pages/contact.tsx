import { Layout } from '@/components/layout'
import Head from 'next/head'
import React from 'react'
import { Input, TextArea, Select } from '@/components/form'
import Link from 'next/link'
import BeatLoader from 'react-spinners/BeatLoader'

type UserDataType = {
  username?: string
  userphone?: string
  useremail?: string
  service?: string
  price?: string
  legalAge?: string
  userdescription?: string
}

const prices = [
  '$10000 ~ $300000',
  '$300000 ~ $1000000',
  '$1000000 ~ $3000000',
  '$3000000 ~ $10000000',
  '$10000000 ~ $無上限',
]

const services = [
  '房屋借貸',
  '房屋出售',
  '土地借貸',
  '土地出售',
  '民間代書借貸',
  '銀行信用貸款',
  '汽機車貸款',
  '手機貸款商品業務',
]

const Contact = () => {
  const [
    {
      username,
      userphone,
      useremail,
      userdescription,
      service,
      price,
      legalAge,
    },
    setUserData,
  ] = React.useState<UserDataType>({
    username: undefined,
    userphone: undefined,
    useremail: undefined,
    service: undefined,
    price: undefined,
    legalAge: undefined,
    userdescription: undefined,
  })

  const [validate, setValidate] = React.useState(true)
  const [sussessful, setSuccessful] = React.useState(true)

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id: name, value } = e.target
    setValidate(true)
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const resetUserData = () => {
    setUserData((prev) => ({
      ...prev,
      username: undefined,
      userphone: undefined,
      useremail: undefined,
      service: undefined,
      price: undefined,
      legalAge: undefined,
      userdescription: undefined,
    }))
  }

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (!username || !userphone || legalAge !== '是') return setValidate(false)
    if (validate) {
      try {
        setSuccessful(false)
        const res = await fetch('/api/submitUserData', {
          method: 'POST',
          body: JSON.stringify({
            username,
            userphone,
            useremail,
            service,
            price,
            legalAge,
            userdescription,
          }),
        })
        const isSuccess = res.ok

        if (res.status === 200) {
          ;(window as any).push({
            event: 'formSubmitted',
          })
        } else {
          console.log('Form submission failed.')
        }

        if (isSuccess) {
          setSuccessful(true)
        } else {
          setTimeout(() => setSuccessful(true), 2000)
          throw Error('客戶表單傳送失敗')
        }
      } catch (error: any) {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({
          event: 'formError',
          errorMessage: error.message,
        })
      }
      resetUserData()
    }
  }

  return (
    <>
      <Head>
        <title>關於攏山|聯絡我們</title>
        <meta
          name="description"
          content="攏山是一家致力於協助有資金需求的客戶找到最合適的解決方案的公司。資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。"
        />
        <meta name="author" content="Chao" />
        <meta
          name="keywords"
          content="房屋借款,銀行信用貸款,土地借款,民間代書借款,汽車貸款,機車貸款,商品貸款,手機貸款,房屋買賣,持分買賣,收購特殊地目,急售不動產"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-primary max-w-screen-2xl mr-auto ml-auto shadow-body min-h-screen max-md:shadow-none ">
        <Layout>
          <div className="h-12 max-md:hidden" />
          <section className="pt-32 pb-24 max-w-screen-md m-auto max-xl:px-5 max-md:pt-14 max-xl:max-w-screen-sm max-sm:pb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-3 leading-[3rem] max-sm:text-2xl">
                <span className="block">需要尋求幫助嗎?</span>
                <span className="block max-sm:text-xl">
                  聯絡攏山業務，快速幫助您解決問題
                </span>
              </h1>
              <p className="max-sm:font-mono">
                我們會快速協助您，請先完成表單或是通過LINE、電話與我們業務聯繫，我們會優先為您解決問題!
              </p>
            </div>
          </section>
          <section className="pb-5 max-w-screen-lg m-auto max-xl:px-5">
            <form
              id="contact_us_form"
              className="grid grid-cols-[repeat(2,_1fr)] gap-y-3 gap-x-4 max-sm:grid-cols-[100%]"
              onSubmit={handleOnSubmit}
            >
              <Input
                inputTitle="*客戶名稱"
                type="text"
                id="username"
                value={username}
                onChange={handleOnChange}
              />
              <Input
                value={userphone}
                inputTitle="*客戶電話"
                type="tel"
                id="userphone"
                onChange={handleOnChange}
              />
              <Input
                value={useremail}
                inputTitle="客戶信箱"
                type="email"
                id="useremail"
                onChange={handleOnChange}
              />
              <Select
                value={service}
                inputTitle="選擇服務"
                options={services}
                id="service"
                onChange={handleOnChange}
              />
              <Select
                value={price}
                inputTitle="預計借款金額"
                options={prices}
                id="price"
                onChange={handleOnChange}
              />
              <Select
                value={legalAge}
                inputTitle="*是否成年"
                options={['是', '否']}
                id="legalAge"
                onChange={handleOnChange}
              />
              <TextArea
                value={userdescription}
                inputTitle="我們該如何幫助您?"
                id="userdescription"
                onChange={handleOnChange}
              />
              <button className="col-span-2 p-3 bg-primaryBlue rounded-md text-primary text-xl font-medium mt-5 max-sm:col-span-1">
                {sussessful ? (
                  <span>提交表單</span>
                ) : (
                  <BeatLoader
                    color="#ffffff"
                    loading={true}
                    // cssOverride={override}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </button>
            </form>
          </section>
          <section className="pb-32 max-w-screen-lg m-auto max-xl:px-5">
            <p>
              *不可空白 (更多細節請參考我們的
              <Link className="text-primaryBlue" href="/privacypolicy">
                隱私政策)
              </Link>
              <br />
              <span
                className={`text-red-600 mt-2 block ${
                  validate ? 'invisible' : 'visible'
                }`}
              >
                表單尚未完成，請完成表單
              </span>
            </p>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Contact

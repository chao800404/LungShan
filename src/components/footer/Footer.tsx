import React from 'react'
import Link from 'next/link'
import { NavbarData } from '../navbar/type'
import * as uuid from 'uuid'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

type FooterProps = {
  list: NavbarData[]
}

type FooterListProps = {
  title: string
  list?: NavbarData[]
  onMouseEnter?: React.MouseEventHandler<HTMLUListElement>
  onMouseLeave?: React.MouseEventHandler<HTMLUListElement>
}

const FooterList = ({
  title,
  list,
  onMouseEnter,
  onMouseLeave,
}: FooterListProps) => {
  return (
    <div className="justify-self-start border-l w-full max-xl:border-t">
      <h3 className="text-2xl font-bold py-2 px-5 border-b">{title}</h3>
      <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex flex-col gap-2 flex-wrap px-5 max-h-32 py-3 max-md:max-h-48"
      >
        {list?.map((item) => (
          <li
            key={uuid.v4()}
            className="text-md text-gray-400 font-serif hover:text-gray-800 max-md:text-base max-md:text-gray-500 max-md:w-1/2"
          >
            <Link href={item.slug}> {item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Footer = ({ list }: FooterProps) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )

  return (
    <footer className="border-t w-full max-md:pb-16">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] text-sm  m-auto max-xxl:grid-cols-[repeat(3,_1fr)] max-xl:grid-cols-[repeat(2,_1fr)] max-mmd:grid-cols-[100%]">
        <div className="flex flex-col gap-2 px-10 py-5 max-xxl:px-5 max-xl:col-span-2 max-mmd:col-span-1">
          <h3 className="text-3xl font-bold ">攏山股份有限公司</h3>
          <p className="max-md:text-base font-thin">
            桃園市中壢區領航南路三段352號
          </p>
          <h2
            className="text-3xl mt-auto w-fit hover:underline font-bold"
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
          >
            <a href="tel:032876234">0800-777-992</a>
          </h2>
        </div>
        <FooterList
          title="服務產品項目"
          onMouseEnter={() => setPointerEvent('Link')}
          onMouseLeave={() => setPointerEvent('Default')}
          list={list.filter((item) => item.id === 2)[0]?.content}
        />
        <FooterList
          onMouseEnter={() => setPointerEvent('Link')}
          onMouseLeave={() => setPointerEvent('Default')}
          title="快速導覽"
          list={list}
        />
      </div>
      <div className="border-t px-10 py-5 max-xxl:px-5">
        <h2 className="font-medium">
          不動產抵押貸款借款100萬元，最短期限3個月，最長還款期限20年，借款金額無限制有價值都可承做，最高年利率百分之6，房屋土地持分借款100萬元，每月利息費用4780元
        </h2>
        <h6 className="text-gray-400 font-mono py-2">警語：</h6>
        <p className="text-gray-400 font-mono text-[0.8rem] max-md:text-justify">
          本公司在評估及申貸過程，絕不會要求客戶提供任何存摺、印章、提款卡或其他正本文件資料。
          本公司在評估及審查過程，前端絕不會要求客戶匯款或任何明目費用。
          本廣告揭露之年百分率不等於貸款利率，實際貸款仍以銀行提供之產品為準，且每一客戶實際之年百分率，仍視其個別貸款產品及授信條件而有所不同。
          貸款額度及利率依個人實際條件差異而有所不同，銀行保有核貸額度、適用利率與核貸與否之權利，詳細約定應以銀行貸款申請書及約定書為準。
          客戶所提供之申辦資料將予以保密義務，非業務需要不得交付或洩漏予第三人，並應盡善良管理人之注意義務為客戶處理事務。
          請提高警覺，小心查證。謹慎理財，信用至上！
        </p>
      </div>
      <div className="border-t text-xs text-gray-400 py-4 px-4 flex justify-between max-lg:text-base max-lg:p-0 max-lg:flex-col-reverse max-md:text-sm">
        <p className="max-lg:p-5 max-lg:border-t max-md:px-5 max-md:py-2">
          Copyright ©2023 舜至有限公司. All rights reserved.
        </p>
        <ul className="flex items-center gap-3 max-lg:p-4 max-md:flex-col max-md:items-start max-md:p-0 max-md:gap-0">
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300 max-md:w-full max-md:px-5 max-md:py-2 "
          >
            <p>公司統編: 83254205</p>
          </li>
          <li className="max-md:hidden">|</li>
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300 max-md:border-t max-md:w-full max-md:px-5 max-md:py-2 "
          >
            <p>公司官方LINE: @798advyq</p>
          </li>
          <li className="max-md:hidden">|</li>
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300 max-md:border-t max-md:w-full max-md:px-5 max-md:py-2"
          >
            <a href="mailto: longshan352@gmail.com">
              公司信箱:longshan352@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

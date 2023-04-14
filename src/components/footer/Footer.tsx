import React from 'react'
import Link from 'next/link'
import { NavbarData } from '../navbar/type'
import * as uuid from 'uuid'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

type FooterProps = {
  list: {
    first: NavbarData[]
    second: NavbarData[]
  }
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
    <div className="justify-self-start border-l w-full max-lg:border-t">
      <h3 className="text-2xl font-black py-2 px-5 border-b">{title}</h3>
      <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex flex-col gap-2 flex-wrap px-5 max-h-32 py-3 max-md:max-h-40"
      >
        {list?.map((item) => (
          <li
            key={uuid.v4()}
            className="text-md text-gray-400 font-black hover:text-gray-800 max-md:text-base max-md:text-gray-500 max-md:w-1/2"
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
    <footer className="border-t">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] text-sm  m-auto max-lg:grid-cols-[repeat(2,_1fr)] max-md:grid-cols-[100%]">
        <div className="flex flex-col gap-2 px-10 py-5 max-xxl:px-5 max-lg:col-span-2 max-md:col-span-1">
          <h3 className="text-3xl font-black">攏山股份有限公司</h3>
          <p className="max-md:text-base">桃園市中壢區領航南路三段352號</p>
          <h2
            className="text-3xl mt-auto w-fit hover:underline"
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
          >
            <a href="tel:032876234">03-2876234</a>
          </h2>
        </div>
        <FooterList
          title="服務產品項目"
          onMouseEnter={() => setPointerEvent('Link')}
          onMouseLeave={() => setPointerEvent('Default')}
          list={list.first.filter((item) => item.id === 1)[0]?.content}
        />
        <FooterList
          onMouseEnter={() => setPointerEvent('Link')}
          onMouseLeave={() => setPointerEvent('Default')}
          title="快速導覽"
          list={[...list.first, ...list.second]}
        />
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

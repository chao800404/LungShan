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
    <div className="justify-self-start border-l  w-full ">
      <h3 className="text-2xl font-black py-2 px-5 border-b">{title}</h3>
      <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex flex-col gap-2 flex-wrap px-5 max-h-32 py-3"
      >
        {list?.map((item) => (
          <li
            key={uuid.v4()}
            className="text-md text-gray-400 font-black hover:text-gray-800"
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
      <div className="grid grid-cols-[1.5fr_1fr_1fr] text-sm  m-auto">
        <div className="flex flex-col gap-2 px-10 py-5 ">
          <h3 className="text-3xl font-black">攏山股份有限公司</h3>
          <p>桃園市中壢區領航南路三段352號</p>
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
      <div className="border-t text-xs text-gray-400 py-4 px-4 flex justify-between">
        <p>Copyright ©2023 舜至有限公司. All rights reserved.</p>
        <ul className="flex items-center gap-3">
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300"
          >
            公司統編: 83254205
          </li>
          <li>|</li>
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300"
          >
            公司官方LINE: @798advyq
          </li>
          <li>|</li>
          <li
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            className="hover:text-gray-800 duration-300"
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

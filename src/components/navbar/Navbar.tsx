import React from 'react'
import NAVBAR_DATA from '@/data/navbar.json'
import Link from 'next/link'
import { NavbarList, NavbarBaseList } from './NavbarList'

export const Navbar = () => {
  return (
    <header className="font-bold text-sm text-primaryBlack">
      <nav className="p-4 flex items-center border-b-[1px] ">
        <div>Logo</div>
        <div className="w-12"></div>
        <div>
          <NavbarList list={NAVBAR_DATA.first} />
        </div>
      </nav>
      <nav className="pr-4 pl-4 pt-2 pb-2 flex justify-between items-center border-b-[1px]">
        <div>
          <h2 className="text-lg">借貸產業</h2>
        </div>
        <div className="flex items-center">
          <NavbarBaseList list={NAVBAR_DATA.second} />
          <Link
            className="pt-2 pb-2 pr-5 pl-5 text-primaryBlue border-[1.5px] ml-7 rounded-md border-sky-700"
            href="#"
          >
            聯絡我們
          </Link>
        </div>
      </nav>
    </header>
  )
}

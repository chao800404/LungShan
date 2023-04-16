import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavbarProps } from '../navbar'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import Image from 'next/image'

const variants = {
  show: {
    x: 0,
    opacity: 1,
  },
  hide: {
    x: -300,
    opacity: 0,
  },
}

export const MenuPopup = ({
  list,
  showMenu,
  hide,
}: NavbarProps & {
  showMenu: boolean
  hide: () => void
}) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial="hide"
          animate="show"
          exit="hide"
          transition={{ type: 'just' }}
          variants={variants}
          className="fixed  left-0 w-[100vw] z-30 h-screen"
        >
          <div className="bg-[rgba(255,255,255,0.8)] w-[85%] h-full relative z-10 backdrop-blur flex flex-col border-r shadow-[0.2rem_0_0.5rem_rgba(0,0,0,0.3)]">
            <ul className="flex flex-col gap-5 w-full my-auto">
              {list.map((item) => (
                <li className="text-2xl w-full border-b px-5 py-1 ">
                  <Link href={item.slug} className="flex gap-5 items-center">
                    {item.title}
                    <BiLinkExternal />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-40 bg-white border-t flex items-center pb-14 px-5 gap-5">
              <Image
                alt="攏山借貸"
                src="/images/logo-2.webp"
                width={120}
                height={20}
              />
              <div className="max-md:text-sm font-thin">
                <p>桃園市中壢區領航南路三段352號</p>
                <p>公司統編: 83254205</p>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full absolute z-0 top-0 left-0"
            onClick={hide}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuPopup

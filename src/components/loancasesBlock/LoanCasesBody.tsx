import React from 'react'
import { BlockComponent } from './type'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export const LoanCasesBody: BlockComponent = ({ list }) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )

  return (
    <div className="px-40 pb-40 grid grid-cols-[repeat(3,_1fr)] gap-5">
      {list?.map((item) => (
        <div className="w-full">
          <h3 className="text-2xl font-black">
            <Link href={item.slug || ''}>{item.title}</Link>
          </h3>
          <div className="mt-3">
            {item.cases.map((item) => (
              <div
                onMouseEnter={() => setPointerEvent('Focus')}
                onMouseLeave={() => setPointerEvent('Default')}
                className="shadow border mt-2 p-3 flex justify-between group items-center"
              >
                <p className="w-4/5 truncate">{item.title}</p>
                <FiExternalLink className="text-gray-300 group-hover:text-gray-700 duration-200" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

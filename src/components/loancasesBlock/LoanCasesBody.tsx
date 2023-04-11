import React from 'react'
import { BlockComponent } from './type'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { FiExternalLink } from 'react-icons/fi'
import { useRouter } from 'next/router'

export const LoanCasesBody: BlockComponent = ({ list }) => {
  const setPointerEvent = useMouseStore(
    (state) => state.setPointerEvent,
    shallow
  )
  const route = useRouter()

  return (
    <div className="px-40 py-40 grid grid-cols-[repeat(3,_1fr)] gap-5">
      {list?.map((item) => (
        <div className="w-full" key={item.id}>
          <h3
            className="text-2xl cursor-pointer font-black mb-5 hover:text-gray-700 hover:underline duration-300"
            onMouseEnter={() => setPointerEvent('Focus')}
            onMouseLeave={() => setPointerEvent('Default')}
            onClick={() => route.push(item.slug || '')}
          >
            {item.title}
          </h3>
          <div className="mt-3">
            {item?.cases?.map((item) => (
              <div
                onMouseEnter={() => setPointerEvent('Focus')}
                onMouseLeave={() => setPointerEvent('Default')}
                key={item.id}
                className="shadow border cursor-pointer mt-2 p-3 flex justify-between group items-center"
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

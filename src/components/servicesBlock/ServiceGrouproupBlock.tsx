import React from 'react'
import { motion } from 'framer-motion'

type ServiceGrouproupBlockProps = {
  list: {
    id: string | number
    title: string
    description: string
  }[]
}

export const ServiceGrouproupBlock = ({ list }: ServiceGrouproupBlockProps) => {
  const [curIndex, setCurInex] = React.useState(0)

  return (
    <div className="flex-1 rounded-md border h-fit shadow sticky top-24 max-sm:border-none max-sm:rounded-none">
      <ul className="flex rounded-tl-md rounded-tr-md border-b">
        {list.map((item, index) => {
          const isActive = curIndex === index
          return (
            <li
              className={`px-3 py-2 relative ${!isActive && 'text-gray-300'}`}
              key={item.id}
              onClick={() => setCurInex(index)}
            >
              {item.title}
              {isActive && (
                <motion.span
                  layout
                  layoutId="underline"
                  className="h-[2px] absolute bottom-0 left-0 w-full bg-primaryBlack"
                />
              )}
            </li>
          )
        })}
      </ul>
      <div className="p-5 mt-2">
        <p className="text-justify leading-7">{list[curIndex].description}</p>
      </div>
    </div>
  )
}

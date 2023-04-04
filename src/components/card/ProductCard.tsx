import React, { useState } from 'react'
import Lottie from 'react-lottie-player'

type ProductCardProps = {
  json: object
  title: string
}

export const ProductCard = ({ json, title }: ProductCardProps) => {
  const [onEnter, setOnEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => setOnEnter(true)}
      onMouseLeave={() => setOnEnter(false)}
      className="flex-1 border shadow-md p-3 rounded-md group"
    >
      <h3 className="font-bold text-base text-center">{title}</h3>
      <div className="w-full h-44">
        <Lottie
          animationData={json}
          loop={true}
          play={onEnter}
          goTo={onEnter ? 1 : 90}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <button className="w-full bg-primaryBlack p-2 text-primary rounded-md text-sm font-bold">
          查看案例
        </button>
        <button className="w-ful text-gray-400 font-bold border rounded-md text-sm p-2 group-hover:bg-slate-200 duration-300 group-hover:border-gray-300 group-hover:text-gray-700">
          了解詳情
        </button>
      </div>
    </div>
  )
}

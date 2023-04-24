import React from 'react'
import Image from 'next/image'

type QAndABlockFigureProps = {
  imgUrl: string
  description: string
}

export const QAndABlockFigure = ({
  imgUrl,
  description,
}: QAndABlockFigureProps) => {
  return (
    <figure className="rounded-md shadow-md w-full h-full relative max-xxl:rounded-none max-xxl:shadow-none">
      <Image
        alt="image"
        className="object-cover"
        fill
        src={imgUrl}
        sizes="auto"
        priority
      />
      <figcaption className="relative bg-white w-full p-5 shadow-md shadow-[rgba(0,0,0,0.2)] z-10  max-xxl:rounded-none max-xxl:shadow-none max-md:hidden">
        <h2 className="font-bold ">
          <span>適合客戶：</span>
          <span className="font-normal text-base block mt-2 text-gray-500">
            {description}
          </span>
        </h2>
      </figcaption>
    </figure>
  )
}

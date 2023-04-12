import React from 'react'
import { CasesType } from '../card/type'
import Image from 'next/image'

export const LoanCasesOverview = (props: CasesType) => {
  return (
    <div className="w-full h-fit">
      <h1 className="text-4xl font-black">{props.title}</h1>
      <div className="flex flex-row-reverse gap-5 mt-8">
        <div className="relative flex-1">
          <Image
            fill
            src={props.imgUrl}
            alt={props.title}
            className="object-cover rounded border border-gray-900"
            sizes="auto"
            placeholder="blur"
            blurDataURL={props.imgUrl}
          />
        </div>
        <div className="flex-1 border p-5 rounded">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { CasesType } from '../card/type'
import Image from 'next/image'
import { FaUserEdit } from 'react-icons/fa'

export const LoanCasesOverview = (props: CasesType) => {
  return (
    <div className="w-full max-2xl:h-[calc(100%-9.5rem)]">
      <h1 className="text-4xl font-bold max-xl:text-3xl">{props.title}</h1>
      <div className="flex text-gray-400 items-center mt-5 text-xs font-normal border w-fit h-6">
        <span className="bg-gray-400 h-full px-2 flex text-white text-base">
          <FaUserEdit className="m-auto block" />
        </span>
        <p className="px-2 m-auto border-r">{props.author}</p>
        <p className="px-2 m-auto">
          <span>{props.date}</span>
        </p>
      </div>
      <div className="flex h-full flex-row-reverse gap-5 mt-5 max-xl:flex-col">
        <div className="relative flex-1 max-xl:h-[25vh] max-xl:flex-none ">
          <Image
            fill
            src={props.imgUrl}
            alt={props.title}
            className="object-cover rounded border border-gray-900 max-md:border-gray-400"
            sizes="auto"
            placeholder="blur"
            blurDataURL={props.imgUrl}
          />
        </div>
        <div className="flex-1 border p-5 overflow-scroll rounded max-xl:flex-none max-xl:h-[15rem] max-lg:flex-1">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

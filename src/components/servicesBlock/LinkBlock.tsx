import Link from 'next/link'
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import * as uuid from 'uuid'

type LinkBlockProps = {
  caseLink: string
  groupLink: {
    title: string
    slug: string
    id: string | number
  }[]
}

export const LinkBlock = ({ groupLink, caseLink }: LinkBlockProps) => {
  return (
    <div className="w-full p-5 flex justify-center h-fit max-sm:p-0 max-sm:pb-5">
      <div className="border w-fit top-0 bg-white border-primaryBlack flex gap-2 text-sm max-sm:text-[0.8rem] max-sm:rounded-md max-sm:overflow-hidden">
        {groupLink.map((item, i) => (
          <Link
            className={`px-3 py-2  ${groupLink.length - 1 !== i && 'border-r'}`}
            key={uuid.v4()}
            href={item.slug}
          >
            {item.title}
          </Link>
        ))}
        <Link href={caseLink} key={uuid.v4()}>
          <p className="text-white px-3 py-2  flex items-center gap-2 bg-primaryBlack">
            <BsBriefcase />
            <span>查看案例</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'

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
    <div className="w-full p-5 flex justify-center h-fit">
      <div className="border w-fit top-0 bg-white flex gap-2 text-sm">
        {groupLink.map((item, i) => (
          <>
            <Link
              className={`text-gray-400 hover:text-primaryBlack px-3 py-2  ${
                groupLink.length - 1 !== i && 'border-r'
              }`}
              key={item.id}
              href={item.slug}
            >
              {item.title}
            </Link>
          </>
        ))}
        <Link href={caseLink}>
          <p className="text-white px-3 py-2  flex items-center gap-2 bg-primaryBlack ">
            <BsBriefcase />
            <span>查看案例</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

export const TagLineSection = ({ description }: { description: string }) => {
  return (
    <section className="bg-primaryBlack text-primary text-sm p-2 max-xxl:mt-2 max-md:mt-0">
      <Link className="w-full h-full flex items-center" href="/loancases">
        <h2 className="m-auto relative text-sm flex  items-center">
          <span>{description}</span>
          <span className="ml-2">
            <BsArrowRight className="text-xl" />
          </span>
        </h2>
      </Link>
    </section>
  )
}

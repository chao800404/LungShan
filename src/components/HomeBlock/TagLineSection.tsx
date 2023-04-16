import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const TagLineSection = ({ description }: { description: string }) => {
  return (
    <section className="bg-primaryBlack text-primary text-sm p-2 flex">
      <h2 className="m-auto relative text-sm flex items-center">
        <span>{description}</span>
        <span className="ml-2">
          <BsArrowRight className="text-xl" />
        </span>
      </h2>
    </section>
  )
}

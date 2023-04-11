import React from 'react'

export const TagLineSection = ({ description }: { description: string }) => {
  return (
    <section className="bg-primaryBlack text-primary text-sm p-2 flex">
      <span
        className="
                m-auto 
                relative 
                after:content-['→']  
                after:block 
                after:absolute 
                after:right-[-1.5rem]
                after:w-5 
                after:h-5 
                after:top-0  
                after:text-white
                after:-translate-y-2
                after:text-center
                after:text-lg
                "
      >
        {description}
      </span>
    </section>
  )
}

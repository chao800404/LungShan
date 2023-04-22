import React from 'react'
import { ServiceCoverBlockElement } from './type'
import * as uuid from 'uuid'
import { LinkBlock } from './LinkBlock'
import Image from 'next/image'

export const ServiceCoverBlock: ServiceCoverBlockElement = ({
  title,
  feature,
  linkGroup,
  casePath,
  imgUrl,
}) => {
  return (
    <section className="min-h-screen mx-10 max-lg:mx-0 max-lg:px-5 max-md:min-h-0 max-sm:sticky max-sm:-top-20 max-sm:z-0">
      <div className="px-10 py-5">
        <h1 className="text-7xl m-auto text-center font-bold max-md:text-5xl max-sm:text-3xl">
          {title}
        </h1>
      </div>
      <div className="m-auto w-full flex justify-center gap-2 mb-5 max-w-4xl">
        <div className="text-gray-400 font-mono flex items-center flex-wrap justify-center max-sm:text-sm">
          {feature?.map((item, i) => (
            <div key={uuid.v4()}>
              <span>{item} </span>
              {feature.length - 1 !== i && (
                <span className="px-2 max-sm:px-1">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
      {linkGroup ? (
        <LinkBlock groupLink={linkGroup} caseLink={casePath} />
      ) : (
        <></>
      )}
      <div className="relative h-[80vh] rounded-xl overflow-hidden max-xl:h-[60vh]">
        <Image
          src={imgUrl}
          className="object-cover"
          fill
          alt={title}
          draggable={false}
          priority
        />
      </div>
    </section>
  )
}

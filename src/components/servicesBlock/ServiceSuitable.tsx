import React from 'react'
import * as uuid from 'uuid'
import { ServiceSuitableElement } from './type'

export const ServiceSuitable: ServiceSuitableElement = (props) => {
  return (
    <section className="-mt-10 mx-10 max-lg:px-5 max-lg:mx-0 max-md:mt-10  max-sm:z-10 max-sm:bg-[rgba(255,255,255,0.8)] max-sm:backdrop-blur">
      <div className="px-12 pt-24 pb-12 max-xl:pt-5 max-lg:px-0 max-lg:pt-0 max-sm:pt-5">
        <h3 className="text-3xl font-medium mb-12 text-center">
          {props.title}
        </h3>
        <ul className="grid grid-cols-[repeat(4,_1fr)] border-x border-t max-md:grid-cols-[repeat(2,_1fr)]  max-sm:grid-cols-[100%]">
          {props?.list?.map((item, i) => (
            <li
              className={`${(i + 1) % 4 !== 0 && 'border-r'} border-b`}
              key={uuid.v4()}
            >
              <div>
                <h5 className="py-2 text-lg font-medium px-5 border-b">
                  {item.title}
                </h5>
                <p className="py-2 px-5 font-mono">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

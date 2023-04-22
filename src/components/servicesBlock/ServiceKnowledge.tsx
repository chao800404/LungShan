import React from 'react'
import * as uuid from 'uuid'
import { ServiceKnowledgeElement } from './type'
import Lottie from 'react-lottie-player'
import LOAN_BOOK_AN from '../../../public/lottieJson/loan_book_an.json'

export const ServiceKnowledge: ServiceKnowledgeElement = (props) => {
  return (
    <section className="-mt-10 mx-10 max-lg:mx-0 max-lg:p-5 relative z-20 bg-white max-sm:mt-0 ">
      <div className="px-12 pt-24 pb-12 max-lg:px-0 max-sm:pt-12">
        <h3 className="text-3xl font-medium mb-12 text-center">
          {props.title}
        </h3>
        {props.description && (
          <div className="border rounded p-10 mb-5 flex max-w-5xl m-auto max-md:flex-col max-md:p-5">
            <div className="w-1/5 relative max-md:w-full max-md:h-32">
              <Lottie
                animationData={LOAN_BOOK_AN}
                loop={true}
                play
                className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-72"
              />
            </div>
            <p className="flex-1 ml-5 max-md:ml-0">{props.description}</p>
          </div>
        )}

        <ul className="grid grid-cols-[repeat(3,_1fr)] gap-5 max-md:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[100%] ">
          {props.list.map((item, index) => (
            <li className="border p-5" key={uuid.v4()}>
              <h5 className="py-2 text-lg font-medium border-b mb-3">
                <span className="text-gray-500 mr-2">{`${index + 1}.`}</span>
                <span>{item.title}</span>
              </h5>
              <p className="indent-8">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

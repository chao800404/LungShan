import React from 'react'
import { TfiWrite } from 'react-icons/tfi'
import { ServiceProcessElement } from './type'
import { motion } from 'framer-motion'
import * as uuid from 'uuid'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

export const ServiceProcess: ServiceProcessElement = (props) => {
  return (
    <div className="bg-gray-50 flex-1 rounded-md overflow-hidden border max-sm:border-none max-sm:rounded-none">
      <h3 className="text-primaryBlack bg-slate-100 text-2xl border-b px-5 py-3 flex items-center gap-3 max-sm:text-base max-sm:font-medium">
        <span className="text-xl">
          <TfiWrite />
        </span>
        <span> {props.title}</span>
      </h3>
      <ul className="px-5 py-10 flex flex-col items-center">
        {props.list.map((item, index) => (
          <motion.li
            key={uuid.v4()}
            className="flex flex-col items-center w-full"
          >
            <motion.div
              whileInView={{ scale: 1.05 }}
              initial={{ scale: 1 }}
              className="w-[90%]"
              viewport={{ margin: '-40%', amount: 'some' }}
            >
              <div className="rounded-md w-full border overflow-hidden drop-shadow-md text-center">
                <h3 className="bg-gray-100 text-base py-2">{item.title}</h3>
                <p className="bg-white p-2">{item.description}</p>
              </div>
            </motion.div>
            {index !== props.list.length - 1 && (
              <motion.div className="text-2xl text-gray-300 py-5">
                <BsFillArrowDownSquareFill />
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

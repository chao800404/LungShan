import React from 'react'
import { ServiceTableElement } from './type'
import * as uuid from 'uuid'

export const ServiceTable: ServiceTableElement = (props) => {
  return (
    <div className="flex-1 rounded-md border p-5 h-fit shadow sticky top-24 max-sm:border-none max-sm:rounded-none">
      <h3 className="text-3xl font-bold py-3">
        <span>產業服務比較</span>
      </h3>
      {props.header && (
        <div className="grid grid-cols-[repeat(3,_1fr)] w-full">
          <div className="grid grid-cols-[inherit] col-span-3 bg-slate-300 px-5 py-3 border-b-2 border-white">
            <h3 className="font-medium">{props.header[0].comp_1}</h3>
            <h3 className="font-medium">{props.header[0].name}</h3>
            <h3 className="font-medium">{props.header[0].comp_2}</h3>
          </div>
          {props.body.map((item) => (
            <div
              className="grid grid-cols-[inherit] col-span-3 bg-slate-100  border-b-2 border-white text-base text-gray-500 max-sm:border-none"
              key={uuid.v4()}
            >
              <div className="px-5 py-3">{item.comp_1}</div>
              <div className="bg-slate-200 h-full px-5 py-3">{item.name}</div>
              <div className="px-5 py-3">{item.comp_2}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

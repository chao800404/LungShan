import React from 'react'
import { PopupItem } from './PopupItem'

export const Popup = ({ list }) => {
  return (
    <ul className="rounded-md border-gray-200 bg-white left-0 border-[1.5px] shadow-md pt-4 pb-4 flex flex-col">
      {list.map((item) => (
        <PopupItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

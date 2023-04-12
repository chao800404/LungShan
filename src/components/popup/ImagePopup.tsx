import React, { useCallback, useState } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Swipper } from '../swipper'
import Image from 'next/image'
import { FaRegCheckCircle } from 'react-icons/fa'

type ImagePopupProps = {
  data: {
    image: string
    id: number | string
  }[]
  index: number
  onClose?: React.MouseEventHandler<HTMLDivElement>
}

export const ImagePopup = React.memo(
  ({ data, index, onClose }: ImagePopupProps) => {
    const [focusIndex, setFocusIndex] = useState(index)

    return (
      <div className="bg-[rgba(0,0,0,0.1)] backdrop-blur-sm w-screen h-screen fixed top-0 left-0 z-[999] grid select-none">
        <div className="max-w-6xl h-fit bg-white m-auto self-center justify-self-center border rounded-md shadow-xl overflow-hidden">
          <div className="border-b p-3 flex items-center justify-between">
            <h3 className="font-bold text-gray-300">公司環境照片</h3>
            <div
              onClick={onClose}
              className="text-2xl text-gray-300 hover:text-gray-800 duration-150"
            >
              <AiOutlineCloseSquare />
            </div>
          </div>
          <div className="w-[50rem] h-[25rem] overflow-hidden p-10">
            <div className="relative h-full border-primaryBlack border-2 overflow-hidden">
              <Swipper
                images={data.map((item) => item.image)}
                index={index}
                newPage={focusIndex}
                updatePage={(index) => setFocusIndex(index)}
              />
            </div>
          </div>
          <div className="h-fit p-5 w-[50rem] overflow-scroll overflow-y-hidden border-t">
            <div className="flex gap-2 w-fit">
              {data.map((item, i) => (
                <div
                  className="w-[10rem] h-[5rem] relative"
                  onClick={() => setFocusIndex(i)}
                  key={item.id}
                >
                  {focusIndex === i && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10 text-3xl text-green-500">
                      <FaRegCheckCircle className="block m-auto h-full " />
                    </div>
                  )}
                  <Image
                    alt="image"
                    src={item.image}
                    priority
                    draggable={false}
                    fill
                    className="object-cover"
                    sizes="auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

ImagePopup.displayName = 'ImagePopup'

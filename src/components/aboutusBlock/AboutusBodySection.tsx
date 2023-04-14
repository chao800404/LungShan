import React, { useEffect, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { BaseImageBlock } from '../imageBlock'
import { ImagePopup } from '../popup'

const data = [
  { image: '/images/lungshan_loan_17.jpg', id: 0 },
  { image: '/images/lungshan_loan_18.jpg', id: 1 },
  { image: '/images/lungshan_loan_19.jpg', id: 2 },
  { image: '/images/lungshan_loan_20.jpg', id: 3 },
  { image: '/images/lungshan_loan_21.jpg', id: 4 },
  { image: '/images/lungshan_loan_22.jpg', id: 5 },
  { image: '/images/lungshan_loan_23.jpg', id: 6 },
]

export const AboutusBodySection = () => {
  const [elemWidth, setElemWidth] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const imageBlockRef = useRef<HTMLDivElement>(null)
  const [theX, setTheX] = useState<number>(0)
  const [popupImgUrl, setPopupImgUrl] = useState<string | null>(null)
  const [onDrag, setOnDrag] = useState(false)
  const curImgIndex = useMemo(() => {
    return popupImgUrl
      ? data.findIndex((item) => item.image === popupImgUrl)
      : 0
  }, [popupImgUrl])

  const imageMoveX = (Math.floor(theX) / elemWidth) * 50

  useEffect(() => {
    if (ref && ref.current) {
      const elemRef = ref.current
      const parenElem = elemRef.parentElement
      const { width } = elemRef.getBoundingClientRect()
      const parentElemW = parenElem?.getBoundingClientRect().width || 0
      setElemWidth(width - parentElemW + 8)
    }
  }, [])

  const handleTogglePopup = (imgUrl?: string | null) => {
    if (imgUrl) {
      setPopupImgUrl(imgUrl)
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
      setPopupImgUrl(null)
    }
  }

  return (
    <section className="pr-40 pl-40 pt-20 pb-20">
      {popupImgUrl && (
        <ImagePopup
          data={data}
          index={curImgIndex}
          onClose={() => handleTogglePopup(null)}
        />
      )}

      <div className="grid grid-cols-[repeat(3,minmax(auto,_1fr))] grid-flow-row gap-y-1 gap-x-1">
        <div className="self-center justify-self-center ">
          <p className="p-5 border rounded-md shadow-md">
            資金需求可以來自各種原因，例如生意不景氣、家庭經濟壓力、突發緊急事件等等。
            攏山的使命是為客戶量身打造最佳方案，以讓客戶能夠更輕鬆地度過困難時期。
          </p>
        </div>

        <div className="self-center justify-self-start ml-3">
          <h3 className="text-4xl font-bold">
            攏山服務
            <br />
            提供舒適環境
          </h3>
        </div>
        <div className="self-center justify-self-center">
          {/* <Button className="border-none">
                  <div className="pl-4 pr-4 pt-1 pb-1">查看內容</div>
                </Button> */}
        </div>
        <div className="self-start justify-self-center">
          <p className="p-5 border rounded-md shadow-md">
            在為客戶提供協助時，攏山公司非常重視公司的信譽和道德標準。因此，公司始終堅持誠信、快速和保密三大原則，以確保客戶能夠安心地將財務問題交給公司處理。此外，攏山也非常關注防範詐騙行為，公司將採取嚴格的審核程序，以確保客戶提供的信息都是真實可信的，並且不會違反任何法律法規。
          </p>
        </div>
        <div className="self-start justify-self-center row-start-3">
          <p className="p-5 border rounded-md shadow-md ">
            除了幫助客戶解決財務困難，攏山也認為自己肩負著一份社會責任。我們相信，幫助客戶度過難關將對社會做出貢獻，這將有助於幫助更多需要幫助的人。因此，攏山將繼續致力於為客戶提供最優質的服務，並將公司的理念和價值觀推廣到更多人中。
          </p>
        </div>
        <motion.div className="col-start-2 col-end-4 row-start-2 row-end-4 overflow-hidden border shadow-md p-2 rounded-md">
          <motion.div
            drag="x"
            dragConstraints={{ left: -elemWidth, right: 0 }}
            className="flex w-fit h-full gap-2 cursor-grab will-change-transform"
            whileDrag={{
              cursor: 'grabbing',
            }}
            ref={ref}
            dragDirectionLock
            onUpdate={({ x }) => typeof x === 'number' && setTheX(x)}
            whileInView="show"
            initial="hide"
            onDragStart={() => setOnDrag(true)}
            onDragEnd={() => setOnDrag(false)}
            viewport={{
              margin: '-40%',
              once: true,
            }}
          >
            {data.map((item, index) => (
              <BaseImageBlock
                ref={imageBlockRef}
                key={item.id}
                className={`h-full w-[15rem]`}
                moveX={imageMoveX}
                index={index}
                onClick={(e) => !onDrag && handleTogglePopup(item.image)}
                imgUrl={item.image}
                id={item.id}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

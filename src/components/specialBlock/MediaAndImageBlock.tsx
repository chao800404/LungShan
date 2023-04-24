import React from 'react'
import Image from 'next/image'

type MediaAndImageBlockProps = {
  mediaUrl: string
  imageUrl: string
}

export const MediaAndImageBlock: React.FC<MediaAndImageBlockProps> = ({
  mediaUrl,
  imageUrl,
}) => {
  return (
    <div className="w-[17rem] flex flex-wrap justify-center items-center gap-2 -translate-y-[7.5%] snap-center max-sm:flex-1 max-sm:-translate-y-0 max-sm:w-full">
      <div className="w-full h-[17rem] bg-slate-200 rounded-md  border shadow-sm shadow-primaryBlack relative overflow-hidden max-sm:hidden">
        <Image
          fill
          className="object-cover"
          src={imageUrl}
          alt="image"
          sizes="auto"
          priority
          draggable={false}
        />
      </div>
      <div className="w-full h-[17rem] bg-slate-200 rounded-md  overflow-hidden border shadow-sm shadow-primaryBlack relative">
        <div className="w-[120%]">
          <video
            src={mediaUrl}
            muted
            playsInline
            typeof="video/mp4"
            loop={true}
            autoPlay
            height="100%"
            controls={false}
          />
        </div>
      </div>
    </div>
  )
}

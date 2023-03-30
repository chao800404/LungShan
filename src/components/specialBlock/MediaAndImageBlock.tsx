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
    <div className="w-[17rem] flex flex-wrap justify-center items-center gap-2 -translate-y-[7.5%] snap-center">
      <div className="w-full h-[17rem] bg-slate-200 rounded-md  border shadow-sm shadow-primaryBlack relative overflow-hidden">
        <Image
          fill
          className="object-cover"
          src={imageUrl}
          alt="image"
          sizes="auto"
          priority
        />
      </div>
      <div className="w-full h-[17rem] bg-slate-200 rounded-md  overflow-hidden border shadow-sm shadow-primaryBlack relative">
        <video
          src={mediaUrl}
          width="100%"
          muted={true}
          loop={true}
          height="auto"
          autoPlay
        />
      </div>
    </div>
  )
}

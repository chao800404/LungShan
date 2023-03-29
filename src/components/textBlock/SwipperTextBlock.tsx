import React from 'react'

type SwipperTextBlockProps = Record<
  'title' | 'description' | 'subTitle',
  string
> & {
  base?: boolean
}

export const SwipperTextBlock: React.FC<SwipperTextBlockProps> = ({
  title,
  description,
  subTitle,
  base = true,
}) => {
  const splitText = (text: string) => {
    const hasBold = text?.includes(':')
    if (hasBold) {
      const arrText = text.split(';')
      return (
        <>
          <span>{`${arrText[0]}:`}</span>
          <br />
          <span>{arrText[1]}</span>
        </>
      )
    } else {
      return text
    }
  }

  const bgColor = base ? 'bg-primaryOrange' : 'bg-primaryBrown'
  const titleColor = base ? 'text-yellow-100 ' : 'text-primaryBlack'

  return (
    <div
      className={`relative w-[17rem] border-l  rounded-lg border shadow-sm shadow-primaryBlack pl-5 pr-5 pt-14 pb-14 ${bgColor}`}
    >
      <h3 className={` font-black text-3xl mb-5 ${titleColor}`}>{title}</h3>
      <div className="h-4/6">
        <p className="text-primary font-black text-2xl">{description}</p>
      </div>
      <p className={`font-black text-[1.2rem] ${titleColor}`}>
        {splitText(subTitle)}
      </p>
    </div>
  )
}

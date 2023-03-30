import React from 'react'

type SwipperTextBlockProps = Record<
  'title' | 'description' | 'subTitle',
  string
> & {

  backgroundColor?: string
  titleColor?: string
  descriptionColor?: string
}

export const SwipperTextBlock: React.FC<SwipperTextBlockProps> = ({
  title,
  description,
  subTitle,
  titleColor = 'text-yellow-100',
  backgroundColor = 'bg-primaryOrange',
  descriptionColor = 'text-primary',
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

  return (
    <div
      className={`relative w-[17rem] border-l  rounded-lg border snap-center shadow-sm shadow-primaryBlack pl-5 pr-5 pt-14 pb-14 ${backgroundColor}`}
    >
      <h3 className={` font-black text-3xl mb-5 ${titleColor}`}>{title}</h3>
      <div className="h-4/6">
        <p className={`${descriptionColor} font-black text-2xl`}>
          {description}
        </p>
      </div>
      <p className={`font-black text-[1.2rem] ${titleColor}`}>
        {splitText(subTitle)}
      </p>
    </div>
  )
}

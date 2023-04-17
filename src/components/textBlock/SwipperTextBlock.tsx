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
      className={`relative w-[17rem] h-auto border-l rounded-lg border snap-center shadow-sm shadow-primaryBlack pl-5 pr-5 pt-14 pb-14 max-sm:pt-5 max-sm:h-64 max-sm:w-full ${backgroundColor}`}
    >
      <h3
        className={`font-bold text-2xl mb-5 max-sm:text-xl max-sm:font-medium ${titleColor}`}
      >
        {title}
      </h3>
      <div className="h-4/6 max-sm:h-3/6">
        <p
          className={`${descriptionColor} font-medium text-2xl max-sm:text-base max-sm:font-normal`}
        >
          {description}
        </p>
      </div>
      <p
        className={`font-medium text-[1.2rem] ${titleColor} max-sm:text-base max-sm:font-normal`}
      >
        {splitText(subTitle)}
      </p>
    </div>
  )
}

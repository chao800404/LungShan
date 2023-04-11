import React from 'react'

type ScamPreventionHeaderProps = {
  title: string
  subtitle: string
}

export const ScamPreventionHeader = ({
  title,
  subtitle,
}: ScamPreventionHeaderProps) => {
  return (
    <h1 className="font-black col-span-2">
      <i>
        <span className="text-5xl">{title}</span>
        <span className="block">{subtitle}</span>
      </i>
    </h1>
  )
}

import { motion } from 'framer-motion'
import React from 'react'

type ButtonProps = {
  children: JSX.Element
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.98,
        y: 1,
      }}
      className={`text-primary bg-black rounded-md shadow-sm shadow-black border-[1px] border-gray-500 font-bold text-sm ${className}`}
      {...otherProps}
    >
      {children}
    </motion.button>
  )
}

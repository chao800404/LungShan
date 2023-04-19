import React from 'react'
import { motion } from 'framer-motion'
import { InputProps } from './type'

export const TextArea = ({
  inputTitle,
  type,
  name,
  id,
  value,
  onChange,
}: InputProps) => {
  const [focus, setFocus] = React.useState(false)

  return (
    <div className="col-span-2 flex flex-col max-sm:col-span-1">
      <motion.label
        animate={{ x: !focus && !value ? 12 : 0, y: !focus && !value ? 45 : 0 }}
        htmlFor={id}
        initial={{ x: 12, y: 45 }}
        className={`block will-change-transform ${
          focus ? 'text-primaryBlack' : ' text-gray-300'
        }`}
        transition={{ type: 'just' }}
      >
        {inputTitle}
      </motion.label>
      <textarea
        id={id}
        name={id}
        className="min-h-[10rem] p-3 border resize-none rounded-md mt-2"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange as any}
        value={value || ''}
      />
    </div>
  )
}

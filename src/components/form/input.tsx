import React from 'react'
import { motion } from 'framer-motion'
import { InputProps } from './type'

export const Input = ({
  inputTitle,
  type,
  name,
  id,
  onChange,
  value,
}: InputProps) => {
  const [focus, setFocus] = React.useState(false)

  return (
    <motion.div className="flex flex-col grop">
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
      <input
        className="border rounded-md text-base p-3 mt-2 form-input autofill:bg-white"
        type={type}
        name={name}
        id={id}
        onFocus={() => setFocus((prev) => !prev)}
        onBlur={() => setFocus((prev) => !prev)}
        onChange={onChange}
        value={value || ''}
      />
    </motion.div>
  )
}

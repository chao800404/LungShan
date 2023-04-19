import React from 'react'
import { motion } from 'framer-motion'
import { InputProps } from './type'

type SelectProps = {
  options: string[]
} & InputProps

export const Select = ({
  options,
  id,
  inputTitle,
  onChange,
  value,
}: SelectProps) => {
  const [focus, setFocus] = React.useState(false)

  return (
    <div>
      <motion.label
        animate={{ x: !focus && !value ? 12 : 0, y: !focus && !value ? 45 : 0 }}
        htmlFor={id}
        initial={{ x: 12, y: 45 }}
        className={`block will-change-transform ${
          focus ? 'text-primaryBlack' : ' text-gray-300'
        } `}
        transition={{ type: 'just' }}
      >
        {inputTitle}
      </motion.label>

      <select
        className="border rounded-md text-base p-3 mt-2 w-full appearance-none"
        name={id}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange as any}
        value={value || ''}
      >
        <option value=""></option>
        {options.map((item, i) => (
          <option key={`${i}_${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

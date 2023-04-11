import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LoanCasesSwiper } from './LoanCasesSwiper'
import * as uuid from 'uuid'
import { BlockComponent } from './type'
import { useMouseStore } from '@/store'
import { shallow } from 'zustand/shallow'

const tags = ['合法經營', '簡易迅速', '隱密保密', '過件率高', '專人安排']

export const LoanCasesCover: BlockComponent = (props) => {
  const [anEnd, setAnEnd] = useState(false)
  const setColor = useMouseStore((state) => state.setColor, shallow)

  return (
    <motion.div
      className="origin-left h-screen bg-primaryBlack rounded-br-2xl rounded-bl-2xl pt-60"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      onMouseEnter={() => setColor('White')}
      onMouseLeave={() => setColor('Default')}
    >
      <div className="px-40">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-6xl font-black"
        >
          攏山借貸案例
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="mt-5"
          onAnimationComplete={() => setAnEnd(true)}
        >
          <span>『</span>
          擁有豐富經驗，量身打造方案過件率80%，符合法定利息不額外收費
          <span>』</span>
        </motion.p>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="pl-40 mt-5 flex items-center gap-3"
      >
        {tags.map((item) => (
          <p key={uuid.v4()} className="p-2 border rounded drop-shadow-sm">
            {item}
          </p>
        ))}
      </motion.div>
      {anEnd && <LoanCasesSwiper {...props} />}
    </motion.div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'

type TapProps = {
  label: string
  active: boolean
  isLast: boolean
  isFirst: boolean
  onClick: () => void
}

type LabelContent = {
  title: string
  id: number
  content: {
    id: number
    question: string
    answer: string
  }[]
}

type TabContainerProps = {
  list: LabelContent[]
  labelIndex: number
  updateLabelIndex: (index: number) => void
}

const Tab = ({ label, active, isLast, isFirst, onClick }: TapProps) => {
  return (
    <button
      className={`px-4 py-2 text-[1rem] font-black whitespace-nowrap flex-1 ${
        !isFirst && active && 'border-l'
      } ${!isLast && active && 'border-r'} ${
        active
          ? 'bg-gray-50 relative border-gray-300 z-10 rounded-tr-md rounded-tl-md shadow-md  shadow-[rgba(0,0,0,0.2)]'
          : 'bg-gray-200 border-b border-gray-300'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const TabContent = ({ label }: { label: LabelContent['content'] }) => {
  return (
    <div className="p-4 bg-gray-50">
      {label.map((item) => (
        <details className={`border-b pt-2 pb-2 pl-3`}>
          <summary id="question_and_answer" className="font-black text-lg">
            {item.question}
          </summary>
          <p className="pl-8 pr-8 pt-1 pb-2 text-gray-500 font-primary text-justify">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  )
}

type TabPanelProps = {
  activeIndex: number
  children: JSX.Element[]
}

export const TabPanel = ({ activeIndex, children }: TabPanelProps) => {
  return <div className="relative z-20">{children[activeIndex]}</div>
}

export const TabContainer = ({
  list,
  labelIndex,
  updateLabelIndex,
}: TabContainerProps) => {
  return (
    <div className="w-full h-full rounded-md overflow-hidden border border-gray-300 shadow-sm">
      <div className="flex bg-gray-200">
        {list.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.title}
            isLast={index === list.length - 1}
            isFirst={index === 0}
            active={index === labelIndex}
            onClick={() => updateLabelIndex(index)}
          />
        ))}
      </div>
      <TabPanel activeIndex={labelIndex}>
        {list.map((tab) => (
          <TabContent key={tab.id} label={tab.content} />
        ))}
      </TabPanel>
    </div>
  )
}

import React from 'react'

type ExmplesProps = {
  setLink: React.Dispatch<React.SetStateAction<string>>
}

export const Examples = ({ setLink }: ExmplesProps) => {
  return (
    <div className="flex mt-20 sm:gap-[25px] justify-center sm:text-base text-[10px] gap-[15px]">
      <button
        className="flex items-start text-luxms-gray"
        onClick={() => setLink('https://rcslabs.ru/ttrp1.json')}
      >
        1 вариант
      </button>
      <button
        className="flex items-start text-luxms-gray"
        onClick={() => setLink('https://rcslabs.ru/ttrp2.json')}
      >
        2 вариант
      </button>
      <button
        className="flex items-start text-luxms-gray"
        onClick={() => setLink('https://rcslabs.ru/ttrp3.json')}
      >
        3 вариант
      </button>
      <button
        className="flex items-start text-luxms-gray"
        onClick={() => setLink('https://rcslabs.ru/ttrp4.json')}
      >
        4 вариант
      </button>
      <button
        className="flex items-start text-luxms-gray"
        onClick={() => setLink('https://rcslabs.ru/ttrp5.json')}
      >
        5 вариант
      </button>
    </div>
  )
}

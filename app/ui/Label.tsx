import React, { useState, useEffect } from 'react'

import { ArrowDown } from '../icons/ArrowDown'
import { ArrowUp } from '../icons/ArrowUp'
import { formatNumber } from '../utlis/formatNumber'

type LabelProps = {
  result: number
  left: string
}

export const Label = ({ result, left }: LabelProps) => {
  const formattedResult = formatNumber(result)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  // Корректировка смещения при изменении разрешения
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const leftValue = parseInt(left, 10)
  const adjustedLeft = windowWidth <= 640 ? leftValue - 30 : leftValue

  const positiveLabel = (
    <>
      {<ArrowUp />}
      <p className="ml-0.5">+{formattedResult}</p>
    </>
  )

  const negativeLabel = (
    <>
      {<ArrowDown />}
      <p className="ml-0.5">{formattedResult}</p>
    </>
  )

  return (
    <div
      className={`flex absolute justify-center items-center py-[1px] min-w-12 px-2 rounded-[16px] text-white font-bold text-[14px] sm:last:translate-x-0 last:-translate-x-8 transition-transform 
      ${result > 0 ? 'bg-luxms-green' : result < 0 ? 'bg-luxms-orange' : 'bg-luxms-gray'}`}
      style={{ left: `${adjustedLeft}px` }}
    >
      {result > 0 ? positiveLabel : result < 0 ? negativeLabel : formattedResult}
    </div>
  )
}

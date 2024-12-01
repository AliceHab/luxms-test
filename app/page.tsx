'use client'
import { useState, useEffect, useMemo } from 'react'

import { NormativeBarChart } from './ui/NormativeBarChart'
import { BarChart } from './ui/BarChart'
import { ThreeDots } from './icons/ThreeDots'
import { Legend } from './ui/Legend'
import { Label } from './ui/Label'
import { Examples } from './ui/Examples'
import { Arrow } from './ui/Arrow'

import { calculateHeights, Data } from './utlis/calculateHeightsAndSum'
import { INSTANCE_MAX_HEIGHT } from './utlis/constants'
import { Menu } from './ui/Menu'

export default function Page() {
  const [data, setData] = useState<Data | null>(null)
  const [link, setLink] = useState<string>('https://rcslabs.ru/ttrp1.json')
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(link)
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [link])

  const heights = useMemo(() => calculateHeights(data, 'heights'), [data])
  const sums = useMemo(() => calculateHeights(data, 'sums'), [data])

  // Рассчет вершины столбца
  const calculateApex = (total: number, maxValue: number) => {
    const apex =
      maxValue > 0 && !isNaN(total)
        ? Math.round(INSTANCE_MAX_HEIGHT - (total / maxValue) * INSTANCE_MAX_HEIGHT)
        : 0

    return apex === INSTANCE_MAX_HEIGHT ? 210 : apex // Корректировка, если вернулась минимальная высота
  }

  const columnTops = useMemo(() => {
    if (heights && sums) {
      return {
        dev: calculateApex(sums.devSum, heights.maxValue),
        test: calculateApex(sums.testSum, heights.maxValue),
        prod: calculateApex(sums.prodSum, heights.maxValue),
      }
    }
    return { dev: 0, test: 0, prod: 0 }
  }, [heights, sums])

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center">
      <div className="max-w-[600px] relative">
        <div className="flex items-center w-full justify-between">
          <h1 className="font-normal sm:text-base text-sm text-luxms-gray">
            Количество пройденных тестов {data?.title}
          </h1>
          <button onClick={toggleMenu} className="w-fit h-fit">
            <ThreeDots />
          </button>
          <Menu setLink={setLink} isOpen={openMenu} closeMenu={toggleMenu} />
        </div>
        {data ? (
          <div className="sm:ml-7 relative">
            <div className="flex mt-16 justify-start items-start w-full sm:-translate-y-3 -translate-y-2 z-30 relative">
              <Label result={-((sums?.devSum ?? 0) - (sums?.testSum ?? 0))} left="85" />
              <Label result={-((sums?.testSum ?? 0) - (sums?.prodSum ?? 0))} left="230" />
            </div>

            <div className="flex space-x-4 mt-[70px] items-end relative sm:gap-[45px] gap-[25px]">
              <BarChart heights={heights?.devHeight ?? 0} data={data.dev} instance="dev" />
              <BarChart heights={heights?.testHeight ?? 0} data={data.test} instance="test" />
              <BarChart heights={heights?.prodHeight ?? 0} data={data.prod} instance="prod" />
              <NormativeBarChart heights={heights?.normativeHeight ?? 0} normative={data.norm} />
            </div>

            <Arrow columnTops={columnTops} />
          </div>
        ) : (
          <p className="text-luxms-gray">Загрузка данных...</p>
        )}
        <Legend />
        <Examples setLink={setLink} />
      </div>
    </main>
  )
}

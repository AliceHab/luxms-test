'use client'
import { useState, useEffect } from 'react'

import { NormativeColumn } from './ui/NormativeColumn'
import { TestResultColumn } from './ui/TestResultColumn'
import { ThreeDots } from './icons/ThreeDots'
import { Legend } from './ui/Legend'
import { Label } from './ui/Label'
import { Examples } from './ui/Examples'

import { calculateHeights, Data } from './utlis/calculateHeightsAndSum'

export default function Page() {
  const [data, setData] = useState<Data | null>(null)
  const [link, setLink] = useState<string>('https://rcslabs.ru/ttrp1.json')

  console.log(data)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(link)
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [link])

  const heights = calculateHeights(data, 'heights')
  const sums = calculateHeights(data, 'sums')

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center">
      <div className="max-w-[600px]">
        <div className="flex items-center w-full justify-between">
          <h1 className="font-normal sm:text-base text-sm text-luxms-gray">
            Количество пройденных тестов {data?.title}
          </h1>
          <ThreeDots />
        </div>
        {data ? (
          <div className="sm:ml-7">
            <div className="flex mt-12 sm:ml-[80px] ml-[50px] sm:gap-[80px] gap-[50px] justify-start items-start w-full">
              <Label result={-((sums?.devSum ?? 0) - (sums?.testSum ?? 0))} />
              <Label result={-((sums?.testSum ?? 0) - (sums?.prodSum ?? 0))} />
            </div>
            <div className="flex space-x-4 mt-[50px] items-end relative sm:gap-[45px] gap-[25px]">
              <TestResultColumn heights={heights?.devHeight ?? 0} data={data.dev} instance="dev" />

              <TestResultColumn
                heights={heights?.testHeight ?? 0}
                data={data.test}
                instance="test"
              />

              <TestResultColumn
                heights={heights?.prodHeight ?? 0}
                data={data.prod}
                instance="prod"
              />

              <NormativeColumn heights={heights?.normativeHeight ?? 0} normative={data.norm} />
            </div>
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

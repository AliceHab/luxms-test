import { SEGMENT_MIN_HEIGHT } from '../utlis/constants'

type BarChartProps = {
  data: Record<string, number>
  heights: number
  instance: string
}

export const BarChart = ({ data, heights, instance }: BarChartProps) => {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0)

  return (
    <div className="flex flex-col items-center">
      <div
        className="sm:w-[80px] w-[60px] bg-gray-100 flex flex-col rounded-[10px] overflow-hidden"
        style={{ height: `${heights}px` }}
      >
        {Object.entries(data).map(([key, value]) => {
          const calculatedHeight = (value / total) * heights
          const height = isNaN(calculatedHeight)
            ? SEGMENT_MIN_HEIGHT
            : Math.max(calculatedHeight, SEGMENT_MIN_HEIGHT)

          return (
            <div
              key={key}
              style={{ height: `${height}px`, minHeight: '20px' }}
              className={`w-full flex items-center justify-center text-white text-sm font-bold font-roboto transition-all duration-200 ${
                key === 'front'
                  ? 'bg-luxms-blue hover:bg-[rgb(74,171,213)]'
                  : key === 'back'
                  ? 'bg-luxms-fiolet hover:bg-[#8a548c]'
                  : 'bg-luxms-pink hover:bg-[#cf4b89]'
              }`}
            >
              <p>{value}</p>
            </div>
          )
        })}
      </div>
      <p className="text-luxms-gray mt-3 font-normal text-xs">{instance}</p>
    </div>
  )
}

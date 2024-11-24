type NormativeBarChartProps = {
  heights: number
  normative: number
}

export const NormativeBarChart = ({ heights, normative }: NormativeBarChartProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          height: `${heights}px`,
        }}
        className={`sm:w-[80px] w-[60px] bg-stripes hover:opacity-80 rounded-[10px] overflow-hidden flex items-center justify-center transition-all duration-200`}
      >
        <div className="text-luxms-gray font-bold font-roboto text-sm flex items-center justify-center px-3 py-1 bg-white rounded-[5px]">
          <p>{normative}</p>
        </div>
      </div>
      <p className="text-luxms-gray mt-3 font-normal text-[10px]">норматив</p>
    </div>
  )
}

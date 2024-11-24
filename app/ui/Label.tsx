import { ArrowDown } from '../icons/ArrowDown'
import { ArrowUp } from '../icons/ArrowUp'
import { formatNumber } from '../utlis/formatNumber'

type LabelProps = {
  result: number
}

export const Label = ({ result }: LabelProps) => {
  const formattedResult = formatNumber(result)

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
      className={`mx-[6px] flex justify-center items-center py-[1px] min-w-12 px-2 rounded-[16px] text-white font-bold text-[14px] 
        ${result > 0 ? 'bg-luxms-green' : result < 0 ? 'bg-luxms-orange' : 'bg-luxms-gray'}`}
    >
      {result > 0 ? positiveLabel : result < 0 ? negativeLabel : formattedResult}
    </div>
  )
}

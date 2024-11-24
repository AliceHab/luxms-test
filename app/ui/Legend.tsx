export const Legend = () => {
  return (
    <div className="flex mt-10 sm:gap-[30px] gap-[15px] justify-center">
      <div className="flex items-start">
        <div className="bg-luxms-blue rounded w-4 h-4"></div>
        <p className="text-luxms-gray ml-2 text-[10px]">Клиентская часть</p>
      </div>

      <div className="flex items-start">
        <div className="bg-luxms-fiolet rounded w-4 h-4"></div>
        <p className="text-luxms-gray ml-2 text-[10px]">Серверная часть</p>
      </div>

      <div className="flex items-start">
        <div className="bg-luxms-pink rounded w-4 h-4"></div>
        <p className="text-luxms-gray ml-2 text-[10px]">База данных</p>
      </div>
    </div>
  )
}

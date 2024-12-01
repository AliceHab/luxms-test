import React, { useEffect, useRef } from 'react'

type MenuProps = {
  setLink: React.Dispatch<React.SetStateAction<string>>
  isOpen: boolean
  closeMenu: () => void
}

export const Menu = ({ setLink, isOpen, closeMenu }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeMenu])

  if (!isOpen) return null

  return (
    <div
      className={`w-36 z-40 absolute gap-2 py-2 right-0 top-0 flex flex-col border transition-all duration-200 shadow-md rounded-md bg-white border-luxms-gray ${
        isOpen ? '' : 'hidden'
      }`}
      ref={menuRef}
    >
      <button
        onClick={() => setLink('https://rcslabs.ru/ttrp1.json')}
        className="hover:bg-slate-100 w-full h-full px-2 py-1"
      >
        <p className="text-luxms-gray ml-2 text-[10px] text-left truncate">OS Doors</p>
      </button>
      <button
        onClick={() => setLink('https://rcslabs.ru/ttrp2.json')}
        className="hover:bg-slate-100 w-full h-full px-2 py-1"
      >
        <p className="text-luxms-gray ml-2 text-[10px] text-left truncate">OS Bombuntu</p>
      </button>
      <button
        onClick={() => setLink('https://rcslabs.ru/ttrp3.json')}
        className="hover:bg-slate-100 w-full h-full px-2 py-1"
      >
        <p className="text-luxms-gray ml-2 text-[10px] text-left truncate">Mibre Office</p>
      </button>
      <button
        onClick={() => setLink('https://rcslabs.ru/ttrp4.json')}
        className="hover:bg-slate-100 w-full h-full px-2 py-1"
      >
        <p className="text-luxms-gray ml-2 text-[10px] text-left truncate">LoWtEx</p>
      </button>
      <button
        onClick={() => setLink('https://rcslabs.ru/ttrp5.json')}
        className="hover:bg-slate-100 w-full h-full px-2 py-1"
      >
        <p className="text-luxms-gray ml-2 text-[10px] text-left truncate">W$ POS</p>
      </button>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { ArrowTip } from './ArrowTip'

type ArrowProps = {
  columnTops: { dev: number; test: number; prod: number }
}

type LineConfig = {
  horizontalLines: Array<{
    x1: number
    y1: number
    x2: number
    y2: number
  }>
  verticalLines: Array<{
    x1: number
    y1: number
    x2: number
    y2: number
    markerEnd?: string
  }>
}

export const Arrow = ({ columnTops }: ArrowProps) => {
  const offset = 60 // Смещение вертикальных линий
  const transition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  }
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const isSmallScreen = windowWidth <= 640

  // Конфигурация для разных размеров
  const config: { small: LineConfig; large: LineConfig } = {
    small: {
      horizontalLines: [
        { x1: 30, y1: 0, x2: 120, y2: 0 },
        { x1: 145, y1: 0, x2: 230, y2: 0 },
      ],
      verticalLines: [
        { x1: 30, y1: 0, x2: 30, y2: columnTops.dev + offset },
        {
          x1: 120,
          y1: 0,
          x2: 120,
          y2: columnTops.test + offset,
          markerEnd: 'url(#arrowtip)',
        },
        { x1: 145, y1: 0, x2: 145, y2: columnTops.test + offset },
        {
          x1: 230,
          y1: 0,
          x2: 230,
          y2: columnTops.prod + offset,
          markerEnd: 'url(#arrowtip)',
        },
      ],
    },
    large: {
      horizontalLines: [
        { x1: 40, y1: 0, x2: 170, y2: 0 },
        { x1: 190, y1: 0, x2: 320, y2: 0 },
      ],
      verticalLines: [
        { x1: 40, y1: 0, x2: 40, y2: columnTops.dev + offset },
        {
          x1: 170,
          y1: 0,
          x2: 170,
          y2: columnTops.test + offset,
          markerEnd: 'url(#arrowtip)',
        },
        { x1: 190, y1: 0, x2: 190, y2: columnTops.test + offset },
        {
          x1: 320,
          y1: 0,
          x2: 320,
          y2: columnTops.prod + offset,
          markerEnd: 'url(#arrowtip)',
        },
      ],
    },
  }

  const currentConfig = isSmallScreen ? config.small : config.large

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-200"
      width="100%"
      height="100%"
    >
      <defs>
        <ArrowTip />
      </defs>
      {/* Горизонтальные линии */}
      {currentConfig.horizontalLines.map((line, index) => (
        <motion.line
          key={`h-line-${index}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#898290"
          strokeWidth="1"
          initial={{ y2: line.y2 }}
          animate={{ y2: line.y2 }}
          transition={transition}
        />
      ))}
      {/* Вертикальные линии */}
      {currentConfig.verticalLines.map((line, index) => (
        <motion.line
          key={`v-line-${index}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#898290"
          strokeWidth="1"
          markerEnd={line.markerEnd}
          initial={{ y2: line.y2 }}
          animate={{ y2: line.y2 }}
          transition={transition}
        />
      ))}
    </svg>
  )
}

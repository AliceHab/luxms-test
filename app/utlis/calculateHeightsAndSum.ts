import { INSTANCE_MAX_HEIGHT, INSTANCE_MIN_HEIGHT } from '../utlis/constants'

export type Sums = {
  devSum: number
  testSum: number
  prodSum: number
}

export type Heights = {
  devHeight: number
  testHeight: number
  prodHeight: number
  normativeHeight: number
  maxValue: number
}

export type Data = {
  title: string
  dev: Record<string, number>
  test: Record<string, number>
  prod: Record<string, number>
  norm: number
}

export function calculateHeights(data: Data | null, mode: 'heights'): Heights | null
export function calculateHeights(data: Data | null, mode: 'sums'): Sums | null
export function calculateHeights(
  data: Data | null,
  mode: 'heights' | 'sums' = 'heights'
): Heights | Sums | null {
  if (!data) return null

  const devSum = Object.values(data.dev).reduce((acc, value) => acc + value, 0)
  const testSum = Object.values(data.test).reduce((acc, value) => acc + value, 0)
  const prodSum = Object.values(data.prod).reduce((acc, value) => acc + value, 0)
  const normative = data.norm

  if (mode === 'sums') {
    return {
      devSum,
      testSum,
      prodSum,
    }
  }

  if (mode === 'heights') {
    const maxValue = Math.max(devSum, testSum, prodSum, normative)

    if (maxValue === 0) {
      return {
        devHeight: INSTANCE_MIN_HEIGHT,
        testHeight: INSTANCE_MIN_HEIGHT,
        prodHeight: INSTANCE_MIN_HEIGHT,
        normativeHeight: INSTANCE_MIN_HEIGHT,
        maxValue: 0,
      }
    }

    const devHeight = Math.max((devSum / maxValue) * INSTANCE_MAX_HEIGHT, INSTANCE_MIN_HEIGHT)
    const testHeight = Math.max((testSum / maxValue) * INSTANCE_MAX_HEIGHT, INSTANCE_MIN_HEIGHT)
    const prodHeight = Math.max((prodSum / maxValue) * INSTANCE_MAX_HEIGHT, INSTANCE_MIN_HEIGHT)
    const normativeHeight = Math.max(
      (normative / maxValue) * INSTANCE_MAX_HEIGHT,
      INSTANCE_MIN_HEIGHT
    )

    return {
      devHeight,
      testHeight,
      prodHeight,
      normativeHeight,
      maxValue,
    }
  }
  return null
}

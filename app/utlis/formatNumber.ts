export const formatNumber = (num: number) => {
  if (Math.abs(num) >= 1000) {
    // Округляем до ближайшего целого числа тысяч
    const formatted = Math.round(num / 100) / 10
    return Number.isInteger(formatted) ? `${formatted}к` : `${formatted}к`
  }
  return num
}

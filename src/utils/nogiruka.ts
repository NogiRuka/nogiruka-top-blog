/**
 * @description 一些工具函数
 * @NogiRuka
 */

/**
 * @description 生成1到n的整数数组
 * @param number
 * @returns number[]
 */
export const generateNumberArray = (n: number): number[] => {
  return Array.from({ length: n }, (_, index) => index + 1)
}

/**
 * @description 随机获取数组中的一个元素
 * @param T[]
 * @returns randomItem: T; randomIndex: number
 */
export const getRandom = <T>(arr: T[]): { randomItem: T; randomIndex: number } => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const randomItem = arr[randomIndex]
  if (randomItem === undefined) {
    throw new Error('randomItem is undefined')
  }
  if (randomItem === null) {
    throw new Error('randomItem is null')
  }
  return { randomItem, randomIndex }
}


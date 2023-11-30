/**
 * @desc 函数节流
 * @param func 回调函数
 * @param limit 时间限制
 * @description 无论用户触发事件多少次，附加的函数在给定的时间间隔内只会执行一次。（即：回调函数在规定时间内最多执行一次）
 */
export default function throttle(func: Function, limit: number = 500) {
  let inThrottle: boolean = false // 是否处于节流限制时间内

  return function (...args: any) {
    const _this: any = args.shift()

    // 跳出时间限制
    if (!inThrottle) {
      func.apply(_this, args) // 执行回调
      inThrottle = true
      // 开启定时器计时
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

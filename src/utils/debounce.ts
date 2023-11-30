/**
 * @desc 函数防抖
 * @param func 回调函数
 * @param delay 延迟执行毫秒数
 * @description 无论用户触发多少次事件，对应的回调函数只会在事件停止触发指定事件后执行。（即：回调函数在事件停止触发指定时间后被调用）
 */
export default function debounce(func: Function, delay: number = 500) {
  let timer: any = null // 定时器

  return function (...args: any) {
    const _this: any = args.shift() // 记录 this 值,防止在回调函数中丢失

    // 如果定时器存在，则清除定时器(如果没有,也没必要进行处理)
    if (timer)
      clearTimeout(timer)

    timer = setTimeout(() => {
      // 防止 this 值变为 window
      func.apply(_this, args)
    }, delay)
  }
}

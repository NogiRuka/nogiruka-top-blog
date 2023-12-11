import moment from 'moment'

// https://blog.csdn.net/qq_27936291/article/details/125994086?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-125994086-blog-120976408.235^v39^pc_relevant_3m_sort_dl_base4&spm=1001.2101.3001.4242.2&utm_relevant_index=4

/**
 * @param time 时间戳
 * @returns 格式化时间
 * @description YYYY-MM-DD HH:mm
 */
export const timeFormatByA = (time: string | number | Date) => {
  return moment(time).format('YYYY-MM-DD HH:mm')
}

/**
 * @param time 时间戳
 * @returns 格式化时间
 * @description YYYY-MM-DD
 */
export const timeFormatByB = (time: string | number | Date) => {
  return moment(time).format('YYYY-MM-DD')
}

/**
 * @param time 时间戳
 * @returns 格式化时间
 * @description YYYY-MM-DD HH:mm:ss
 */
export const timeFormatByC = (time: string | number | Date) => {
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

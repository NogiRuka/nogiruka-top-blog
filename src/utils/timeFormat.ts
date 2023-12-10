import moment from 'moment'

const timeFormat = (time: string | number | Date) => {
  return moment(time).format('YYYY-MM-DD HH:mm')
}

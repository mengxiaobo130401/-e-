
/**
*  date   日期  如20190101  转换成  2019-01-01
* */
export function formatTime (date) {
  return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2)
}

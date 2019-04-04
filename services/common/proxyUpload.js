import {
  post,
  get,
  del,
  put
} from './ajax'

import '../../config/global'

const proxyUrl = global.POST_URL

export function postLesson (url, data) {
  return post(proxyUrl + url, data)
}

export function delLesson (url, data) {
  return del(proxyUrl + url, data)
}

export function putLesson (url, data) {
  return put(proxyUrl + url, data)
}

export function getLesson (url, data) {
  return get(proxyUrl + url, data)
}

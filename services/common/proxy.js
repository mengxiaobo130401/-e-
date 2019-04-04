import {
  post,
  get,
  del,
  put
} from './ajax'
const app = getApp();

const proxyUrl = app.globalData.POST_URL

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

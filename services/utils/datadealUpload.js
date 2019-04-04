import {
  getLesson,
  delLesson,
  putLesson,
  postLesson
} from '../common/proxyUpload'
import {
  Message
} from 'iView'
import Qs from 'qs'

const v = 1.0
const format = 'json'
const app_key = '6a22c44ba6dfd7b26a88d2b79afc91bb'
const source_id = 'nice_1653'
const verifyUrl = 'http://api.me/API/v1/Sgin/getSgin' // 验签访问地址

export function postGainVerify (url, data, method) {
  var params = paramsDeal(data)
  //   postLesson(verifyUrl, params).then(data => {
  // if(data.code && data.code == 8001) {
  //   localStorage.setItem('nice_token', data.result.token);
  //   params = paramsDeal(data);
  // }
  //   if (verify(old_data, data)) {
  switch (method) {
    case 'GET':
      return getLesson(url, params)
          case 'POST':
      return postLesson(url, params)
          case 'DELETE':
      return delLesson(url, params)
          case 'PUT':
      return putLesson(url, params)
          default:
      break
        }
  //   } else {
  //     this.$Message.error(data.msg);
  //   }
  // })
  // .catch(err => {
  //   this.$Message.error(err);
  // });
}

export function paramsDeal (params) {
  params = params === undefined ? {} : params
  // 携带user_id和token
  var value = dd.getStorageSync('parantInfo')
  if (value) {
    params.userid = value.user_id
    params.user_id = value.user_id
    params.token = value.token
    params.is_parent_port = 1
  }

  var data = {
    // body: params,
    format: format,
    timestamp: Date.parse(new Date()) / 1000,
    app_key: app_key,
    v: v,
    source_id: source_id
  }
  for (var key in params) {
    data[key] = params[key]
  }

  return Qs.stringify(data)
}

export function verify (old_params, params) {
  params = JSON.parse(params)
  if (old_params.v == params.v && old_params.format == params.format && old_params.app_key == params.app_key && old_params.source_id == params.source_id && old_params.timestamp == params.timestamp) {
    if (old_params.body.length == old_params.body.length) {
      for (var i = 0; i < old_params.body.length; i++) {
        if (old_params.body[i] != params.body[i]) {
          return false
        }
      }
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export function getVerify (url, data) {
  return postGainVerify(url, data, 'GET')
}

export function postVerify (url, data) {
  return postGainVerify(url, data, 'POST')
}

export function delVerify (url, data) {
  return postGainVerify(url, data, 'DELETE')
}

export function putVerify (url, data) {
  return postGainVerify(url, data, 'PUT')
}

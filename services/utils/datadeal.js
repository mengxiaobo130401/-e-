import {
  getLesson,
  delLesson,
  putLesson,
  postLesson
} from '../common/proxy'
import Qs from 'qs'
import { encrypt } from '../../utils/Crypto'

const v = 1.0
const format = 'json'
const appKey = '6a22c44ba6dfd7b26a88d2b79afc91bb'
const sourceId = 'nice_1653'
const verifyUrl = '/v1/Sgin/getSgin' // 验签访问地址

export function postGainVerify(url, data, method) {
  var params = paramsDeal(data)
  var params2 = JSON.parse(JSON.stringify(params));
  var oldData = params
  var encryptData = {
    str: encrypt(JSON.stringify(params2))
    // czz: params
  }

  return postLesson(verifyUrl, encryptData).then(data => {
    params2.sign = data.sign
    if (data.code && data.code === 8001) {
      dd.setStorageSync({ key: "campus2_token", data: dataPL.token });
      params2 = paramsDeal(data)
    }
    if (verify(oldData, data)) {
      switch (method) {
        case 'GET':
          return getLesson(url, params2)
        case 'POST':
          return postLesson(url, params2)
        case 'DELETE':
          return delLesson(url, params2)
        case 'PUT':
          return putLesson(url, params2)
        default:
          break
      }
    } else {
      dd.showToast({
        content: data.msg,
        type: 'none',
        duration: 2000
      })
    }
  }).catch(err => {
    if (err === '密码错误') {
      err = '您输入的密码有误'
    } else if (err === '用户不存在') {
      err = '您还不是纳思会员，无法登录'
    } else if (err === 'fail') {
      err = '您还不是纳思会员，无法登录'
    }
    dd.showToast({
      content: err,
      type: 'none',
      duration: 2000
    })
  })
}
/**
 * 参数封装
 * @param {*} params 提交的参数
 */
export function paramsDeal(params) {
  params = params === undefined ? {} : params
  // 携带user_id和token
  var value = dd.getStorageSync({ key: 'campus2_gm' })
  var token = dd.getStorageSync({ key: 'campus2_token' })
  // is_parent_port 代表是家长端

  if (JSON.stringify(value.data) != '{}') {
    params.user_id = value.data.userid;
    params.token = token.data
  }

  params = JSON.parse(JSON.stringify(params))
  var data = {
    body: params,
    format: format,
    timestamp: Date.parse(new Date()) / 1000,
    app_key: appKey,
    v: v,
    source_id: sourceId
  }

  return data
}
/**
 * 参数对比
 * @param {*} old_params 旧参数
 * @param {*} params 返回参数
 */
export function verify(old_params, params) {
  params = Qs.parse(params)
  // if (old_params.v == params.v && old_params.format == params.format && old_params.app_key == params.app_key && old_params.source_id == params.source_id && old_params.timestamp == params.timestamp) {
  if (old_params.v === params.v && old_params.format === params.format && old_params.source_id === params.source_id && old_params.timestamp === params.timestamp) {
    if (old_params.body.length === params.body.length) {
      for (var i = 0; i < old_params.body.length; i++) {
        if (old_params.body[i] !== params.body[i]) {
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

export function getVerify(url, data) {
  return postGainVerify(url, data, 'GET')
}

export function postVerify(url, data) {
  return postGainVerify(url, data, 'POST')
}

export function delVerify(url, data) {
  return postGainVerify(url, data, 'DELETE')
}

export function putVerify(url, data) {
  return postGainVerify(url, data, 'PUT')
}

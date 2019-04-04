import {
  getOut
} from '../utils/login'

/**
 *
 * @param {*} url
 * @param {*} formData
 * @param {string} method
 */
function ajax (url, formData, method) {
  var p = new Promise((resolve, reject) => {
    switch (method.toUpperCase()) {
      case 'GET':
        break
      case 'POST':
      case 'PUT':
        break
      default:
        break
    }
    dd.httpRequest({
      url: url,
      method: method,
      data: JSON.stringify(formData),
      header: {
        'content-Type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        var data = res.data
        var code = Number(data.code)
        // resolve(data)
        if (code === 2000 || code === 2004) {
          resolve(data.result)
        } else if (code === 2006 || code === 8001 || code === 200) {
          resolve(data)
        } else if (code === 6001 || code === 6002 || code === 6003 || code === 6004 || code === 6005) {
          if (code === 6001 || code === 6002 || code === 6005) {
            // getOut()
          }
          reject(data.msg || '请求失败')
        } else {
          reject(data.msg || '请求失败')
        }
      },
      fail: function (res) {
        reject(res)
      },
      complete: function () {
      }
    })
  })
  return p
}

export function get (url, data) {
  return ajax(url, data, 'GET')
}

export function post (url, data) {
  return ajax(url, data, 'POST')
}

export function del (url, data) {
  return ajax(url, data, 'DELETE')
}

export function put (url, data) {
  return ajax(url, data, 'PUT')
}

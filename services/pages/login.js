import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=393
 * 密码登录
 * @export
 * @param {*} params
 * @returns
 */
export function parentLoginPwd (params) {
  return postVerify('/v1/Login/parentLogin', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=395
 * 获取验证码
 * @export
 * @param {*} params
 * @returns
 */
export function getLoginCode (params) {
  return postVerify('/v1/Login/getParentLoginCode', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=396
 * 获取验登录
 * @export
 * @param {*} params
 * @returns
 */
export function CodeParentLogin (params) {
  return postVerify('/v1/Login/verifyCodeParentLogin', params)
}

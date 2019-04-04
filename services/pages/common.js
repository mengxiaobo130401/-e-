import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api http://api.nits.chnnice.com/index.php?s=/5&page_id=573
 * 钉钉验证登录
 * @param {object} params 所需参数
 */
export function dingdingLogin(params) {
  return postVerify("/v1/Login/dingdingLogin", params);
}

/**
 * api https://
 * 登陆
 * @param {object} params 所需参数
 */
export function PostLogin(params) {
  return postVerify("/v1/Login/login", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=124
 * 获取个人信息
 * @export
 * @param {*} params
 * @returns
 */
export function PostOneAdmin(params) {
  return postVerify("/v1/PersonalSet/getPersonalInfo", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=55
 * 获取缓存
 * @export
 * @param {*} params
 * @returns
 */
export function PostSearching (params) {
  return postVerify('/v1/OptionsCache/getOptions', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=295
 * 上传文件
 * @export
 * @param {*} params
 * @returns
 */
export function fileImport (params) {
  return postVerify('/v1/Upload/base64_upload', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=412
 * 获取学生
 * @export
 * @param {*} params
 * @returns
 */
export function listStudent (params) {
  return postVerify('/v1/parent/Parents/list_student', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=419
 * 获取跨校区学生信息
 * @export
 * @param {*} params
 * @returns
 */
export function studentCampus (params) {
  return postVerify('/v1/student/Student/studentCampus', params)
}




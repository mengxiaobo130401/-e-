import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api https://
 * 登陆
 * @param {object} params 所需参数
 */
export function PostLogin(params) {
  return postVerify("/v1/Login/login", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=407
 * 修改用户密码
 * @param {object} params 所需参数
 */
export function PostModifyPasswd(params) {
  return postVerify("/v1/Admin/modifyPasswd", params);
}

// 资源列表
export function PostCrmList(params) {
  return postVerify("/v1/mcrm/mcrm/list_student", params);
}

// 到访登记列表
export function PostCrmdfList(params) {
  return postVerify("/v1/mcrm/Crmdf/liststudent_today", params);
}

// 获取缓存数组
export function PostCacheOptions(params) {
  return postVerify("/v1/OptionsCache/getOptions", params);
}

// 查找用户
export function PostSelectAdmin(params) {
  return postVerify("/v1/Admin/selectAdmin", params);
}

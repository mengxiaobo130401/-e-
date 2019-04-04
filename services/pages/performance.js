import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 缴费
 * @export
 * @param {*} params
 * @returns
 */
export function getMoneyList(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=157
 * 业绩分配
 * @export
 * @param {*} params
 * @returns
 */
export function edityeji(params) {
  return postVerify("/v1/student/Broker/add_broker", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=128
 * 查找用户
 * @export
 * @param {*} params
 * @returns
 */
export function PostSelectAdmin(params) {
  return postVerify("/v1/Admin/selectAdmin", params);
}


/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=129
 * 业绩展示
 * @export
 * @param {*} params
 * @returns
 */
export function showyeji(params) {
  return postVerify("/v1/student/Broker/list_broker", params);
}

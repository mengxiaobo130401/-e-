import {
  getVerify,
  postVerify
} from "../utils/datadeal";

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=491
 * 校区信息列表
 * @export
 * @param {*} params
 * @returns
 */
export function campusManagementList(params) {
  return postVerify("/v1/manager/SysCampus/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=492
 * 编辑校区信息
 * @export
 * @param {*} params
 * @returns
 */
export function editData(params) {
  return postVerify("/v1/manager/SysCampus/editData", params);
}

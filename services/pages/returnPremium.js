import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api http://api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 退费列表
 * @param {object} params 所需参数
 */
export function tuiFeiList(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}

/**
 * api http://api.nits.chnnice.com/index.php?s=/5&page_id=168
 * 退费审批
 * @param {object} params 所需参数
 */
export function tuiFeiCheck(params) {
  return postVerify("/v1/student/prepay/tuiFeiCheck", params);
}

/**
 * api http://api.nits.chnnice.com/index.php?s=/5&page_id=74
 * 学员档案
 * @param {object} params 所需参数
 */
export function PostStudentinfo(params) {
  return postVerify("/v1/student/student/info", params);
}

/**
 * api http://api.nits.chnnice.com/index.php?s=/5&page_id=166
 * 责任人列表
 * @param {object} params 所需参数
 */
export function dutyList(params) {
  return postVerify("/v1/student/Prepay/campus_zr_user", params);
}

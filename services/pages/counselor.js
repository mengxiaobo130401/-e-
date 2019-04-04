import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=141
 * 咨询业绩明细
 * @param {object} params 所需参数
 */
export function PostConsultantYj(params) {
  return postVerify("/v1/report/Report/consultantYj", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=142
 * 咨询业绩明细合计
 * @param {object} params 所需参数
 */
export function PostConsultantYjTotal(params) {
  return postVerify("/v1/report/Report/consultantYjTotal", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=68
 * 资源列表
 * @param {object} params 所需参数
 */
export function PostListStudent(params) {
  return postVerify("/v1/mcrm/mcrm/list_student", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=297
 * 签约课时订单
 * @param {object} params 所需参数
 */
export function PostStudentClassIn(params) {
  return postVerify("/v1/report/AssistantReport/studentClassIn", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=155
 * 跟进统计
 * @param {object} params 所需参数
 */
export function PostFollowStatistical(params) {
  return postVerify("/v1/report/Report/followStatistical", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=209
 * 杭分市场资源
 * @param {object} params 所需参数
 */
export function PostMarketResource(params) {
  return postVerify("/v1/report/Report/marketResource", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=210
 * 杭分自主资源
 * @param {object} params 所需参数
 */
export function PostLibertyResource(params) {
  return postVerify("/v1/report/Report/libertyResource", params);
}
/**
 *  api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=210
 * 渠道资源表
 * @param {object} params 所需参数
 */
export function PostCampusPerformance(params) {
  return postVerify("/v1/report/Report/campusPerformance", params);
}

/**
 *  api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 收银、退费列表
 * @param {object} params 所需参数
 */
export function listPrepay(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}
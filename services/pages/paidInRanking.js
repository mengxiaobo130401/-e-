import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=143
 * 营收排行
 * @export
 * @param {*} params
 * @returns
 */
export function revenueSort(params) {
  return postVerify("/v1/report/Sort/revenueSort", params);
}


/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=144
 * 实收排行
 * @export
 * @param {*} params
 * @returns
 */
export function actualSort(params) {
  return postVerify("/v1/report/Sort/actualSort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=145
 * 新签/续费排行
 * @export
 * @param {*} params
 * @returns
 */
export function newoldSort(params) {
  return postVerify("/v1/report/Sort/prepaySort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=146
 * 退费排行
 * @export
 * @param {*} params
 * @returns
 */
export function returnSort(params) {
  return postVerify("/v1/report/Sort/refundSort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=344
 * 各个校区、各个分公司新签、续费、实收排行
 * @export
 * @param {*} params
 * @returns
 */
export function postRanKings(params) {
  return postVerify("/v1/student/prepay/rankings", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=147
 * 咨询、学管个人业绩排行,集团业绩排行
 * @export
 * @param {*} params
 * @returns
 */
export function achieveSort(params) {
  return postVerify("/v1/report/Sort/performance", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=148
 * 校区课耗
 * @export
 * @param {*} params
 * @returns
 */
export function campusSort(params) {
  return postVerify("/v1/report/Sort/campusKeshiSort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=150
 * 老师课耗
 * @export
 * @param {*} params
 * @returns
 */
export function teacherSort(params) {
  return postVerify("/v1/report/Sort/teacherKsSort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=151
 * 学管课耗
 * @export
 * @param {*} params
 * @returns
 */
export function assiSort(params) {
  return postVerify("/v1/report/Sort/assistantKsSort", params);
}

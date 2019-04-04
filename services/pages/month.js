import {
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=538
 * 销售业绩、课时生产、来源数据月报
 * @param {object} params 所需参数
 */
export function ymReport(params) {
  return postVerify("/v1/static_data/StaticData/ymReport", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=570
 * 专兼职分析
 * @param {object} params 所需参数
 */
export function teacher_classout_analysis(params) {
  return postVerify("/v1/static_data/StaticClassoutPart/teacher_classout_analysis", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=571
 * 学员-科目维度
 * @param {object} params 所需参数
 */
export function studentSubject(params) {
  return postVerify("/v1/static_data/StaticClassoutSubject/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=572
 * 学员-年级维度
 * @param {object} params 所需参数
 */
export function studentGrade(params) {
  return postVerify("/v1/static_data/StaticClassoutGrade/listData", params);
}

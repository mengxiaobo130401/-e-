import {
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 订单列表
 * @export
 * @param {*} params
 * @returns
 */
export function listPrepay (params) {
  return postVerify('/v1/student/prepay/list_prepay', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=138
 * 课程列表
 * @export
 * @param {*} params
 * @returns
 */
export function listClassnow (params) {
  return postVerify('/v1/student/ClassNow/list_classnow', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=107
 * 课程表
 * @export
 * @param {*} params
 * @returns
 */
export function listClassout (params) {
  return postVerify('/v1/student/ClassOut/list_classout', params)
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=74
 * 学生信息
 * @export
 * @param {*} params
 * @returns
 */
export function getInfo (params) {
  return postVerify('/v1/student/student/info', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=293
 * 教学计划
 * @export
 * @param {*} params
 * @returns
 */
export function teachPlanList (params) {
  return postVerify('/v1/student/TeachPlan/list_teach_plan', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=416
 * 添加评价
 * @export
 * @param {*} params
 * @returns
 */
export function addAssess (params) {
  return postVerify('/v1/parent/ParentEvaluate/add', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=418
 * 评价列表
 * @export
 * @param {*} params
 * @returns
 */
export function AssessList (params) {
  return postVerify('/v1/parent/ParentEvaluate/listData', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=417
 * 课堂报告
 * @export
 * @param {*} params
 * @returns
 */
export function lectureReport (params) {
  return postVerify('/v1/student/ClassOut/lectureReport', params)
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=422
 * 备课列表
 * @export
 * @param {*} params
 * @returns
 */
export function prepareList (params) {
  return postVerify('/v1/teacher/TeacherPrepare/listData', params)
}

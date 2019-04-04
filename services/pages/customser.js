import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=64
 * 学员列表
 * @param {object} params 所需参数
 */
export function PostListStudent(params) {
  return postVerify("/v1/student/student/list_student", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=223
 * 添加回访
 * @param {object} params 所需参数
 */
export function PostAddReturnVisit(params) {
  return postVerify("/v1/kefu/Kefu/addReturnVisit", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=205
 * 回访量统计
 * @param {object} params 所需参数
 */
export function PostKFHfStatistics(params) {
  return postVerify("/v1/report/KefuReport/kfHfStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=203
 * 回访明细
 * @param {object} params 所需参数
 */
export function PostFollowRecord(params) {
  return postVerify("/v1/report/KefuReport/hfList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=224
 * 客服回访列表
 * @param {object} params 所需参数
 */
export function PostHFList(params) {
  return postVerify("/v1/kefu/Kefu/hfList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=206
 * 回访结果统计
 * @param {object} params 所需参数
 */
export function PostFollowCount(params) {
  return postVerify("/v1/report/KefuReport/hfResultStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=146
 * 退费统计
 * @param {*} params 
 */
export function PostRefundSort(params) {
  return postVerify("/v1/report/Sort/refundSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=136
 * 退费明细
 * @param {object} params 所需参数
 */
export function PostPrepayRefundDetail(params) {
  return postVerify("/v1/report/Report/prepayRefundDetail", params);
}
/*回访结果统计*/
export function prepayList(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=199
 * 生成图片验证码
 * @param {object} params 所需参数
 */
export function PostImgCode(params) {
  return postVerify("/v1/kefu/Kefu/getImgCode", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=200
 * 获取家长手机号
 * @param {object} params 所需参数
 */
export function PostObtainTelephone(params) {
  return postVerify("/v1/kefu/Kefu/obtainTelephone", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=493
 * 获取家长的投诉列表
 * @param {object} params 所需参数
 */
export function PostParentAdvice(params) {
  return postVerify("/v1/parent/ComplaintSuggestion/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=494
 *处理家长投诉意见表单
 * @param {object} params 所需参数
 */
export function EditParentAdvice(params) {
  return postVerify("/v1/parent/ComplaintSuggestion/editData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=74
 *学员档案
 * @param {object} params 所需参数
 */
export function PostStudentinfo(params) {
  return postVerify("/v1/student/student/info", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=419
 *获取学员跨校区信息
 * @param {object} params 所需参数
 */
export function PostStudentCampus(params) {
  return postVerify("/v1/student/Student/studentCampus", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=496
 *客服回访列表
 * @param {object} params 所需参数
 */
export function followList(params) {
  return postVerify("/v1/student/StudentFollowKf/listData", params);
}

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
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=138
 * 课程管理
 * @export
 * @param {*} params
 * @returns
 */
export function PostCourseList(params) {
  return postVerify("/v1/student/ClassNow/list_classnow", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=100
 * 订单列表
 * @export
 * @param {*} params
 * @returns
 */

export function list_classin(params) {
  return postVerify("/v1/student/classin/list_classin", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=107
 * 排课、消课
 * @export
 * @param {*} params
 * @returns
 */

export function list_classout(params) {
  return postVerify("/v1/student/ClassOut/list_classout", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=497
 * 添加回访
 * @export
 * @param {*} params
 * @returns
 */

export function addFollow(params) {
  return postVerify("/v1/student/StudentFollowKf/add", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=510
 * 客服回访量统计--升级
 * @export
 * @param {*} params
 * @returns
 */

export function kf_follow_statistics(params) {
  return postVerify("/v1/student/StudentFollowKf/kf_follow_statistics", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=511
 * 回访结果--校区维度
 * @export
 * @param {*} params
 * @returns
 */

export function campus_kf_follow_statistics(params) {
  return postVerify("/v1/student/StudentFollowKf/campus_kf_follow_statistics", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=513
 * 客服回访添加人列表
 * @export
 * @param {*} params
 * @returns
 */

export function followKfPerson(params) {
  return postVerify("/v1/student/StudentFollowKf/followKfPerson", params);
}


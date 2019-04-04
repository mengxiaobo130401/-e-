import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/*获取缓存*/
export function PostCacheOptions(params) {
  return postVerify("/v1/OptionsCache/getOptions", params);
}

 // 学员列表 http://api.nits.chnnice.com/index.php?s=/5&page_id=207
export function PostStudentList(params) {
  return postVerify("/v1/report/AssistantReport/studentList", params);
}

// 缴费明细
export function prepayList(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}

// 退费明细
export function tuifeiList(params) {
  return postVerify("/v1/report/Report/prepayRefundDetail", params);
}

// 订单明细
export function classinList(params) {
  return postVerify("/v1/student/classin/list_classin", params);
}

// 考情纪录统计表
export function examDetails(params) {
  return postVerify("/v1/report/AssistantReport/examDetails", params);
}

// 考情纪录统计表
export function examCount(params) {
  return postVerify("/v1/report/AssistantReport/examDetails", params);
}

// 考情明细   http://api.nits.chnnice.com/index.php?s=/5&page_id=63
export function examDetailsList(params) {
  return postVerify("/v1/student/SchoolExamDetails/examDetailsList", params);
}

// 在读学员联系统计
export function zdStudentTj(params) {
  return postVerify("/v1/report/AssistantReport/zdStudentTj", params);
}

// 停课学员联系记录表
export function tkStudentList(params) {
  return postVerify("/v1/report/AssistantReport/tkStudentList", params);
}

// 学管师联系统计 http://api.nits.chnnice.com/index.php?s=/5&page_id=178
export function xgLxTj(params) {
  return postVerify("/v1/report/AssistantReport/xgLxTj", params);
}

// 学员统计-班型
export function stuClassSort(params) {
  return postVerify("/v1/report/AssistantReport/studentStatusStatistics", params);
}

// 学员统计-变化
export function studentChange(params) {
  return postVerify("/v1/report/AssistantReport/studentChangeStatistics", params);
}

// 续费统计 http://api.nits.chnnice.com/index.php?s=/5&page_id=179
export function renewalStatistics(params) {
  return postVerify("/v1/report/AssistantReport/renewalStatistics", params);
}

// 订单明细
export function prepayDetail(params) {
  return postVerify("/v1/report/AssistantReport/prepayDetail", params);
}

// 学管业绩订单  http://api.nits.chnnice.com/index.php?s=/5&page_id=297
export function perpayformance(params) {
  return postVerify("/v1/report/AssistantReport/studentClassIn", params);
}

// 回访明细
export function returnVisitList(params) {
  return postVerify("/v1/student/ReturnVisit/returnVisitList", params);
}

// 回访明细
export function parentMeetList(params) {
  return postVerify("/v1/student/ParentMeet/parentMeetList", params);
}

// 学管变更记录
export function listLog(params) {
  return postVerify("/v1/student/LogServicer/list_log", params);
}

// 排课统计
export function paiCount(params) {
  return postVerify("/v1/report/AssistantReport/studentPkStatistics", params);
}

// 课损统计
export function lessonLoss(params) {
  return postVerify("/v1/report/AssistantReport/ksLoss", params);
}

// 课耗统计
export function studentKeshi(params) {
  return postVerify("/v1/report/AssistantReport/studentKeshiStatistics", params);
}

//课耗明细   http://api.nits.chnnice.com/index.php?s=/5&page_id=107
export function teacherClassList(params) {
  return postVerify("/v1/student/ClassOut/list_classout", params);
}

// 订单列表 http://api.nits.chnnice.com/index.php?s=/5&page_id=100
export function list_classin(params) {
  return postVerify("/v1/student/classin/list_classin", params);
}

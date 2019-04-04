import {
  getVerify,
  postVerify
} from "../utils/datadeal";

// 杭州课时统计-老师
export function classHourTeacherHZ(params) {
  return postVerify("/v1/report/Report/teacherPayfor", params);
}
// 宁波课时统计-老师
export function classHourTeacherNB(params) {
  return postVerify("/v1/report/Report/teacherPayfor_nb", params);
}
// 无锡课时统计-老师
export function classHourTeacherWX(params) {
  return postVerify("/v1/report/Report/teacherPayfor_wx", params);
}
// 其他课时统计-老师
export function classHourTeacher(params) {
  return postVerify("/v1/report/Report/teacherPayfor_orig", params);
}

// 宁波课时统计-年级
export function classHourGradeNB(params) {
  return postVerify("/v1/report/Report/campus_kh_sr_list_nb", params);
}

// 其他课时统计-年级
export function classHourGrade(params) {
  return postVerify("/v1/report/Report/campus_kh_sr_list", params);
}

// 宁波课时统计-科目
export function classHourSubjectNB(params) {
  return postVerify("/v1/report/Report/campus_kh_sr_list_km_nb", params);
}

// 其他课时统计-科目
export function classHourSubject(params) {
  return postVerify("/v1/report/Report/campus_kh_sr_list_km", params);
}

// 宁波课时统计-班型
export function classHourClassTypeNB(params) {
  return postVerify("/v1/report/Report/assistantKs_nb", params);
}

// 其他课时统计-班型
export function classHourClassType(params) {
  return postVerify("/v1/report/Report/assistantKs", params);
}

// 教师所带学员-明细  http://api.nits.chnnice.com/index.php?s=/5&page_id=187
export function teacherStudentList(params) {
  return postVerify("/v1/student/Student/teacherStudentList", params);
}

// 老师变更记录
export function listLog(params) {
  return postVerify("/v1/student/LogServicer/list_log", params);
}

//课耗明细   http://api.nits.chnnice.com/index.php?s=/5&page_id=107
export function teacherClassList(params) {
  return postVerify("/v1/student/ClassOut/list_classout", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=281
 * 全兼老师数据
 * @param {object} params 所需参数
 */
export function PostFullTimeTeacherData(params) {
  return postVerify("/v1/report/CityReport/fulltimeTeacherData", params);
}
/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=289
 * 老师课时统计
 * @param {object} params 所需参数
 */
export function classStatistics(params) {
  return postVerify("/v1/report/TeacherReport/keShiConsumptionStatistics", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=301
 * 老师消课统计
 * @param {object} params 所需参数
 */
export function EliminateClassStatistics(params) {
  return postVerify("/v1/report/TeacherReport/teacherXkStatistical", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=341
 * 课时分析
 * @param {object} params 所需参数
 */
export function keshiAnalysis(params) {
  return postVerify("/v1/report/TeacherReport/keshiAnalysis", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=336
 * 教师饱和分析
 * @param {object} params 所需参数
 */
export function saturationAnalysis(params) {
  return postVerify("/v1/report/TeacherReport/saturationAnalysis", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=338
 * 教案和教学计划明细
 * @param {object} params 所需参数
 */
export function planDetail(params) {
  return postVerify("/v1/report/TeacherReport/plan_detail", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=339
 * 教师消课统计（课次）
 * @param {object} params 所需参数
 */
export function classlossStatistics(params) {
  return postVerify("/v1/report/TeacherReport/classloss_statistics", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=346
 * 教师所带学员明细
 * @param {object} params 所需参数
 */
export function getTeacherStudent(params) {
  return postVerify("/v1/report/GroupDataCenter/teacherStudentStatusSort", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=348
 * 老师所带学员统计
 * @param {object} params 所需参数
 */
export function teacherStudentTotal(params) {
  return postVerify("/v1/report/GroupDataCenter/teacherStudentTotal", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=337
 * 教师课损分析
 * @param {object} params 所需参数
 */
export function classlossAnalysis(params) {
  return postVerify("/v1/report/TeacherReport/classlossAnalysis", params);
}


/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=342
 * 获取1年的周时间
 * @param {object} params 所需参数
 */
export function getWeek(params) {
  return postVerify("/v1/CommonF/get_week", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=63
 * 学生考情列表
 * @param {object} params 所需参数
 */
export function examDetailsList(params) {
  return postVerify("/v1/student/SchoolExamDetails/examDetailsList", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=235
 * 校区每日课时消耗统计
 * @param {object} params 所需参数
 */
export function keShiConStatisticsByDay(params) {
  return postVerify("/v1/report/Senate/keShiConStatisticsByDay", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=372
 * 校区老师课耗报表
 * @param {object} params 所需参数
 */
export function teacherKeshiTotalByModey(params) {
  return postVerify("/v1/report/Senate/teacherKeshiTotalByMode", params);
}

/**
 * api: http://api.nits.chnnice.com/index.php?s=/5&page_id=410
 * 获取分公司包含科目
 * @param {object} params 所需参数
 */
export function getSubject(params) {
  return postVerify("/v1/CommonF/getSubject", params);
}

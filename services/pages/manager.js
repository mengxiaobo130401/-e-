import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=273
 * 收入表
 * @param {object} params 所需参数
 */
export function PostCityRevenue(params) {
  return postVerify("/v1/report/CityReport/cityRevenue", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=274
 * 库存表
 * @param {object} params 所需参数
 */
export function PostCityInventory(params) {
  return postVerify("/v1/report/CityReport/cityInventory", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=287
 * 提升率
 * @param {object} params 所需参数
 */
export function PostCampusStudentUpgradeRate(params) {
  return postVerify("/v1/report/CityReport/campusStudentUpgradeRate", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=206
 * (满意度)回访结果统计
 * @param {object} params 所需参数
 */
export function PostHFResultStatistics(params) {
  return postVerify("/v1/report/KefuReport/hfResultStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=275
 * 效率表
 * @param {object} params 所需参数
 */
export function PostCampusEfficiency(params) {
  return postVerify("/v1/report/CityReport/campusEfficiency", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=286
 * 产品数据
 * @param {object} params 所需参数
 */
export function PostProductData(params) {
  return postVerify("/v1/report/CityReport/productData", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=276
 * 人员配比
 * @param {object} params 所需参数
 */
export function PostCampusStaffingRatio(params) {
  return postVerify("/v1/report/CityReport/campusStaffingRatio", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=281
 * 全职老师数据
 * @param {object} params 所需参数
 */
export function PostFullTimeTeacherData(params) {
  return postVerify("/v1/report/CityReport/fulltimeTeacherData", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=282
 * 兼职老师
 * @param {object} params 所需参数
 */
export function PostPartTimeTeacherData(params) {
  return postVerify("/v1/report/CityReport/parttimeTeacherData", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=298
 * 月度兼职老师课时占比
 * @param {object} params 所需参数
 */
export function PostCampusPluralismKs(params) {
  return postVerify("/v1/report/CityReport/campusPluralismKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=278
 * 老师课时数(科目) 饼图
 * @param {object} params 所需参数
 */
export function PostSubjectKs(params) {
  return postVerify("/v1/report/CityReport/subjectKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=279
 * 老师课时数(年级) 饼图
 * @param {object} params 所需参数
 */
export function PostGradeKs(params) {
  return postVerify("/v1/report/CityReport/gradeKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=277
 * 学生课耗数 饼图
 * @param {object} params 所需参数
 */
export function PostStudentKs(params) {
  return postVerify("/v1/report/CityReport/studentKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=302
 * 校区信息
 * @param {object} params 所需参数
 */
export function PostCampusBasicInfo(params) {
  return postVerify("/v1/report/GroupDataCenter/campusBasicInfo", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=288
 * 校区职位人员数
 * @param {object} params 所需参数
 */
export function PostAdminGroupCount(params) {
  return postVerify("/v1/Admin/adminGroupCount", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=143
 * 营收排行
 * @param {object} params 所需参数
 */
export function PostRevenueSort(params) {
  return postVerify("/v1/report/Sort/revenueSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=148
 * 校区课耗排行 /  课耗数柱状图
 * @param {object} params 所需参数
 */
export function PostCampusKeshiSort(params) {
  return postVerify("/v1/report/Sort/campusKeshiSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=310
 * 学员统计状态分布明细
 * @param {object} params 所需参数
 */
export function PostStudentDistributionInfo(params) {
  return postVerify("/v1/report/GroupDataCenter/studentDistributionInfo", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=167
 * 学员统计
 * @param {object} params 所需参数
 */
export function PostStudentStatusStatistics(params) {
  return postVerify("/v1/report/AssistantReport/studentStatusStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=169
 * 学员统计 - 变化  新增人数
 * @param {object} params 所需参数
 */
export function PostStudentChangeStatistics(params) {
  return postVerify("/v1/report/AssistantReport/studentChangeStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=303
 * 校区学员数
 * @param {object} params 所需参数
 */
export function PostStudentVariety(params) {
  return postVerify("/v1/report/GroupDataCenter/studentVariety", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=306
 * 课时分布 - 年级
 * @param {object} params 所需参数
 */
export function PostGradeDistributed(params) {
  return postVerify("/v1/report/GroupDataCenter/gradeDistributed", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=307
 * 课时分布 - 科目
 * @param {object} params 所需参数
 */
export function PostSubjectDistributed(params) {
  return postVerify("/v1/report/GroupDataCenter/subjectDistributed", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=308
 * 课时分布 - 班型
 * @param {object} params 所需参数
 */
export function PostModeDistributed(params) {
  return postVerify("/v1/report/GroupDataCenter/modeDistributed", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=146
 * 退费排行
 * @param {object} params 所需参数
 */
export function PostRefundSort(params) {
  return postVerify("/v1/report/Sort/refundSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=304
 * 业绩额
 * @param {object} params 所需参数
 */
export function PostPerformance(params) {
  return postVerify("/v1/report/GroupDataCenter/performance", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=144
 * 实收排行 业绩额
 * @param {object} params 所需参数
 */
export function PostActualSort(params) {
  return postVerify("/v1/report/Sort/actualSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=305
 * 课时统计 课耗数
 * @param {object} params 所需参数
 */
export function PostKsStatistics(params) {
  return postVerify("/v1/report/GroupDataCenter/ksStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=214
 * 收银明细列表
 * @param {object} params 所需参数
 */
export function PostFinanceList(params) {
  return postVerify("/v1/student/Finance/financeList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 退费明细
 * @param {object} params 所需参数
 */
export function PostTuiFeiInfo(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=109
 * 学生排课、 消课列表, 今日上课列表
 * @param {object} params 所需参数
 */
export function PostListClassout(params) {
  return postVerify("/v1/student/ClassOut/teacherClassList4", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=76
 * 资源跟进列表
 * @param {object} params 所需参数
 */
export function PostListStudent(params) {
  return postVerify("/v1/mcrm/CrmFollow/crmFollowList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=70
 * 回访信息列表
 * @param {object} params 所需参数
 */
export function PostReturnVisitList(params) {
  return postVerify("/v1/student/ReturnVisit/returnVisitList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=57
 * 家长会列表
 * @param {object} params 所需参数
 */
export function PostParentMeetList(params) {
  return postVerify("/v1/student/ParentMeet/parentMeetList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=63
 * 学生考情列表
 * @param {object} params 所需参数
 */
export function PostExamDetailsList(params) {
  return postVerify("/v1/student/SchoolExamDetails/examDetailsList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=68
 * 资源列表  资源明细
 * @param {object} params 所需参数
 */
export function PostListStudentModel(params) {
  return postVerify("/v1/mcrm/mcrm/list_student", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=102
 * 到访登记列表  邀约到访
 * @param {object} params 所需参数
 */
export function PostListStudentToday(params) {
  return postVerify("/v1/mcrm/Crmdf/liststudent_today", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=141
 * 咨询业绩明细  签单
 * @param {object} params 所需参数
 */
export function PostConsultantYj(params) {
  return postVerify("/v1/report/Report/consultantYj", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=333
 * 资源分配咨询师日志 分配明细
 * @param {object} params 所需参数
 */
export function PostStudentTransferAssistant(params) {
  return postVerify("/v1/mcrm/Mcrm/studentTransferAssistant", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=335
 * 学管业绩明细   学管 签单明细
 * @param {object} params 所需参数
 */
export function PostAssistantYj(params) {
  return postVerify("/v1/report/AssistantReport/assistantYj", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=64
 * 学员列表 
 * @param {object} params 所需参数
 */
export function PostCrmFollowList(params) {
  return postVerify("/v1/student/student/list_student", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=159
 * 变更学管、 变更老师记录
 * @param {object} params 所需参数
 */
export function PostListLog(params) {
  return postVerify("/v1/student/LogServicer/list_log", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=293
 * 教学计划列表
 * @param {object} params 所需参数
 */
export function PostListTeachPlan(params) {
  return postVerify("/v1/student/TeachPlan/list_teach_plan", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=164
 * 调课、 删课记录
 * @param {object} params 所需参数
 */
export function PostListClassLog(params) {
  return postVerify("/v1/student/LogPaike/list_log", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=128
 * 用户注册接口  花名册
 * @param {object} params 所需参数
 */
export function PostSelectAdmin(params) {
  return postVerify("/v1/Admin/selectAdmin", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=309
 * 咨询跟进排行
 * @param {object} params 所需参数
 */
export function PostConsultantFollowSort(params) {
  return postVerify("/v1/report/GroupDataCenter/consultantFollowSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=311
 * 咨询邀约排行
 * @param {object} params 所需参数
 */
export function PostConsultantInvitationSort(params) {
  return postVerify("/v1/report/GroupDataCenter/consultantInvitationSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=147
 * 咨询新签/学管续费排行
 * @param {object} params 所需参数
 */
export function PostConsultantPerformance(params) {
  return postVerify("/v1/report/Sort/performance", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=312
 * 学管回访排行
 * @param {object} params 所需参数
 */
export function PostAssistantHfSort(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantHfSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=313
 * 学管家长会排行
 * @param {object} params 所需参数
 */
export function PostAssistantJzhSort(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantJzhSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=150
 * 老师课时排行
 * @param {object} params 所需参数
 */
export function PostTeacherKsSort(params) {
  return postVerify("/v1/report/Sort/teacherKsSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=314
 * 老师所带学生数排行
 * @param {object} params 所需参数
 */
export function PostTeacherStudentSort(params) {
  return postVerify("/v1/report/GroupDataCenter/teacherStudentSort", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=316
 * 咨询跟进 - 12 个月
 * @param {object} params 所需参数
 */
export function PostConsultantFollowYm(params) {
  return postVerify("/v1/report/GroupDataCenter/consultantFollowYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=317
 * 咨询邀约到访--12 个月
 * @param {object} params 所需参数
 */
export function PostConsultantDfYm(params) {
  return postVerify("/v1/report/GroupDataCenter/consultantDfYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=315
 * 咨询新签 - 12 个月
 * @param {object} params 所需参数
 */
export function PostConsultantNewSignYm(params) {
  return postVerify("/v1/report/GroupDataCenter/consultantNewSignYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=318
 * 学管续费 - 12 个月
 * @param {object} params 所需参数
 */
export function PostAssistantRenewalsYm(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantRenewalsYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=319
 * 学管回访统计--12 个月
 * @param {object} params 所需参数
 */
export function PostAssistantHfYm(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantHfYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=320
 * 学管家长会统计--12 个月
 * @param {object} params 所需参数
 */
export function PostAssistantJzhYm(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantJzhYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=321
 * 学员考情统计--12 个月
 * @param {object} params 所需参数
 */
export function PostAssistantKqYm(params) {
  return postVerify("/v1/report/GroupDataCenter/assistantKqYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=322
 * 教学计划— 12 个月
 * @param {object} params 所需参数
 */
export function PostTeachingPlan(params) {
  return postVerify("/v1/report/GroupDataCenter/teachingPlan", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=324
 * 备课--12 个月
 * @param {object} params 所需参数
 */
export function PostPreparingLessons(params) {
  return postVerify("/v1/report/GroupDataCenter/preparingLessons", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=325
 * 课耗--12 个月
 * @param {object} params 所需参数
 */
export function PostKsXhYm(params) {
  return postVerify("/v1/report/GroupDataCenter/ksXhYm", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=323
 * 课堂报告--12 个月
 * @param {object} params 所需参数
 */
export function PostClassroomReport(params) {
  return postVerify("/v1/report/GroupDataCenter/classroomReport", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=490
 * 经营静态数据
 * @param {object} params 所需参数
 */
export function listData(params) {
  return postVerify("/v1/static_data/StaticData/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=532
 * 设置年度指标
 * @param {object} params 所需参数
 */
export function addYearTarget(params) {
  return postVerify("/v1/manager/TargetCity/addYearTarget", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=533
 * 设置月度指标
 * @param {object} params 所需参数
 */
export function addYmTarget(params) {
  return postVerify("/v1/manager/TargetCampus/addYmTarget", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=536
 * 分公司、集团月度指标完成度报表
 * @param {object} params 所需参数
 */
export function cityYmTarget(params) {
  return postVerify("/v1/manager/TargetCampus/cityYmTarget", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=531
 * 年度指标列表
 * @param {object} params 所需参数
 */
export function TargetCity(params) {
  return postVerify("/v1/manager/TargetCity/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=537
 * 分公司年度指标报表
 * @param {object} params 所需参数
 */
export function cityYearTarget(params) {
  return postVerify("/v1/manager/TargetCity/cityYearTarget", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=531
 * 月度指标列表
 * @param {object} params 所需参数
 */
export function TargetCampus(params) {
  return postVerify("/v1/manager/TargetCampus/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=538
 * 销售业绩、课时生产、来源数据月报
 * @param {object} params 所需参数
 */
export function ymReport(params) {
  return postVerify("/v1/static_data/StaticData/ymReport", params);
}

// 退费列表 http://api.nits.chnnice.com/index.php?s=/5&page_id=91
export function tuiFeiList(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}

// 退费明细 http://api.nits.chnnice.com/index.php?s=/5&page_id=171
export function tuiFeiInfo(params) {
  return postVerify("/v1/student/prepay/tuiFeiInfo", params);
}

// 退费审批 http://api.nits.chnnice.com/index.php?s=/5&page_id=168
export function tuiFeiCheck(params) {
  return postVerify("/v1/student/prepay/tuiFeiCheck", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=545
 * 系统课程管理
 * @param {object} params 所需参数
 */
export function courseManagement(params) {
  return postVerify("/v1/student/LessonParent/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=184
 * 系统课程列表
 * @param {object} params 所需参数
 */
export function list_lesson(params) {
  return postVerify("/v1/student/Lesson/list_lesson", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=546
 * 系统课程管理--新增课程
 * @param {object} params 所需参数
 */
export function courseManagementAdd(params) {
  return postVerify("/v1/student/LessonParent/add", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=547
 * 系统课程管理--删除课程
 * @param {object} params 所需参数
 */
export function courseManagementDel(params) {
  return postVerify("/v1/student/LessonParent/del", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=548
 * 删除单条课程
 * @param {object} params 所需参数
 */
export function list_lessonDel(params) {
  return postVerify("/v1/student/Lesson/del", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=549
 * 系统课程管理—编辑课程
 * @param {object} params 所需参数
 */
export function courseManagementEdit(params) {
  return postVerify("/v1/student/LessonParent/edit", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=551
 * 校区年度指标
 * @param {object} params 所需参数
 */
export function campusYearStatistics(params) {
  return postVerify("/v1/report/Report/campusYearStatistics", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=552
 * 校区年度学员壮态指标
 * @param {object} params 所需参数
 */
export function campusYearStudentStatusStatistics(params) {
  return postVerify("/v1/report/Report/campusYearStudentStatusStatistics", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=553
 * 校区学员年级分布
 * @param {object} params 所需参数
 */
export function campusStudentGrdeDistributed(params) {
  return postVerify("/v1/report/Report/campusStudentGrdeDistributed", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=554
 * 校区学员科目分布
 * @param {object} params 所需参数
 */
export function campusStudentSubjectDistributed(params) {
  return postVerify("/v1/report/Report/campusStudentSubjectDistributed", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=565
 * 分公司资源修正--（模板文件上传）
 * @param {object} params 所需参数
 */
export function cityfileImport(params) {
  return postVerify("/v1/mcrm/ImportCrm/cityfileImport", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=566
 * 资源数据修正
 * @param {object} params 所需参数
 */
export function dataCrmAmend(params) {
  return postVerify("/v1/mcrm/ImportCrm/dataCrmAmend", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=82
 * 资源详情
 * @export
 * @param {*} params
 * @returns
 */
export function PostStudentInfo(params) {
  return postVerify("/v1/mcrm/mcrm/info", params);
}

/**
 * api： http: //api.nits.chnnice.com/index.php?s=/5&page_id=76
 * 跟进列表
 * @export
 * @param {*} params
 * @returns
 */
export function PostFollowList(params) {
  return postVerify("/v1/mcrm/CrmFollow/crmFollowList", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=81
 * 资源分布记录  
 * @param {*} params
 * @returns
 */
export function postCrmLog(params) {
  return postVerify("/v1/mcrm/mcrm/crm_log", params);
}

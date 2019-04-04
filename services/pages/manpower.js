import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=181
 * 教师课时表  杭州
 * @param {object} params 所需参数
 */
export function PostTeacherPayfor(params) {
  return postVerify("/v1/report/Report/teacherPayfor", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=181
 * 教师课时表  宁波
 * @param {object} params 所需参数
 */
export function PostTeacherPayforNB(params) {
  return postVerify("/v1/report/Report/teacherPayfor_nb", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=181
 * 教师课时表  无锡
 * @param {object} params 所需参数
 */
export function PostTeacherPayforWX(params) {
  return postVerify("/v1/report/Report/teacherPayfor_wx", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=181
 * 教师课时表  其他
 * @param {object} params 所需参数
 */
export function PostTeacherPayforOrig(params) {
  return postVerify("/v1/report/Report/teacherPayfor_orig", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=174
 * 学管课耗 正常
 * @param {object} params 所需参数
 */
export function PostAssistantKs(params) {
  return postVerify("/v1/report/Report/assistantKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=174
 * 学管课耗 宁波
 * @param {object} params 所需参数
 */
export function PostAssistantKsNB(params) {
  return postVerify("/v1/report/Report/assistantKs_nb", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=251
 * 校区课耗 正常
 * @param {object} params 所需参数
 */
export function PostCampusKs(params) {
  return postVerify("/v1/report/Report/campusKs", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=251
 * 校区课耗 宁波
 * @param {object} params 所需参数
 */
export function PostCampusKsNB(params) {
  return postVerify("/v1/report/Report/campusKs_nb", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=148
 * 校区课耗
 * @param {object} params 所需参数
 */
export function PostCampusKeshiSort(params) {
  return postVerify("/v1/report/Sort/campusKeshiSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=203
 * 满意度统计
 * @param {object} params 所需参数
 */
export function PostHFResultStatistics(params) {
  return postVerify("/v1/report/KefuReport/hfResultStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=133
 * 收银明细列表
 * @param {object} params 所需参数
 */
export function PostFinanceList(params) {
  return postVerify("/v1/report/Report/prepayDetail", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=136
 * 退费明细
 * @param {object} params 所需参数
 */
export function PostPrepayRefundDetail(params) {
  return postVerify("/v1/report/Report/prepayRefundDetail", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=107
 * 课耗明细
 * @param {object} params 所需参数
 */
export function PostListClassout(params) {
  return postVerify("/v1/student/ClassOut/list_classout", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=241
 * 组织架构列表
 * @param {object} params 所需参数
 */
export function PostOrgList(params) {
  return postVerify("/v1/org/Org/orgList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=252
 * 员工列表
 * @param {object} params 所需参数
 */
export function PostMemberList(params) {
  return postVerify("/v1/hr/HumanResources/memberList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=250
 * 添加员工
 * @param {object} params 所需参数
 */
export function PostAddMember(params) {
  return postVerify("/v1/hr/HumanResources/addMember", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=253
 * 修改员工
 * @param {object} params 所需参数
 */
export function PostEditMemberr(params) {
  return postVerify("/v1/hr/HumanResources/editMember", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=255
 * 添加工资卡
 * @param {object} params 所需参数
 */
export function PostAddBankCard(params) {
  return postVerify("/v1/hr/BankCard/addBankCard", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=257
 * 我的工资卡
 * @param {object} params 所需参数
 */
export function PostMyBankCardList(params) {
  return postVerify("/v1/hr/BankCard/myBankCardList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=256
 * 修改工资卡
 * @param {object} params 所需参数
 */
export function PostEditBankCard(params) {
  return postVerify("/v1/hr/BankCard/editBankCard", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=262
 * 我的合同列表
 * @param {object} params 所需参数
 */
export function PostMyContractList(params) {
  return postVerify("/v1/hr/MemberContract/myContractList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=259
 * 添加合同
 * @param {object} params 所需参数
 */
export function PostAddContract(params) {
  return postVerify("/v1/hr/MemberContract/addContract", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=260
 * 修改合同
 * @param {object} params 所需参数
 */
export function PostEditContract(params) {
  return postVerify("/v1/hr/MemberContract/editContract", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=266
 * 离职信息列表
 * @param {object} params 所需参数
 */
export function PostMyResignationList(params) {
  return postVerify("/v1/hr/Resignation/myResignationList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=268
 * 人员调动信息记录列表
 * @param {object} params 所需参数
 */
export function PostTransferList(params) {
  return postVerify("/v1/hr/Transfer/transferList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=263
 * 添加离职人员
 * @param {object} params 所需参数
 */
export function PostAddResignation(params) {
  return postVerify("/v1/hr/Resignation/addResignation", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=264
 * 修改离职
 * @param {object} params 所需参数
 */
export function PostEditResignation(params) {
  return postVerify("/v1/hr/Resignation/editResignation", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=267
 * 添加转岗操作
 * @param {object} params 所需参数
 */
export function PostAddTransfer(params) {
  return postVerify("/v1/hr/Transfer/addTransfer", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=100
 * 订单明细
 * @param {object} params 所需参数
 */
export function listClassin(params) {
  return postVerify("/v1/student/classin/list_classin", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=550
 * 客户订单明细
 * @param {object} params 所需参数
 */
export function prepayList(params) {
  return postVerify("/v1/report/Report/prepay_list", params);
}

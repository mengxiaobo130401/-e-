import {
  getVerify,
  postVerify
} from "../utils/datadeal";
/**
 * api http: //api.nits.chnnice.com/index.php?s=/5&page_id=91
 * 收银列表（ prepay_type： 1）、 退费列表（ prepay_type: 2）
 * @param {object} params 所需参数
 */
export function PostListPrepay(params) {
  return postVerify("/v1/student/prepay/list_prepay", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=171
 * 单个退费明细
 * @param {object} params 
 */
export function PostTuiFeiInfo(params) {
  return postVerify("/v1/student/prepay/tuiFeiInfo", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=168
 * 退费审核
 * @param {*} params 
 */
export function PostTuiFeiCheck(params) {
  return postVerify("/v1/student/prepay/tuiFeiCheck", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=211
 * 获取分公司或分支机构
 * @param {*} params 
 */
export function PostGetBranch(params) {
  return postVerify("/v1/finance/Finance/getBranch", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=212
 * 获取部门
 * @param {*} params 
 */
export function PostGetDepartment(params) {
  return postVerify("/v1/finance/Finance/getDepartment", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=216
 * 财务记录列表
 * @param {*} params 
 */
export function PostFceList(params) {
  return postVerify("/v1/finance/Finance/fceList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=213
 * 添加财务明细
 * @param {*} params 
 */
export function PostAddFceDetail(params) {
  return postVerify("/v1/finance/Finance/addFceDetail", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=217
 * 修改财务记录
 * @param {*} params 
 */
export function PostEditFceDetail(params) {
  return postVerify("/v1/finance/Finance/editFceDetail", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=215
 * 删除财务记录
 * @param {*} params 
 */
export function PostDelFceDetail(params) {
  return postVerify("/v1/finance/Finance/delFceDetail", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=214
 * 收银明细列表， 到账审核列表
 * @param {*} params 
 */
export function PostFinanceList(params) {
  return postVerify("/v1/student/Finance/financeList", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=219
 * 到账审核
 * @param {*} params 
 */
export function PostCheckOrders(params) {
  return postVerify("/v1/student/Finance/checkOrders", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=144
 * 新签、 续费统计
 * @param {*} params 
 */
export function PostActualSort(params) {
  return postVerify("/v1/report/Sort/actualSort", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=151
 * 课耗收入统计
 * @param {*} params 
 */
export function PostAssistantKsSort(params) {
  return postVerify("/v1/report/Sort/assistantKsSort", params);
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
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=169
 * 学员统计 - 变化
 * @param {*} params 
 */
export function PostStudentChangeStatistics(params) {
  return postVerify("/v1/report/AssistantReport/studentChangeStatistics", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=227
 * 分公司经理
 * @param {*} params 
 */
export function PostBranchManager(params) {
  return postVerify("/v1/finance/Finance/branchManager", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=228
 * 奖金主管与高层
 * @param {*} params 
 */
export function PostBranchZj(params) {
  return postVerify("/v1/finance/Finance/branchZj", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=229
 * 当月资金流量表
 * @param {*} params 
 */
export function PostBonusDetails(params) {
  return postVerify("/v1/finance/Finance/bonusDetails", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=226
 * 模板文件上传
 * @param {*} params 
 */
export function PostFileImport(params) {
  return postVerify("/v1/finance/Finance/fileImport", params);
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=230
 * 资料导入数据库
 * @export
 * @param {*} params
 * @returns
 */
export function PostDataStorage(params) {
  return postVerify("/v1/finance/Finance/dataStorage", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=490
 * 静态数据
 * @export
 * @param {*} params
 * @returns
 */
export function StaticData(params) {
  return postVerify("/v1/static_data/StaticData/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=519
 * Finance缓存获取
 * @export
 * @param {*} params
 * @returns
 */
export function getFinance(params) {
  return postVerify("/v1/OptionsCache/getFinance", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=517
 * 添加财务结算帐户
 * @export
 * @param {*} params
 * @returns
 */
export function addFinanceCard(params) {
  return postVerify("/v1/finance_online/FinanceCard/addFinanceCard", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=518
 * 修改财务结算帐户
 * @export
 * @param {*} params
 * @returns
 */
export function editFinanceCard(params) {
  return postVerify("/v1/finance_online/FinanceCard/editFinanceCard", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=521
 * 财务结算帐户列表
 * @export
 * @param {*} params
 * @returns
 */
export function financeCardList(params) {
  return postVerify("/v1/finance_online/FinanceCard/financeCardList", params);
}


/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=520
 * 结算账户列表
 * @export
 * @param {*} params
 * @returns
 */
export function PostFinanceCard(params) {
  return postVerify("/v1/finance/FinanceCard/listData", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=522
 * 集团现金流列表
 * @export
 * @param {*} params
 * @returns
 */
export function financePayList(params) {
  return postVerify("/v1/finance_online/FinancePay/financePayList", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=523
 * 添加财务结算帐户
 * @export
 * @param {*} params
 * @returns
 */
export function addFinancePay(params) {
  return postVerify("/v1/finance_online/FinancePay/addFinancePay", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=524
 * 修改财务结算帐户
 * @export
 * @param {*} params
 * @returns
 */
export function editFinancePay(params) {
  return postVerify("/v1/finance_online/FinancePay/editFinancePay", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=562
 * 帐户月统计
 * @export
 * @param {*} params
 * @returns
 */
export function payCardYmFinancePay(params) {
  return postVerify("/v1/finance_online/FinanceCard/payCardYmFinancePay", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=563
 * 帐户日累计
 * @export
 * @param {*} params
 * @returns
 */
export function financePayEveryDay(params) {
  return postVerify("/v1/finance_online/FinanceCard/financePayEveryDay", params);
}

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=564
 * 跨月数据矫正
 * @export
 * @param {*} params
 * @returns
 */
export function LogDelClassinClassout(params) {
  return postVerify("/v1/log/LogDelClassinClassout/listData", params);
}

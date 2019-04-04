import {
  getVerify,
  postVerify
} from "../utils/datadeal";

// 咨询业绩订单
export function consultantYj(params) {
  return postVerify("/v1/report/Report/consultantYj", params);
}

// 渠道资源表
export function campusPerformance(params) {
  return postVerify("/v1/report/Report/campusPerformance", params);
}

// 市场计划列表
export function marPlan(params) {
  return postVerify("/v1/market/Market/planList", params);
}
// 添加市场计划
export function addMarPlan(params) {
  return postVerify("/v1/market/Market/addPlan", params);
}
// 修改市场计划
export function editMarPlan(params) {
  return postVerify("/v1/market/Market/editPlan", params);
}
// 删除市场计划
export function delMarPlan(params) {
  return postVerify("/v1/market/Market/delPlan", params);
}
// 市场活动列表
export function marActive(params) {
  return postVerify("/v1/market/Market/activityList", params);
}
// 添加市场活动
export function addMarActive(params) {
  return postVerify("/v1/market/Market/addactivity", params);
}
// 修改市场活动
export function editMarActive(params) {
  return postVerify("/v1/market/Market/editactivity", params);
}
// 删除市场活动
export function delMarActive(params) {
  return postVerify("/v1/market/Market/delactivity", params);
}
// 资源列表
export function resource(params) {
  return postVerify("/v1/market/Market/list_student", params);
}
// 资源详情
export function resourceDetail(params) {
  return postVerify("/v1/mcrm/mcrm/info", params);
}
// 资源分布记录
export function resourceDistribution(params) {
  return postVerify("/v1/mcrm/mcrm/crm_log", params);
}
// 资源跟进列表
export function resourceFollow(params) {
  return postVerify("/v1/mcrm/CrmFollow/crmFollowList", params);
}
// 添加资源
export function resourceAdd(params) {
  return postVerify("/v1/mcrm/mcrm/add", params);
}
// 资源文件导入
export function resourceImport(params) {
  return postVerify("/v1/mcrm/ImportCrm/fileImport", params);
}
// 资源文件导入数据入库
export function importData(params) {
  return postVerify("/v1/mcrm/ImportCrm/dataStorage", params);
}
// 资源分配到校区
export function resourceSchool(params) {
  return postVerify("/v1/mcrm/Mcrm/crmPortionCampus", params);
}
//资源分配明细
export function resourceAllot(params) {
  return postVerify("/v1/mcrm/mcrm/crm_log", params);
}

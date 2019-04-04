import {
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=392
 * 城市列表
 * @export
 * @param {*} params
 * @returns
 */
export function getCityList (params) {
  return postVerify('/v1/CityCampus/list_data', params)
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=416
 * 投诉建议
 * @export
 * @param {*} params
 * @returns
 */
export function addSuggestion (params) {
  return postVerify('/v1/parent/ComplaintSuggestion/add', params)
}

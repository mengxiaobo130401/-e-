import {
  getVerify,
  postVerify
} from '../utils/datadeal'

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=414
 * 专属推荐
 * @export
 * @param {*} params
 * @returns
 */
export function recommendlist (params) {
  return postVerify('/v1/parent/ExclusiveRecommendation/listData', params)
}

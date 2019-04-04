import {
  getVerify,
  postVerify
} from "../utils/datadealUpload";

/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=48
 * 图片存储
 * @param {object} params 所需参数
 */
export function PostBatchUpload(params) {
  return postVerify("/attachment/upload/batch_upload", params);
}

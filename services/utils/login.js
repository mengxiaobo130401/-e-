import {
  getVerify,
  postVerify
} from './datadeal'
let app = getApp();

/**
 * 登陆退出
 *
 * @export
 */
export function getOut () {
  var GM = dd.getStorageSync({key:'campus2_gm'})
  if (GM.data.username && GM.data.user_id) {
    PostRetreatSafely({
      username: GM.username,
      user_id: GM.user_id
    }).then(data => {})
      .catch(err => {
      
      })
  }
  app.globalData.login = false;
  app.globalData.GM = '';
  dd.removeStorageSync({key:"campus2_gm"});
  dd.removeStorageSync({key:'campus2_token'});
  dd.reLaunch({
    url: '/page/login/index'
  })
}
/**
 * api: http: //api.nits.chnnice.com/index.php?s=/5&page_id=121
 * 安全退出
 * @export
 * @param {*} params
 * @returns
 */
export function PostRetreatSafely (params) {
  return postVerify('/v1/Quit/retreatSafely', params)
}

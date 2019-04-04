let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名

import { PostLogin, dingdingLogin, PostOneAdmin } from '../../services/pages/common'
Page({
  data: {
    login: true,
    logoimg: '',
    param: {
      username: "",
      passwd: ""
    }
  },
  loginSystem() {
    console.log(this.data.param)
    PostLogin(this.data.param)
      .then(dataPL => {
        if (dataPL) {
          // 存入token
          dd.setStorageSync({ key: "campus2_token", data: dataPL.token });

          this.getGM({
            username: dataPL.username,
            user_id: dataPL.user_id, // 用于检测用户登录安全
            userid: dataPL.user_id, // 用于请求用户信息
            token: dataPL.token
          })

        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  userName(e) {
    this.data.param.username = e.detail.value
  },
  passwd(e) {
    this.data.param.passwd = e.detail.value
  },
  getGM(param) {
    dd.showLoading();
    PostOneAdmin(param)
      .then(arr => {
        if (arr) {
          dd.setStorageSync({ key: "campus2_gm", data: arr });
          app.globalData.GM = arr;
          app.globalData.login = true;
          this.setData({
            login: true
          })
          dd.reLaunch({
            url: "/page/index/index"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  onShow() {
    dd.setStorageSync({ key: "campus2_gm", data: {} });
    this.setData({
      logoimg: app.globalData.POSTUPLOAD_URL + "/folk/image/logo.png?" + Math.random(),
      login: app.globalData.login
    })
    if (this.data.login) {
      //获取免密登录授权码
      dd.getAuthCode({
        success: (res) => {
          app.globalData.authCode = res.authCode;
          dingdingLogin({
            code: res.authCode
          })
            .then(data => {
              if (data) {
                dd.setStorageSync({ key: "campus2_token", data: data.token });
                this.getGM({
                  username: data.username,
                  user_id: data.user_id, // 用于检测用户登录安全
                  userid: data.user_id, // 用于请求用户信息
                  token: data.token
                })
              }
            })
            .catch(err => {

            })
        },
        fail: (err) => {

        }
      })
    }
  }
})
App({
  onLaunch(options) {
    // console.log('App Launch', options);
    // console.log('getSystemInfoSync', dd.getSystemInfoSync());
    // console.log('SDKVersion', dd.SDKVersion);
    // console.log(options, '123')
    this.globalData.corpId = options.query.corpId;
  },
  onShow() {
    // console.log('App Show');
  },
  onHide() {
    // console.log('App Hide');
  },
  globalData: {
    login: true,
    corpId: '',
    authCode: '',
    access_token: '',
    userid: '',
    mobile: '',
    name: '',
    GM:'',
    POST_URL: 'https://demo.nits.chnnice.com/campus2/API', //测试服
    POSTUPLOAD_URL: 'https://demo.nits.chnnice.com', //测试服文件上传
    IMG_URL: 'https://demo.nits.chnnice.com/attachment/', //图片上传测试服务器地址
    LOGIN_URL: '/campus2/nasi_madmin2.0/dist/index.html#/campus',//测试服登陆
    GETOUT_URL: '/campus2/nasi_madmin2.0/dist/index.html#/', //测试服登出
    DOWNLOAD_URL: '/campus2/nasi_madmin2.0/dist/static/template.xls#/', //测试服咨询模板下载
    DOWNLOAD_MANAGE_URL: '/campus2/nasi_madmin2.0/dist/static/ImportResource.xls#/', //测试服经理资源模板下载
    DOWNLOAD_MARKET_URL: '/campus2/nasi_madmin2.0/dist/static/ImportMarket.xls#/', //测试服市场模板下载
    ENCRYPTION_KEY: '_c_**_h2n%ni!~0~ce#ni$%c1e&cla&^%s8s_', //
  }
});
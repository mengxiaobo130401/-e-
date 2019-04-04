let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
import {getOut} from '../../services/utils/login'
Page({
  data: {
    banner: '',
    list: {
      '10': {
        workbench: [
          { name: '分配业绩', icon: '/dingding/image/performance.png?' + Math.random(), path: '' },
          { name: '退费确认', icon: '/dingding/image/return.png?' + Math.random(), path: '' },
        ],
        dataQuery: [
          { name: '每日营收', icon: '/dingding/image/dailyRevenue.png?' + Math.random(), path: '' },
          { name: '老师课耗', icon: '/dingding/image/teacherKh.png?' + Math.random(), path: '' },
          { name: '学管课耗统计', icon: '/dingding/image/LearnTubeKh.png?' + Math.random(), path: '' },
          { name: '年级课耗', icon: '/dingding/image/gradeKh.png?' + Math.random(), path: '' },
          { name: '校区课耗', icon: '/dingding/image/campusKh.png?' + Math.random(), path: '' },
        ],
        rankingList: [
          { name: '咨询师业绩', icon: '/dingding/image/consultYj.png?' + Math.random(), path: '/page/consult/index' },
          { name: '学管师业绩', icon: '/dingding/image/LearnTubeYj.png?' + Math.random(), path: '/page/LearnTube/index' },
          { name: '教师课时', icon: '/dingding/image/teacherKs.png?' + Math.random(), path: '/page/teacherKs/index' },
          { name: '校区课收', icon: '/dingding/image/campusKs.png?' + Math.random(), path: '/page/campusKs/index' },
          { name: '校区业绩', icon: '/dingding/image/campusXq.png?' + Math.random(), path: '/page/campusYj/index' },
          { name: '校区退费', icon: '/dingding/image/campusTf.png?' + Math.random(), path: '/page/campusTf/index' },
        ],
        campusReport: [
          { name: '校区年报', icon: '/dingding/image/campusNb.png?' + Math.random(), path: '' },
          { name: '校区月报', icon: '/dingding/image/campusYb.png?' + Math.random(), path: '/page/campusMonthly/index' },
          { name: '校区周报', icon: '/dingding/image/campusZb.png?' + Math.random(), path: '' },
        ],
      },
    },
    arr: [],
    role: '',
    GM: '',
    url: ''
  },
  onShow() {
    dd.hideLoading();
    this.setData({
      arr: this.data.list[app.globalData.GM.role],
      banner: app.globalData.POSTUPLOAD_URL + '/dingding/image/dd_banner.png?' + Math.random(),
      GM:app.globalData.GM,
      url: app.globalData.POSTUPLOAD_URL
    })
  },
  pathClick(e) {
    dd.navigateTo({ url: e.target.dataset.path })
  },
  logOut() {
    getOut();
  }
})
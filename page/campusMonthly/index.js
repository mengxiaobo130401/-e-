let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名

Page({
  data: {
    role: '',
    url: '',
    year: 0,
    month: 0,
    list: []
  },
  skip(e) {
    dd.navigateTo({
      url: e.target.dataset.path
    });
  },
  timestampToTime() {
    let date = new Date();
    let year,month,list = [];
    year = (date.getMonth() + 1 == 1 ? date.getFullYear() - 1 : date.getFullYear());
    month = (date.getMonth() + 1 == 1 ? 13 : date.getMonth() + 1);
  
    for (let i = 1; i < month; i++) {
      if (i < month) {
        list.push({
          name: year + "-" + (i < 10 ? "0" + i : i),
          path: "/page/monthly/index?year=" + year + "&month=" + (i < 10 ? "0" + i : i)
        });
      }
    }
    this.setData({
      list:list,
      year:year,
      month:month
    })
  },
  onShow() {
    this.setData({
      role: app.globalData.GM.rolw,
      url: app.globalData.POSTUPLOAD_URL
    })

    this.timestampToTime();
  },

})
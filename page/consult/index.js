let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名

import { achieveSort } from '../../services/pages/paidInRanking'
import { formatTime } from "../../utils/index";
Page({
  data: {
    param: {
      city: app.globalData.GM.city,
      campus: app.globalData.GM.campus,
      type: "newSign",
      min_ymd: "",
      max_ymd: ""
    },
    data: []
  },
  getData() {
    achieveSort(this.data.param)
      .then(data => {
        if (data) {
          this.setData({
            data: data.list,
            min_ymd: formatTime(data.param.min_ymd),
            max_ymd: formatTime(data.param.max_ymd),
            param: data.param
          })

        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  tapmin() {
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: this.data.min_ymd,
      success: (res) => {
        this.setData({
          min_ymd: res.date,
        })
        this.data.param.min_ymd = res.date.replace(/\-/g, "");
      },
    });
  },
  tapmax() {
    dd.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: this.data.max_ymd,
      success: (res) => {
        this.setData({
          max_ymd: res.date,
        });
        this.data.param.max_ymd = res.date.replace(/\-/g, "");
      },
      error: () => {
        this.setData({
          max_ymd: this.data.max_ymd

        })
      }
    });
  },
  search() {
    this.getData();
  },
  onShow() {
    this.data.param.city = app.globalData.GM.city;
    this.data.param.campus = app.globalData.GM.campus;
    this.getData();
  }
})
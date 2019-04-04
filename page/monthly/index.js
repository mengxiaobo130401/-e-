let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名

import { PostSearching } from '../../services/pages/common'
import { ymReport, teacher_classout_analysis, studentSubject, studentGrade } from '../../services/pages/month'
Page({
  data: {
    monthly_banner: '',
    url: '',
    year: 0,
    month: 0,
    data: {},
    teacherData: {
      campus: '无'
    },
    subjectData: [],
    gradeData: [],
    gradeList: ['6', '7', '8', '9', '10'],
    subjectList: ['1', '2', '3', '4', '5'],
    param: {
      // 请求参数
      campus: '',
      city: '', // 分公司、城市
      ym: '',//开始年月份
      max_ym: '',//结束年月份
      is_month: 1
    },
    param1: {
      // 请求参数
      campus: '',
      city: '', // 分公司、城市
      ym: '',//年月份
    },
    campus: '',
    campusList: {},
  },
  PostSearching() {
    PostSearching()
      .then(data => {
        this.setData({
          campusList: data.campus,
        })
      })
      .catch(err => {
       
      });
  },
  getData() {
    this.data.param.ym = this.data.year + '' + this.data.month;
    this.data.param.max_ym = this.data.year + '' + this.data.month;
    ymReport(this.data.param)
      .then(data => {
        if (data) {
          this.setData({
            data: data.list[0].campus_data[0]
          })
        }
      })
      .catch(err => {


      });
  },
  teacher_classout_analysis() {
    this.data.param1.ym = this.data.year + '' + this.data.month;
    teacher_classout_analysis(this.data.param1)
      .then(data => {
        if (data) {
          this.setData({
            teacherData: data.data[0]
          })
        }
        this.studentGrade();
      })
      .catch(err => {

      });
  },
  studentSubject() {
    this.data.param1.ym = this.data.year + '' + this.data.month;
    studentSubject(this.data.param1)
      .then(data => {
        if (data) {
          let list = [];
          data.data.forEach(ele => {
            if (this.data.subjectList.indexOf(ele.subject) > -1) {
              ele.classL = "";
              ele.classR = "";
              ele.across = "across"
              list.push(ele)
            }
          });
          data.other_subject.classL = "radius_letB";
          data.other_subject.classR = "radius_rigB";
          data.other_subject.across = "";
          list.push(data.other_subject)
          this.setData({
            subjectData: list
          })
        }
      })
      .catch(err => {
       
      });
  },
  studentGrade() {
    this.data.param1.ym = this.data.year + '' + this.data.month;
    studentGrade(this.data.param1)
      .then(data => {
        if (data) {
          let list = [];
          data.data.forEach(ele => {
            if (this.data.gradeList.indexOf(ele.grade) > -1) {
              ele.classL = "";
              ele.classR = "";
              ele.across = "across"
              list.push(ele)
            }
          });
          data.other_grade.classL = "radius_letB";
          data.other_grade.classR = "radius_rigB";
          data.other_grade.across = "";
          list.push(data.other_grade)
          this.setData({
            gradeData: list
          })
        }
        this.studentSubject();
      })
      .catch(err => {

      });
  },
  onLoad(option) {
    this.setData({
      year: option.year,
      month: option.month
    })
  },
  onShow() {
    this.setData({
      monthly_banner: app.globalData.POSTUPLOAD_URL + '/folk/image/monthly_banner.png?' + Math.random(),
      url: app.globalData.POSTUPLOAD_URL,
      campus: app.globalData.GM.campus
    })
    this.data.param.city = app.globalData.GM.city;
    this.data.param.campus = app.globalData.GM.campus;
    this.data.param1.city = app.globalData.GM.city;
    this.data.param1.campus = app.globalData.GM.campus;
    this.PostSearching();
    this.getData();
    this.teacher_classout_analysis();
  }
})
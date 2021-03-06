// pages/mine/mine.js
//获取应用实例
const app = getApp()
//初始化云函数调用
wx.cloud.init()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headicon:"../../images/unlogin_headicon.png",
    userInfo: {},
    hasUserInfo:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mine_menuitem: [] //这个字段的值从后台拉取
  },

  /**
   * 生命周期函数
   */
  onShow: function () {
    if(this.data.hasUserInfo) {
      //测试云函数 - 获取小程序用户信息
      wx.cloud.callFunction({
        name: 'getUserInfo',
        complete: res => {
          console.log('callFunction getUserInfo result: ', res.result)
        }
      })
    }
  },

  onLoad: function () {
    var db = wx.cloud.database({
      env: 'alan-test-eef1c6'  //必须是环境id
    })

    //这段代码采用回调方式，但是没有达到预期效果，从后台拉取数据后并不能立即显示在页面上
    //而下方的promise风格的却没有这个问题
    // db.collection("mine_colle").get({
    //   success(res) {
    //     var that = this
    //     console.log(res.data)
    //     that.setData({
    //       mine_menuitem: res.data[0].mine_menuitem
    //     })
    //   }
    // })

    db.collection("mine_colle").get().then(res => {
      this.setData({
        mine_menuitem: res.data[0].mine_menuitem
      })
    })
  },

  getUserInfo: function (e) {
    var info = e.detail.userInfo
    app.globalData.userInfo = typeof(info) != "undefined" ? info : {}
    this.setData({
      userInfo: typeof(info) != "undefined" ? info : {} ,
      hasUserInfo: this.isEmptyObject(info) ? false : true
    })
  },

  itemClick: function() {
    wx.showModal({
      title: '温馨提示',
      content: '此功能尚未开发,敬请期待...',
    })
  },

  isEmptyObject: function(obj) {
    for(var index in obj)
    {
      return false
    }

    return true
  }
})
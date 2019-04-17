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
    userInfo: {},
    hasUserInfo:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mine_menuitem: ["消费明细", "积分明细", "积分兑换"]
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
// pages/mine/mine.js
//获取应用实例
const app = getApp()

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
   * 生命周期函数--监听页面加载
   */
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },

  getUserInfo: function (e) {
    console.log(e)
    var info = e.detail.userInfo
    app.globalData.userInfo = typeof(info) != "undefined" ? info : {}
    this.setData({
      userInfo: typeof(info) != "undefined" ? info : {} ,
      hasUserInfo: this.isEmptyObject(info) ? false : true
    })

    console.log(this.data)
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
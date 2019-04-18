//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    curSelTypeName:0,

    //对象数组形式，每个元素都包含了一个类别的所有水果,从后台拉取数据
    /*
    格式：
    fruitsData: [
      {
        typeName: "进口水果",
        list: [
          {
            image: "cloud://alan-test-eef1c6.616c-alan-test-eef1c6/indexpage/activity/Apple.jpg",
            descinfo: "进口水果-苹果1",
            buyNumbers: 0
          },
          {
            image: "cloud://alan-test-eef1c6.616c-alan-test-eef1c6/indexpage/activity/Apple.jpg",
            descinfo: "进口水果-苹果7",
            buyNumbers: 0
          }
        ]
      },
      {
        typeName: "自由组合混搭",
        list: [
          {
            image: "cloud://alan-test-eef1c6.616c-alan-test-eef1c6/indexpage/activity/Apple.jpg",
            descinfo: "自由组合混搭-苹果1",
            buyNumbers: 0
          },
          {
            image: "cloud://alan-test-eef1c6.616c-alan-test-eef1c6/indexpage/activity/Apple.jpg",
            descinfo: "自由组合混搭-苹果7",
            buyNumbers: 0
          }
        ]
      }
    ]
     */
    fruitsData:[]
  },

  onLoad: function () {
    var db = wx.cloud.database({
      env: 'alan-test-eef1c6'  //必须是环境id
    })

    db.collection("index_colle").field({
      typeName: true,
      list: true
    }).get().then(res => {
        this.setData({
          fruitsData: res.data
        })
      }
    )
  },

  clickMenu: function(e) {
    this.setData({
      curSelTypeName:e.target.dataset.index
    })
  },

  //处理减持水果
  reduceNumber: function(e) {
    //想要购买的水果索引
    var index = e.target.dataset.index

    //想要购买的水果数据结构
    var fruit = this.data.fruitsData[this.data.curSelTypeName].list[index]

    //如果购买数量不能显示为负数
    if(fruit.buyNumbers === 0)
      return

    fruit.buyNumbers -= 1
    this.setData({
      fruitsData: this.data.fruitsData
    })
  },

  //处理添加水果
  addNumber: function (e) {
    //想要购买的水果索引
    var index = e.target.dataset.index

    //想要购买的水果数据结构
    var fruit = this.data.fruitsData[this.data.curSelTypeName].list[index]
    fruit.buyNumbers += 1
    // this.data.fruitsData[this.data.curSelTypeName].list[index] = fruit
    this.setData({
      fruitsData:this.data.fruitsData
    })
  }
})

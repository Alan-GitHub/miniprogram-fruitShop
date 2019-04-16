//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    curSelTypeName:0,

    //数组形式，每个元素都包含了一个类别的所有水果
    fruitsData:[
      {
        //水果类别
        typeName: "活动",
        //包含的具体水果
        list:[
          {
            descinfo: "活动-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "活动-苹果7", 
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "热卖水果",
        list: [
          {
            descinfo: "热卖水果-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果5", 
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "热卖水果-苹果7",
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "招牌水果",
        list: [
          {
            descinfo: "招牌水果-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "招牌水果-苹果7",
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "舌尖碰撞",
        list: [
          {
            descinfo: "舌尖碰撞-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "舌尖碰撞-苹果7",
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "鲜切水果单拼",
        list: [
          {
            descinfo: "鲜切水果单拼-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "鲜切水果单拼-苹果7",
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "进口水果",
        list: [
          {
            descinfo: "进口水果-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "进口水果-苹果7",
            buyNumbers: 0,
          }
        ]
      },
      {
        typeName: "自由组合混搭",
        list: [
          {
            descinfo: "自由组合混搭-苹果1",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果2",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果3",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果4",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果5",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果6",
            buyNumbers: 0,
          },
          {
            descinfo: "自由组合混搭-苹果7",
            buyNumbers: 0,
          }
        ]
      }

    ]
  },

  onLoad: function () {

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

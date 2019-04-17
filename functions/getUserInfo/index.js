/*
云函数使用规则：
1. 上传云端部署，且云端需要安装依赖，可右键云函数目录有提示
2. wx-server-sdk依赖在云端安装就可以，本地云函数目录无需安装，因为云函数运行在云端
3. 云函数和小程序里面调用云API函数前，都需要先调用云初始化API：cloud.init()
*/

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()

  return {
    OPENID,
    APPID,
    UNIONID,
  }
}
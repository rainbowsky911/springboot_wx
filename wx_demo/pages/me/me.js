// pages/me/me.js
Page({

  data: {
    hasUserInfo: false,
    userInfo: null
  },
  onLoad: function() {
    // 页面加载时使用用户授权逻辑，弹出确认的框  
    this.userAuthorized()
    this.pay()
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
      })
  },
  
  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },

  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if (userInfo) {
      // 1. 小程序通过wx.login()获取code
      wx.login({
        success: function(login_res) {
          //获取用户信息
          wx.getUserInfo({
            success: function(info_res) {
              console.log(info_res)
              // 2. 小程序通过wx.request()发送code到开发者服务器
              wx.request({
                url: 'http://localhost:9501/wx/login',
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded',
                  "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6IiIsInVzZXJOYW1lIjoiYWRtaW4iLCJleHAiOjE1OTgwMTA2NTYsInNpZ25UaW1lTWlsbGlzIjoxNTk4MDAzNDU2MDEzLCJxdWV1ZSI6MTU5ODAwMzQ1NjAxM30.JgpOGBBMyggaZhbQI1mUqbtKZxRzGwb17tNYNcFlRqA"
                },
                data: {
                  code: login_res.code, //临时登录凭证
                  rawData: info_res.rawData, //用户非敏感信息
                  signature: info_res.signature, //签名
                  encrypteData: info_res.encryptedData, //用户敏感信息
                  iv: info_res.iv //解密算法的向量
                
                },
                success: function(res) {
                  if (res.data.status == 200) {
                    // 7.小程序存储skey（自定义登录状态）到本地
                    wx.setStorageSync('userInfo', userInfo);
                    wx.setStorageSync('skey', res.data.data);
                  
                    console.log(res)
                  } else{
                    console.log('服务器异常');
                  }
                },
                fail: function(error) {
                  //调用服务端登录接口失败
                  console.log(error);
                }
              })
            }
          })
        }
      })
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  }
,
pay : function(){
  wx.requestPayment({
    timeStamp: '1592990972',
    nonceStr: 'NOq3HYlgvWvK1T7og6F32QGHofahOqPf',
    package: 'prepay_id=wx241729332331207a205424f11497384700',
    signType: 'MD5',
    paySign: '0557BDFE16385CCFE87FE96223CF5EDE',
    success: (result) => {
    },
    fail: () => {
    },
    complete: () => {
    }
  });
},
shareInfo: function () {
  const shareMenu = {
    withShareTicket: true,
    // isUpdatableMessage: false,
    // templateInfo: {
    //   parameterList: [{
    //     name: 'member_count',
    //     value: '1'
    //   }, {
    //     name: 'room_limit',
    //     value: '3'
    //   }]
    // },
    // 方法操作
    complete: (message) => {
      console.log('完成操作...', message);
    },
    fail: (error) => {
      console.log(error);
      wx.showToast({
        title: '分享失败',
        icon: 'fail',
        duration: 2000
      })
    },
    success: (message) => {
      console.log(message);
      wx.showModal({
        title: '分享成功',
        content: '分享成功,点击确定返回首页',
        success(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        }
      });
    }
  };
  // wx.updateShareMenu(shareMenu);
  wx.showShareMenu(shareMenu);
},
//点击意见反馈
yjfk:function(){
 
  wx.navigateToMiniProgram({
    appId: 'wx5b9356602c722c70',//要打开的小程序appId
    path: 'pages/index/index',
    envVersion: 'release',
    extraData: {
     
    },
    success(res) {
      // 打开成功
      wx.showToast({
        title: '跳转成功',
      })
      
    },complete(res){
      console.log(res)
    }
  })
},

queryRequest :function (){    
  wx.request({
    url: 'http://127.0.0.1:8080/pay/createOrder/',
    method:"POST",
    header: { 'content-type': 'application/x-www-form-urlencoded' }, 
    success: function (res) {
      console.log(res.data)
    }
  });

},

payNow :function(){
  wx.requestPayment({
    timeStamp: '1594706961',
    nonceStr: 'bHoPZFD1jZcR51p6',
    package: 'prepay_id=wx1414092238240812bef6c7f71402508500',
    signType: 'MD5',
    paySign: 'D188EFD3C1E386E15E6A43190E958151',
    success (res) { 
      console.log("succ"+res)
    },
    fail (res) { 
      console.log(res)
    }
  })
},

 onShareAppMessage :function(res){
   return {
     title:"传统分享标题"
   }
 },

 onShareTimeLine :function(res){
   return{
    title:"转发到朋友圈",
    query:"携带的参数"
   }
 },
 
})
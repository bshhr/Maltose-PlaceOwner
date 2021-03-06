//app.js
App({
  onLaunch: function (options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    if (options.query && options.query['redirectUrl'] && options.query['type']) {
      var redirectUrl = options.query['redirectUrl']
      var pageType = options.query['type']
      this.globalData.firstPage = redirectUrl
      this.globalData.firstPageType = pageType
    }
    /*if (!this.globalData.hasLogin) {
      wx.navigateTo({
        url: "/pages/login/login"
      })
    }*/
  },
  globalData: {
    firstPage: '/pages/placeList/placeList',
    firstPageType: 'tab',
    userInfo: null,
    hasLogin: false,
    cookie: null,
    host: 'http://192.168.0.7:60154',
    role:"PlaceOwner"
  }
})
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newslist: [
      {
        image: "/image/notice.png",
        business: "账户通知",
        content: "你有一张神秘卡劵未领取，满99减50，快来领取吧",
        time: "今天",
        state: false
      },
      {
        image: "/image/perferential.png",
        business: "优惠促销",
        content: "为你挑选的华为荣耀系列闪亮登场",
        time: "昨天",
        state: false
      },
      {
        image: "/image/jing.jpg",
        business: "京东试用官方号",
        content: "感谢您关注本试用号，更多精彩内容查看往期",
        time: "6天前",
        state: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.newslist=this.selectComponent("#newslist")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
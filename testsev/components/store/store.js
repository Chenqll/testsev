// components/store/store.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  //组件的属性列表
  properties: {
    image: {
      type: null,
      value: '图片'
    },
    title: {
      type: String,
      value: '标题'
    },
    number: {
      type: Number,
      value: '人数'
    },
    price: {
      type: Number,
      value: '价格'
    },

    imageNumber:{
      type:null,
      value:'顾客'
    }
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
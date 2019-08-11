// pages/collect/collect.js
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    shoplist: [
      {
        image: "/image/san.jpg",
        title: "三只松鼠 互联网零食坚果畅销品牌 每年销量可绕全球三圈 你买不了吃亏买不了上当",
        number: '50',
        price: '2398',
        imageNumber: [{
          images: "/image/1.jpg"
        },
        {
          images: "/image/news.png"
        },
        {
          images: "/image/san.jpg"
        }]
      },

      {
        image: "/image/huawei.png",
        title: "华为官方旗舰店 限时秒杀 nova5你毕业色更美 华为平板全新上市",
        number: '500',
        price: '1399',
        imageNumber: [{
          images: "/image/news.png"
        },
        {
          images: "/image/taobao.jpg"
        },
        {
          images: "/image/san.jpg"
        }]
      },
      {
        image: "/image/2.jpg",
        title: "荣耀10青春版 幻彩渐变 2400万AI自拍 全网通版4GB+64GB 渐变蓝 移动联通电信4G全面屏手机 双卡双待",
        number: '2',
        price: '999',
        imageNumber: [{
          images: "/image/san.jpg"
        },
        {
          images: "/image/taobao.jpg"
        },
        {
          images: "/image/news.png"
        }]
      }
    ],
  

    storelist:[
      {
      image:"/image/1.jpg",
        title:"Nike Air Jordan 1 AJ1 红勾黑脚趾 高帮篮球鞋男555088-061 44",
      number:'50',
      price:'2398',
      imageNumber:[{
        images: "/image/taobao.jpg"
      },
        {
          images: "/image/news.png"
        },
        {
          images: "/image/san.jpg"
      }]
    },
    
    {
      image:"/image/3.jpg",
      title: "耐克NIKE JORDAN 1 AJ 乔1男子篮球鞋554724919704 白绿CD6759-103 ",
      number:'500',
      price:'1399',
      imageNumber: [{
        images: "/image/news.png"
      },
      {
        images: "/image/taobao.jpg"
      },
      {
        images: "/image/san.jpg"
      }]
    },
    {
      image:"/image/2.jpg",
      title: "【现货】小黑金亮皮AJ1男女852542-007 BQ6931-007 852542-005 852542-007/BQ6931-007 黑金 42",
      number: '2',
      price: '1999',
      imageNumber: [{
        images: "/image/san.jpg"
      },
      {
        images: "/image/taobao.jpg"
      },
      {
        images: "/image/news.png"
      }]
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
    this.store=this.selectComponent("#store");
    /*const query = this.createSelectorQuery();
    query.select('.swiper-item').boundingClientRect();
    query.exec(function (res){
      console.log(res);
      console.log(res[0].height);
      let sumHeight=res[0].height*data.t.length;
      this.setData({
        swiperHeight:sumHeight
      })
    })*/
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

  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换 
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
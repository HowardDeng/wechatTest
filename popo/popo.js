// popo/popo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vheight:0,
    vlist: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          vheight:res.windowHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation=wx.createAnimation({
      duration:4000,
    });
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
  onPop:function(){
    this.animation.translate(0, -1 * this.data.vheight + 80 / 750 * this.data.vheight).step()
    this.setData({ animation: this.animation.export() })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
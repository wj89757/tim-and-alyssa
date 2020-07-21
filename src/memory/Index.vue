<template>
  <KView class="page toast js_show">
    <text style="margin-top:160px;text-align:center">我们在一起：{{time}}天啦</text>

    <span>内容过于喜庆,请调低音量</span>
    <video style="margin:0 auto;margin-left:45px;" src="https://timwang89757-bucket.oss-cn-beijing.aliyuncs.com/VID_20200124_180924.mp4" autoplay="false"></video>
  </KView>
</template>

<script>

const bgMusic = wx.getBackgroundAudioManager() 

export default {
    data() {
        return {
            successTips: false,
            loadingToast: false,
            time : ''
        }
    },
    methods: {
        successShow() {
            this.successTips = true
        },
        loadingShow() {
            this.loadingToast = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.loadingToast = false
            }, 1000)
        },
        // 开始播放
        listenerButtonPlay: function (src) {
          var that = this
          bgMusic.src = src;
          bgMusic.onTimeUpdate(() => {  //监听音频播放进度
            console.log(bgMusic.currentTime)
          })
          bgMusic.onEnded(() => {  //监听音乐自然播放结束
            console.log("音乐播放结束");
          })
          bgMusic.play(); //播放音乐
        },
        onUnload() {
          var that = this
          that.listenerButtonStop()//页面卸载时停止播放
          console.log("离开")
        },
        //暂停
        audioPause: function () {
          var that = this
          bgMusic.pause(); //暂停播放音乐
          console.log('暂停')
        },
        audioPlay: function () {
          var that = this
          bgMusic.play(); //停止播放
          console.log('继续播放')
        },
        //停止播放
        listenerButtonStop: function () {
          bgMusic.stop()
        },
    },
    mounted : function() {
      var beginDate = new Date('2013/04/02 18:00');
      var nowDate = new Date();
      var between = nowDate.getTime() - beginDate.getTime();
      var total = between/1000;
      this.time = parseInt(total/(24*60*60));
      // this.listenerButtonPlay('https://timwang89757-bucket.oss-cn-beijing.aliyuncs.com/18aed8196134f210f364e875c914a1bd.mp3');
    },
    created : function() {

    }
}
</script>

<template>
  <KView class="page home js_show">
       <KView class="page__hd">
            <h1 class="page__title">
                To 小刘
            </h1>
            <p class="page__desc">
              今晚的星星和月亮都像你，闪光的好看
            </p>
            <p class="page__desc">
              这个世界乱乱糟糟，而你悬在我的心上，干干净净，做我的月亮
            </p>
        </KView>
        <div style="text-align:center">
            <p style="margin-left: 26px;margin-bottom: 5px;color: #666;">这个是你第一次去我家，2020年元旦，我妈给我们买的很可爱的情侣睡衣</p>
            <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggwh4dy6o7j31400u0n9x.jpg"/>

            <p style="margin-left: 26px;margin-bottom: 5px;color: #666;">这个是我们疫情之后第一次出去玩~去了黄浦江边的艺术馆，我们小刘好看~</p>
            <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggwheyw3whj31400u0kj4.jpg"/>

            <p style="margin-left: 26px;margin-bottom: 5px;color: #666;">去西安见家长，然后去的回民街，哈哈哈还记得你跟烤串的要猪肉串🤣</p>
            <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggwhh5xyj9j31400u04qp.jpg"/>

            <p style="margin-left: 26px;margin-bottom: 5px;color: #666;">我们一起在杭州西湖边~</p>
            <img
              style="width:320px;height:450px;" mode="scaleToFill"
              src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggwhk4m6atj30u0140dnu.jpg"/>

            <p style="margin-left: 26px;margin-bottom: 5px;color: #666;">两个小短腿</p>
            <img
              style="height: 320px;transform: rotate(90deg);" mode="scaleToFill"
              src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggwhmmmemzj31400u0x52.jpg"/>
        </div>
  </KView>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'Button',
  methods: {
    getUserInfo(e) {
      console.log(e)
    }
  }
})
</script>

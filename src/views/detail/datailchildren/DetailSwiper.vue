<template>
  <div>
    <swiper>
        <van-swipe-item v-for="item in swiperdata" :key="item" class="detailswiper" >
          <img :src="item" alt="" style="width:100% " >
        </van-swipe-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
export default {
  name:"DetailSwiper",
  components:{
    Swiper
  },
  data(){
    return{
      imgok:true
    }
  },
  props:{
    swiperdata:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  .detailswiper{
    height: 300px;
  }
</style>>

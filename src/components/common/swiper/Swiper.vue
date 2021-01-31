<template>
<div>
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" >
    <slot>
      <van-swipe-item v-for="item in banners" :key="item.image"  >
        <a :href="item.link">
          <img :src="item.image" alt="" style="width:100% " @load="imgload">
        </a>
      </van-swipe-item>
    </slot>
  </van-swipe>
</div>
</template>

<script>
	export default {
    name: "Swiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        imgloadok:false
      }
    },
    methods:{
    imgload(){
      if(!this.imgloadok){
        this.$emit('swiperloatop')
        this.imgloadok=true
      }
    }
  },
    mounted(){
  },
    components:{
    },
  }
  
</script>

<style scoped>
  .van-swipe-item {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
  }
</style>

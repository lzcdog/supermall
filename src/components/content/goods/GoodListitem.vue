<template>
  <div class="goodListitem" @click="goodsclick">
    <!-- @load加载完毕 -->
    <img v-lazy="showimg" alt="" @load="imgok">
    <div class="info">
      <p >{{items.title}}</p>
      <span class="price">{{items.price}}</span>
      <span class="collect">{{items.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodListitem",
  props:{
    items:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showimg(){
      if(this.items.image){
        return this.items.image 
      }if(this.items.img){
        return this.items.img 
      }else{
        return this.items.show.img
      }
    }
  },
  methods:{
    imgok(){
      this.$bus.$emit('itemimgload')
      //第一种方法路由判断
      // if(this.$route.path.indexOf('/detail')){
      //     this.$bus.$emit('detailitemimgload')
      // }else if(this.$route.path.indexOf('/home')){
      //     this.$bus.$emit('homeitemimgload')
      // }
    },
    //点击进去商品详情
    goodsclick(){
      this.$router.push('/detail/'+this.items.iid)
    }
  }
}
</script>

<style scoped>
  .goodListitem{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goodListitem img{
    width: 100%;
    border-radius: 5px;
  }
  .info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
  }
  .info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .info .price{
    margin-right: 20px;
    color: var(--color-high-text);
  }

  .info .collect{
    position: relative;
  }

    .info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
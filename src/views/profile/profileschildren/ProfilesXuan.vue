<template>
  <div>
    <div class="yangsi">
      <img src="../../../assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="yangsi">
      <img src="../../../assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="yangsi">
      <img src="../../../assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
    <div class="yangsi">
      <img src="../../../assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="yangsi">
      <img src="../../../assets/img/profile/shopping.svg" alt="">
      <span>下载购物App</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfilesXuan"
}
</script>

<style scoped>
  .yangsi{
    width: 100%;
    padding:8px 20px;
    border-bottom: 2px solid #eeeeee;
  }
  .yangsi img{
    width: 7%;
    vertical-align:middle
  }
  .yangsi span{
    margin-left: 5px;
  }
  .yangsi:nth-child(3){
    border-bottom: 15px solid #eeeeee;
  }
</style>
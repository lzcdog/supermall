<template>
  <div class="profilesinfo">
    <div class="yangsi">
      <p>0.00元</p>
      <p>我的余额</p>
    </div>
    <div class="yangsi">
      <p>0个</p>
      <p>我的优惠</p>
    </div>
    <div class="yangsi">
      <p>0分</p>
      <p>我的积分</p>
    </div>   
  </div>
</template>

<script>
export default {
  name:"ProfilesInfo"
}
</script>

<style scoped>
  .profilesinfo{
    display: flex;
    background-color: #fff;
    border-bottom: 15px solid #eeeeee;
  }
  .yangsi{
    padding: 20px;
    width: 100%;
    text-align: center;
  }
  .yangsi p:first-child{
    font-size: 1.3em;
    color: rgb(255, 102, 0);
  }
  .yangsi p:last-child{
    margin-top: 5px;
    font-size: 0.8em;
  }
</style>
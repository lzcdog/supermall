<template>

  <div class="detailrate">

    <div class="rate-title">
      <span>用户评价</span>
      <a href="#" class="rate-more"><span>更多</span></a>
    </div>

    <div class="rate-user"  v-if="ratedata.user">
      <img :src="ratedata.user.avatar" alt="" class="user-img" >
      <span class="user-name">{{ratedata.user.uname}}</span>
    </div>

    <div class="rate-content">
      <p>{{ratedata.content}}</p>
      <div>
        <span>{{showdate}}</span>
        <span>{{ratedata.style}}</span>
      </div>
      <div  class="content-img">
        <img :src="item" alt="" v-for="(item,index) in ratedata.images" :key="index">
      </div>
    </div>

  </div>

</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  name:"DetailRate",
  props:{
    ratedata:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showdate(){
      const date = new Date(this.ratedata.created*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .detailrate{
    margin-top: 15px;
    padding: 0 15px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }
  .rate-title{
    padding: 0 0 15px 0;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }
  .rate-title .rate-more{
    float: right;
    font-size: 0.8em;
  }
  .rate-user{
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .rate-user .user-img{
    width: 45px;
    height: 45px;
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,.1);

  }
  .rate-user .user-name{
    margin-left: 10px;
    vertical-align: center;
  }
  
  .rate-content{
    color: rgb(153, 153, 153);
    font-size: 0.9em;
  }
  .rate-content p{
    padding: 10px 0 5px 0;
    text-indent:1em;
  }
  .rate-content span{
    padding-right: 10px;
  }
  .content-img{
    margin-bottom: 20px;
  }
  .rate-content img{
    width: 70px;
    height: 70px;
    margin-right: 5px;  
    margin-top: 10px;
  }
</style>
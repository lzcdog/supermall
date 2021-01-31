<template>
  <div v-if="Object.keys(basedata).length !== 0" class="base-info">

    <div class="base-title">{{basedata.title}}</div>

    <div class="base-price">
      <span class="newprice">{{basedata.price}}</span>
      <span class="oldprice">{{basedata.oldPrice}}</span>
      <span v-if="basedata.discount" class="discount">{{basedata.discount}}</span>
    </div>

    <div class="columns" v-if="basedata.columns && basedata.services">
      <span>{{basedata.columns[0]}}</span>
      <span>{{basedata.columns[1]}}</span>
      <span>{{basedata.services[basedata.services.length-1].name}}</span>
    </div>

    <div class="info-service" v-if="basedata.services">
      <span class="info-service-item" v-for="index in basedata.services.length-1" :key="index" >
        <img :src="basedata.services[index-1].icon">
        <span>{{basedata.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"DeatailBaseInfo",
  props:{
    basedata:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
    columns:null
    }
  }
}
</script>

<style scope>
  .base-info{
    margin-top: 10px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .base-title{
    color:black;
    font-size: 1em;
  }
  .base-price{
    margin-top: 15px;
  }
  .newprice{
    color: var(--color-high-text);
    font-size: 20px;
    margin-right: 5px;
  }
  .oldprice{
    text-decoration:line-through;
    font-size: 13px;
    margin-right: 5px;
  }
  .discount{
    background-color: var(--color-high-text);
    border-radius: 5px;
    color: white;
    font-size: 14px;
    padding: 2px 5px;
  }
  .columns{
    line-height: 30px;
    color: #808080;
    font-size: 14px;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }

  .info-service img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  
  .info-service-item span {
    font-size: 0.7em;
    color: #333;
  }
</style>
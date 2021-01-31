<template>

  <div id="detailshow">
    <div class="show-title">
      <div class="show-title-start"></div>
      <span class="show-desc">{{showdata.desc}}</span>
      <div class="show-title-end"></div>
    </div>

    <div class="show-key">
      <span>{{showdata.key}}</span>
    </div>

    <div v-for="item in showdata.list" :key="item.list">
        <img :src="item" alt="" class="show-img" @load="imgload">
    </div>
  </div>

</template>

<script>
export default {
  name:"Detailshow",
  props:{
    showdata:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      imgloadindex:0
    }
  },
  methods:{
    imgload(){
      // if(++this.imgloadindex ===  this.showdata.list.length){
      //   this.$emit('imgload')
      // }
        this.$emit('imgload')
    },
  }
}
</script>

<style scoped>
  #detailshow{
    padding: 0 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .show-desc{
    font-size: 0.8em;
  }
  .show-title{
    margin-top: 20px;
  }
  .show-title-start{
    width: 80px;
    height: 1px;
    background-color: black;
    margin-bottom: 20px;
    
  }
  .show-desc{
    margin-top: 10px;
    line-height: 20px;
  }
  .show-title-end{
    margin-top: 20px;
    width: 80px;
    height: 1px;
    background-color: black;
    float: right;
  }
  .show-img{
    width: 100%;
  }
  .show-key{
    margin-top: 30px;
    font-size: 0.8em;
    margin-bottom: 15px;
    font-weight: bold;
  }
</style>
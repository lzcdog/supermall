<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.image" class="recommendsitem">
      <a :href="item.link">
        <img :src="item.image" alt="">
          <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommendview',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommends{
    width: 100%;
    display: flex;
    padding: 15px 0 30px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommendsitem{
    flex: 1;
    text-align: center;
    font-size: 0.8em;
    font-weight: bold;
  }
  .recommendsitem img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>

</style>
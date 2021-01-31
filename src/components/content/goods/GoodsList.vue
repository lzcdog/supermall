<template>
  <div class="goods-list">
    <good-listitem  v-for="(item,index) in goods" :key="index" :items="item"></good-listitem>
  </div>
</template>

<script>
import GoodListitem from './GoodListitem'
export default {
  components: { 
    GoodListitem 
  },
  name:"GoodList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scope>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 4.5px;
  }
</style>
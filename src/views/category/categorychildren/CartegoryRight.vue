<template>
  <div class="categoryright">
      <cartegory-right-item v-for="(item,index) in kinddata" :key="index" :itemdata="item"></cartegory-right-item>
  </div>
</template>

<script>
import CartegoryRightItem from '@/views/category/categorychildren/CartegoryRightItem'
export default {
  name:"CategoryRight",
  components:{
    CartegoryRightItem
  },
  props:{
    kinddata:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .categoryright{
    display: flex;
    flex-wrap: wrap 
  }
</style>
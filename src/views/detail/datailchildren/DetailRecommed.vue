<template>
  <div>
    <goods-list :goods="recommenddata"></goods-list>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'
export default {
  name:"DetailRecommend",
  components:{
    GoodsList
  },
  props:{
    recommenddata:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
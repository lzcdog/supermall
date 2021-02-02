<template>
  <div class="cartegoryrightitem">
    <div class="context">
      <a :href="itemdata.link">
        <img :src="itemdata.image" alt="" >
        <p>{{itemdata.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"CartegoryRightItem",
  props:{
    itemdata:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .cartegoryrightitem{
    width: 33%;
  }
  .context{
    text-align: center;
    padding-bottom: 10px;
  }
  .cartegoryrightitem img{
    width: 100%;
    padding: 10px;
  }
</style>
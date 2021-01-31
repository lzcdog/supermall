<template>
  <div class="tab-controller">
    <div class="tab-controller-item" v-for="(item,index) in titles" @click="indexclick(index)" :key="index" :class="{active:index === currindex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabController',
  data(){
    return{
      currindex : 0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    indexclick(index){
      this.currindex = index
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style scoped>
  .tab-controller{
    background-color: #fff;
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-controller-item{
    flex: 1;
  }

  .tab-controller span{
    padding: 3px;
  }

  .active{
    color: var(--color-high-text);
  }
  
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
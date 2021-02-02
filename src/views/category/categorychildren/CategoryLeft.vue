<template>
  <div class="categoryleft">
    <ul >
      <li 
        v-for="(item,index) in listdata" 
        :key="index"
        @click="leftclick(index,item.maitKey,item.miniWallkey)" 
        :class="{active : index === currindex}"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"CategoryLeft",
  data(){
    return{
    }
  },
  props:{
    listdata:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currindex:0
    }
  },
  methods:{
    leftclick(index,maitKey,miniWallkey){
      this.currindex = index
      this.$emit('pushmaitKey',maitKey,miniWallkey)
    },
  }
}
</script>

<style scoped>
  .categoryleft{
    width: 90px;
  }
  .categoryleft li{
    font-size: 13px;
    text-align: center;
    padding: 15px 15px;
  }
  .active{
    border-left: 3px solid pink;
    background-color: #fff;
    color: var(--color-high-text);
    font-weight: bold;
  }
</style>
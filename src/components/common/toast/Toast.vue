<template>
<div class="toast" v-show="isshow">
    {{message}}
</div>
</template>

<script>
export default {
  name:"Toast",
  // props:{
  //   message:{
  //     type:String,
  //     default(){
  //       return ""
  //     }
  //   }
  // },
  data(){
    return{
      message:"",
      isshow:false
    }
  },
  methods:{
    show(message,time){
      this.message = message
      this.isshow = true
      setTimeout(() => {
      this.isshow = false
      this.message = ""
      }, time);
    }
  }
}
</script>

<style scoped>
  .toast{
    text-align: center;
    padding: 5px 10px;
    color: #fff;
    background-color: rgb(0,0,0,.7);
    width: 150px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
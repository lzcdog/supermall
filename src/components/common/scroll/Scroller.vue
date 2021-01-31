<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Scroller',
    props:{
      probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default:false
        }
    },
    data(){
      return{
        scroll:null,
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      }),
      this.scroll.on("scroll",(position)=>{
        this.$emit('scroll',position)
      })
      //上拉加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup')
      })
      }
    },
    methods:{
      //scroll的回到头部方法
      scrollTo(x,y,time){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      //完成上拉再调用上拉
      finishup(){
        this.scroll && this.scroll.finishPullUp()
      },
      //图片加载完成更新hegiht
      refresh(){
        this.scroll.refresh()
      },
      //记录离开时候的Y
      saveY(){
        return this.scroll ? this.scroll.y :0
      }
    }
  }
</script>

<style>

</style>
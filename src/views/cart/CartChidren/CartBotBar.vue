<template>
  <div class="cartbotbar">
    <div class="cheak">
      <cheak-box @click.native="allcheak" :class="{allcheak:cheakbol}"></cheak-box>
      <span v-show="false">{{cheakok}}</span>
      <span>全选</span>
    </div>
    <div class="price">
      <span>合计：{{cheakPrice}}</span>
    </div>
    <div class="sum" @click="sumclick">
      <span>去计算({{cheaklength}})</span>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import Toast from '@/components/common/toast/Toast'
import {cheackbox} from '@/common/mixin'
export default {
  name:"CartBotBar",
  components:{
    Toast
  },
  mixins:[cheackbox],
  computed:{
    cheakPrice(){
      return '￥'+this.cartList.filter(item =>{
        return item.cheak
      }).reduce((preValue,item)=>{
        return  (preValue+item.price * item.count )
      },0).toFixed(2)
    },
    cheaklength(){
      return this.cartList.filter(item => item.cheak).length
    },
  },
  methods:{
    sumclick(){
      if(this.cartList.filter(item => item.cheak).length==0){
        this.$refs.toast.show('请选择商品',2000)
    }else{
        this.$refs.toast.show('当前价格为'+this.cheakPrice,2000)
    }
  }
  },
  mounted(){
    this.$bus.$on("synccheakbol",(cheakbol)=>{
      this.cheakbol = cheakbol
    })
  }
}
</script>

<style scoped>
  .cartbotbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(238, 238, 238);
  }
  .cheak{
    display: flex;
    align-items: center;
  }
  .price{
    width: 120px;
  }
  .sum{
    line-height: 40px;
    background-color: rgb(253, 117, 6);
    height: 100%;
    width: 80px;
    color: #fff;
  }
  .allcheak{
  background-color: red;
  border-radius: 50%;
  }
</style>
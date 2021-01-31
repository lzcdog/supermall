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
import CheakBox from '@/components/content/cheakbox/CheakBox'
import Toast from '@/components/common/toast/Toast'
import {mapGetters} from 'vuex'
export default {
  name:"CartBotBar",
  components:{
    CheakBox,
    Toast
  },
  data(){
    return{
      cheakbol:false
    }
  },
  computed:{
    ...mapGetters(['cartList']),
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
    cheakok(){
            let test =0
        this.cartList.map(item => {
          if(item.cheak == false ){
              test+=1
          }
          if(test ==0 ){
            return this.cheakbol = true
          }else{
            return this.cheakbol = false
          }
        })
    }
  },
  methods:{
    allcheak(){
        this.cartList.map(item =>{
          return item.cheak = !this.cheakbol
        })
    },
    sumclick(){
      if(this.cartList.filter(item => item.cheak).length==0){
        this.$refs.toast.show('请选择商品',2000)
    }else{
        this.$refs.toast.show('当前价格为'+this.cheakPrice,2000)
    }
  }
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
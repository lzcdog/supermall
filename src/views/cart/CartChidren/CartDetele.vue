<template>
  <div class="cartdetele">
    <div class="cheak">
      <cheak-box @click.native="allcheak" :class="{allcheak:cheakbol}"></cheak-box>
      <span v-show="false">{{cheakok}}</span>
      <span>全选</span>
    </div>
    <div class="delete">
      <span @click="deletegood">删除</span>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import {cheackbox} from "../../../common/mixin"
import Toast from '@/components/common/toast/Toast'
export default {
  name:"CartDetele",
  mixins:[cheackbox],
  components:{
    Toast
  },
  methods:{
    deletegood(){
      if(this.cartList.filter(item => item.cheak).length == 0){
        this.$refs.toast.show('请选择删除的商品',1000)
      }else if(this.cartList.filter(item => item.cheak).length <= this.cartList.length){
        // this.cartList.remove(this.cartList.filter(item => item.cheak))
        this.cartList.filter(item => item.cheak).map(item=>{
          let t = null
          this.t = item
          this.cartList.splice(this.cartList.indexOf(item),1)
          this.cheakbol = false
          this.$bus.$emit("synccheakbol",this.cheakbol)
        this.$refs.toast.show('删除成功',1000)
      });
      }
    }
  }
}
</script>

<style scoped> 
  .cartdetele{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .allcheak{
  background-color: red;
  border-radius: 50%;
  }
  .cheak{
    display: flex;
    align-items: center;
  }
  .delete{
    border: 1px solid red;
    border-radius: 18%;
    width: 15%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: red;
    margin-right: 5%;
  }
</style>
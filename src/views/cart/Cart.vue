<template>
<div class="cart">
  <navbar class="navbar" >
    <span slot="center">购物车({{cartLength}})</span>
    <span slot="right" @click="deleshow">{{deletebol ? '完成' : '管理'}}</span>
  </navbar>

  <scroller class="content" ref="contenttop">
      <cart-list class="cartlist"></cart-list>
  </scroller>

  <cart-detele class="cartdetele" v-show="deletebol" ></cart-detele>
  <cart-bot-bar class="cartbotbar" v-show="!deletebol"></cart-bot-bar>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from '@/components/common/navbar/Navbar'
import CartList from '@/views/cart/CartChidren/CartList'
import CartBotBar from '@/views/cart/CartChidren/CartBotBar'
import CartDetele from '@/views/cart/CartChidren/CartDetele'
import Scroller from '@/components/common/scroll/Scroller'
  export default {
    name: "Cart",
    components:{
      Navbar,
      CartList,
      CartBotBar,
      CartDetele,
      Scroller
    },
    data(){
      return{
        deletebol:false
      }
    },
    computed:{
      ...mapGetters(['cartLength','cartList']),
      // ...mapGetters({
      //   showcart:'cartLength'
      // }),
      showcart(){
        // return this.$store.getters.cartLength
      }
    },
    methods:{
      deleshow(){
        this.deletebol = !this.deletebol
      }
    },
    activated(){
      this.$refs.contenttop.refresh()
    }
  }
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart{
    height: 100vh;
    background-color: #fff;
    position: relative;
  }
  .content{
    /* height: 100%; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
  .cartbotbar{
    position: absolute;
    bottom: 49px;
    height: 40px;
    background-color:rgb(230, 230, 230);
    width: 100%;
  }
  .cartdetele{
    position: absolute;
    bottom: 49px;
    height: 40px;
    background-color:rgb(230, 230, 230);
    width: 100%;
  }
</style>

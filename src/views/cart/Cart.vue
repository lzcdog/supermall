<template>
<div class="cart">
  <navbar class="navbar">
    <span slot="center">购物车({{cartLength}})</span>
  </navbar>

  <scroller class="content" ref="contenttop">
      <cart-list class="cartlist"></cart-list>
  </scroller>

  <cart-bot-bar class="cartbotbar"></cart-bot-bar>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from '@/components/common/navbar/Navbar'
import CartList from '@/views/cart/CartChidren/CartList'
import CartBotBar from '@/views/cart/CartChidren/CartBotBar'
import Scroller from '@/components/common/scroll/Scroller'
  export default {
    name: "Cart",
    components:{
      Navbar,
      CartList,
      CartBotBar,
      Scroller
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
    background-color:rgb(194, 194, 194);
    width: 100%;
  }
</style>

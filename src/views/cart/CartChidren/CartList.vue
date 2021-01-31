<template>
  <div>
    <div v-for="(item,index) in cartList" :key="index">
      <cart-listitem :listdata="item"></cart-listitem>
    </div>
  </div>
</template>

<script>
import CartListitem from '@/views/cart/CartChidren/CartListitem'
import {mapGetters} from 'vuex'
export default {
  name:"CartList",
  components:{
    CartListitem,
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

</style>
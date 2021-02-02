<template>
  <div class="cartnavbar">
    <navbar>
      <div slot="center">分类</div>
    </navbar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar'
export default {
  name:"CartNavBar",
  components:{
    Navbar
  }
}
</script>

<style scoped>
  .cartnavbar{
    position: fixed;
    width: 100%;
    z-index: 9;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
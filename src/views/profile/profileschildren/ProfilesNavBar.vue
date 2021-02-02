<template>
  <div class="profilesnavbar">
    <navbar>
      <div slot="center">个人中心</div>
    </navbar>
  </div>
</template>

<script>
  import Navbar from '@/components/common/navbar/Navbar'
  export default {
    name:"ProfilesNavBar",
    components:{
      Navbar
    }
  }
</script>

<style scoped>
  .profilesnavbar{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
<template>
  <div class="profilesperson">
    <div class="avatar">
      <img src="../../../assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="login">
      <p style="font-size:1.2em">登录/注册</p>
      <p>
        <img src="../../../assets/img/svg/shouji.svg" alt="">
        暂无绑定手机号
      </p>
    </div>
    <div class="arrow">
      <img src="../../../assets/img/svg/jiantou.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfilesPerson"
}
</script>

<style scoped>
  .profilesperson{
    margin: 44px 0 0;
    padding: 20px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #ff8198;
    color:#fff;
  }
  .profilesperson .avatar{
    width: 30%;
  }
  .profilesperson .avatar img{
    width: 100%;
  }
  .profilesperson .login{
    padding: 0 3%;
    width: 80%;
  }
  .profilesperson .login img{
    width: 10%;
    vertical-align:middle
  }
  .profilesperson .arrow{
    text-align: center;
    width: 30%;
  }
  .profilesperson .arrow img{
    width: 20%;
  }
</style>
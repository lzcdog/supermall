<template>
  <div>
    <navbar>

      <div class="detail-nav-left" slot="left" @click="backclick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      
      <div slot="center" class="centertitle" >
        <div 
        class="centertitleitem" 
        v-for="(item,index) in centertitle" 
        :key="index" 
        :class="{active : index === currindex}"
        @click="centerclick(index)"
        >{{item}}</div>
      </div>

    </navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/navbar/Navbar'
export default {
  name:"DeatailNavbar",
  components:{
    Navbar
  },
  data(){
    return{
      centertitle: ['商品','参数','评论','推荐'],
      currindex: 0,
    }
  },
  methods:{
    backclick(){
      this.$router.go(-1);
    },
    centerclick(index){
      this.currindex = index;
      this.$emit('navclick',index)
    }
  }
}
</script>

<style scope>
  .centertitle{
    display: flex;
    font-size: 0.8em;
  }

  .centertitleitem{
    flex:1;
  }
  
  .detail-nav-left{
    margin-top: 5px;
  }

  .active{
    color: var(--color-high-text);
  }
</style>
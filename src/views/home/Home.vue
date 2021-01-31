<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">蘑菇街</div>
    </navbar>
    <tab-controller class="tab-controller" @tabclick="hometabclick" :titles="['流行','新款','精选']" @click.native="backtabcon" ref="tabcontroller1" v-show="tabshow"></tab-controller> 
    <scroller class="content" ref="contenttop" :probeType="3" @pullingup="pullingup" :pullUpLoad="true" @scroll="positiony">
    <swiper :banners="banners" @swiperloatop="swiperloatop" ></swiper>
    <recommendview :recommends="recommends"></recommendview>    
    <feature-view></feature-view>
    <tab-controller class="tab-controller" @tabclick="hometabclick" :titles="['流行','新款','精选']"  ref="tabcontroller2"></tab-controller> 
    <goods-list :goods="showgoods" ></goods-list>
    </scroller>

    <back-top @click.native="backclivk" v-show="topshow"></back-top>
    
  </div>
</template>

<script>
import Recommendview from './chidrencomm/Recommendview.vue'
import FeatureView from './chidrencomm/FeatureView.vue'

import Navbar from '../../components/common/navbar/Navbar.vue'
import {Swiper} from '../../components/common/swiper/index'
import Scroller from '@/components/common/scroll/Scroller'
import TabController from '../../components/content/tabController/TabController.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import BackTop from '@/components/content/backTop/BackTop'
import {itemListenerMixin} from '@/common/mixin'
import {getHomeMultidata,getgoodsdata} from "../../ntework/home.js"
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[],
        typegoods:'pop',
        topshow:false,
        tabshow:false,
        tabcontrollertop:0,
        leaveY:0,
        goods:{
          'pop':{page: 0, list: []},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []}
        }
      }
    },
    mixins:[itemListenerMixin],
    components:{
      Recommendview,
      FeatureView,
      Navbar,
      Swiper,
      Scroller,
      TabController,
      GoodsList,
      BackTop
    },
    created(){
      this.getHomeMultidata(),
      this.getgoodsdata('pop')
      this.getgoodsdata('new')
      this.getgoodsdata('sell')
    },
    mounted(){
    },
    computed:{
      showgoods(){
        return this.goods[this.typegoods].list
      }
    },
    activated(){
      this.$refs.contenttop.scrollTo(0,this.leaveY);
      this.$refs.contenttop.refresh()
    },
    deactivated(){
      this.leaveY = this.$refs.contenttop.saveY();
      this.$bus.$off('itemimgload',this.itemimglistener)
    },
    methods:{
      //网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getgoodsdata(type){
        const page = this.goods[type].page+1
        getgoodsdata({type,page}).then(res=>{
          this.goods[type].page+=1
          this.goods[type].list.push(...res.data.list)
          this.$refs.contenttop.finishup()
      })
      },
      //其他事件
      hometabclick(index){
        switch(index){
          case 0:
            this.typegoods = 'pop'
            break;
          case 1:
            this.typegoods = 'new'
            break;
          case 2:
            this.typegoods = 'sell'
            break;
        }
        this.$refs.tabcontroller1.currindex = index
        this.$refs.tabcontroller2.currindex = index
      },
      backclivk(){
        this.$refs.contenttop.scrollTo(0,0,300)
      },
      //上拉
      pullingup(){
        this.getgoodsdata(this.typegoods)
      },
      //显示隐藏回到首页
      positiony(position){
        this.topshow = (-position.y)>1000
        this.tabshow = (-position.y)>this.tabcontrollertop
      },
      //回到选项卡位置
      backtabcon(){
        this.$refs.contenttop.scrollTo(0,-this.tabcontrollertop)
      },
      //tabcontroller offsetTop多少
      swiperloatop(){
        this.tabcontrollertop = this.$refs.tabcontroller2.$el.offsetTop
      }
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;

  }
  
  .tab-controller{
    position: sticky;
    top: 40px;
    z-index: 1;
  }

  .content{
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>

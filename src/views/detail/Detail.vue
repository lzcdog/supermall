<template>
  <div id="detail">
      <!-- 导航条部分 -->
      <detailNavbar class="navbar" ref="detailNavbar" @navclick="navclick"></detailNavbar>
      <!-- 导航条部分 -->

    <scroller class="content" ref="contenttop" @scroll="scroll" :probeType=3>
      <!-- 轮播图部分 -->
      <detailSwiper :swiperdata="swiperdata"  ></detailSwiper>
      <!-- 轮播图部分 -->

      <!-- 基本信息 -->
      <detailBaseInfo :basedata="basedata"></detailBaseInfo>
      <!-- 基本信息 -->

      <!-- 商家信息 -->
      <detailShop :shopdata="shopdata" ></detailShop>
      <!-- 商家信息 -->

      <!-- 展示信息 @imgload="imgload" -->
      <detailshow :showdata="showdata" @imgload="imgload"  ></detailshow>
      <!-- 展示信息 -->

      <!-- 参数信息 -->
      <detailParams :paramsdata="paramsdata"  ref="detailParams"></detailParams>
      <!-- 参数信息 -->
      
      <!-- 用户评价 -->
      <detail-rate :ratedata="ratedata" ref="detailrate"></detail-rate>
      <!-- 用户评价 -->

      <!-- 推荐信息 -->
      <detail-recommed :recommenddata="recommenddata" ref="detailrecommed"></detail-recommed>
      <!-- 推荐信息 -->
    </scroller>
    <!-- :message="message" v-show="isshow" -->
    <toast ref="toast"></toast>
    <back-top @click.native="backclivk" v-show="topshow" ></back-top>
    <detail-bot-nav @barClick="barClick"></detail-bot-nav>
  </div>
</template>

<script>
//组件引入部分
import DetailNavbar from '@/views/detail/datailchildren/DetailNavbar'
import DetailSwiper from '@/views/detail/datailchildren/DetailSwiper'
import DetailBaseInfo from '@/views/detail/datailchildren/DetailBaseInfo'
import DetailShop from '@/views/detail/datailchildren/DetailShop'
import Detailshow from '@/views/detail/datailchildren/Detailshow'
import DetailParams from '@/views/detail/datailchildren/DetailParams'
import DetailRate from '@/views/detail/datailchildren/DetailRate'
import DetailRecommed from '@/views/detail/datailchildren/DetailRecommed'
import DetailBotNav from '@/views/detail/datailchildren/DetailBotNav'
import BackTop from '@/components/content/backTop/BackTop'
import Toast from '@/components/common/toast/Toast'
import Scroller from '@/components/common/scroll/Scroller'

//网络请求引入部分 
import {itemListenerMixin,backtop} from '@/common/mixin'
import {detail,getRecommend,Goods,Shop,Show,Params} from '../../ntework/detail'
export default {
  name:'Detail',
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    Detailshow,
    DetailParams,
    DetailRate,
    DetailRecommed,
    DetailBotNav,
    BackTop,
    Toast,
    Scroller
  },
  data(){
    return{
      swiperdata:null,
      basedata:{
        type:Object,
        default(){
          return {}
        }
      },
      shopdata:{
        type:Object,
        default(){
          return {}
        }
      },
      showdata:{
        type:Object,
        default(){
          return {}
        }
      },
      paramsdata:{
        type:Object,
        default(){
          return {}
        }
      },
      ratedata:{
        type:Object,
        default(){
          return {}
        }
      },
      recommenddata:[],
      showtoptop:0,
      ratetop:0,
      commendtop:0,
      // message:"",
      // isshow:false
    }
  },
  mixins:[itemListenerMixin,backtop],
  created(){
    //发送网络请求获取当前商品数据
    detail(this.$route.params.iid).then(res =>{

      this.swiperdata = res.result.itemInfo.topImages

      this.basedata = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)
      this.shopdata = new Shop(res.result.shopInfo)

      this.showdata = new Show(res.result.detailInfo)

      this.paramsdata = new Params(res.result.itemParams.info,res.result.itemParams.rule)

      if(res.result.rate.cRate !==0 ){
        this.ratedata = res.result.rate.list[0]
      }
      
      
    }).catch(err =>{

      console.log(err);
    })

    getRecommend().then(res=>{
      this.recommenddata = res.data.list
    }).catch(err =>{
      console.log(err);
    })
    
  },
  mounted(){
    // const test = this.debounce(this.imgload,200)
    // test()
  },
  computed:{
    //测试能不能拿到iid
    // params(){
    //   return this.$route.params.iid
    // }
  },
  destroyed(){
      this.$bus.$off('itemimgload',this.itemimglistener)
  },
  methods:{
    imgload(){
      this.refresh()
      // this.$refs.contenttop.refresh()
      this.ratetop = this.$refs.detailrate.$el.offsetTop
      this.commendtop = this.$refs.detailrecommed.$el.offsetTop
      this.shoptop = this.$refs.detailParams.$el.offsetTop
    },
    scroll(position){
      this.topshow = (-position.y)>1000
      if(position.y > -this.shoptop){
        this.$refs.detailNavbar.currindex =0
      }if(position.y <= -this.shoptop){
        this.$refs.detailNavbar.currindex =1
      }if(position.y <= -this.ratetop){
        this.$refs.detailNavbar.currindex =2

      }if(position.y <= -this.commendtop){
        this.$refs.detailNavbar.currindex =3

      }
    },
    navclick(index){
      switch (index) {
        case 0:
          this.$refs.contenttop.scrollTo(0,0,300);
          break;
        case 1:
          this.$refs.contenttop.scrollTo(0,-this.shoptop,300);
          break;
        case 2:
          this.$refs.contenttop.scrollTo(0,-this.ratetop,300);
          break;
        case 3:
          this.$refs.contenttop.scrollTo(0,-this.commendtop,300);
          break;
      }
    },
    barClick(){
      const product = {}
      product.image = this.swiperdata[0]
      product.title = this.basedata.title
      product.desc = this.basedata.desc
      product.price = this.basedata.realPrice,
      product.iid = this.$route.params.iid
      this.$store.dispatch('addcart',product).then(res=>{
        // this.message=res
        // this.isshow = true
        // setTimeout(() => {
        //   this.isshow = false
        //   this.message=""
        // }, 1000);
        this.$refs.toast.show(res,2000)
      })
    }
    // debounce(fun,deplay){
    //   let timer = null
    //   return ()=>{
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       fun()
    //     }, deplay);
    //   }
    // }
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    background-color: #fff;
    height: 100vh;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    /* height: calc(100%-44px); */
  }
</style>
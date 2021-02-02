<template>
  <div class="category">

    <cartNavBar></cartNavBar>

    <scroller
      class="content1"
      style="background-color: #f6f6f6"
      ref="scroller1"
    >

      <categoryLeft
        :listdata="listdata"
        @pushmaitKey="getmaitKey"
        ref="categoryLeft"
      ></categoryLeft>

    </scroller>

    <scroller class="content2" ref="contenttop" :probeType=3 @scroll="scroll">

      <cartegory-right
        class="cartegory-right"
        :kinddata="kinddata"
      ></cartegory-right>

      <tab-controller
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontroller"
      ></tab-controller>

      <goods-list :goods="goodsdata"></goods-list>
    </scroller>
    <back-top @click.native="backclivk"  v-show="topshow"></back-top>
  </div>
</template>

<script>
import BackTop from '@/components/content/backTop/BackTop'
//引入防抖/backtop
import {itemListenerMixin,backtop} from '../../common/mixin'
//引入bs组件
import Scroller from "@/components/common/scroll/Scroller";
//引入组件
import CartNavBar from "@/views/category/categorychildren/CartNavBar";
import CategoryLeft from "@/views/category/categorychildren/CategoryLeft";
import CartegoryRight from "@/views/category/categorychildren/CartegoryRight";
import TabController from "@/components/content/tabController/TabController";
import GoodsList from "@/components/content/goods/GoodsList";
//网络请求
import {
  categorydata,
  getSubcategory,
  getCategoryDetail,
} from "@/ntework/category";
export default {
  name: "Category",
  data() {
    return {
      listdata: [],
      kinddata: [],
      goodsdata:[],
      miniWallkey: 0,
    };
  },
  mixins:[itemListenerMixin,backtop],
  components: {
    CartNavBar,
    CategoryLeft,
    CartegoryRight,
    GoodsList,
    TabController,
    BackTop,
    Scroller,
  },
  methods: {
    //获取对应商品数据
    getmaitKey(maitKey,miniWallkey) {
      this.$refs.tabcontroller.currindex = 0
      this.$refs.contenttop.scrollTo(0,0)
      this.miniWallkey = miniWallkey;
      this.getCategoryDetail(this.miniWallkey, "pop");
      this.getCategoryDetail(this.miniWallkey, "new");
      this.getCategoryDetail(this.miniWallkey, "sell");
      getSubcategory(maitKey).then((res) => {
        this.kinddata = res.data.list;
      });
    },
    //获取goods数据
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.goodsdata = res
      }).catch(err =>{
        console.log(err);
      });
    },
    //获取tabcontroller index值
    tabclick(index) {
      switch (index) {
        case 0:
          this.getCategoryDetail(this.miniWallkey, "pop");
          break;
        case 1:
          this.getCategoryDetail(this.miniWallkey, "new");
          break;
        case 2:
          this.getCategoryDetail(this.miniWallkey, "sell");
          break;
      }
    },
    //1000显示backtop
    scroll(position){
      if(position.y<-1000){
        this.topshow = true
      }else{
        this.topshow = false
      }
    }
  },
  created() {
    //id和分类标题请求
    categorydata().then((res) => {
      this.listdata = res.data.category.list;
      //获取第一页商品数据
      getSubcategory(this.listdata[0].maitKey).then((res) => {
        this.kinddata = res.data.list;
      });
      this.miniWallkey = this.listdata[0].miniWallkey
      this.getCategoryDetail(this.miniWallkey, "pop");
      this.getCategoryDetail(this.miniWallkey, "new");
      this.getCategoryDetail(this.miniWallkey, "sell");
    });
  },
  activated(){
      this.$refs.contenttop.refresh();
  },
  //分类列表加载完成调用refresh
  updated() {
    this.$nextTick(() => {
      this.$refs.scroller1.refresh();
    });
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
  position: relative;
}
.content1 {
  overflow: hidden;
  width: 90px;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.content2 {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 90px;
  right: 0;
  bottom: 49px;
}
</style>

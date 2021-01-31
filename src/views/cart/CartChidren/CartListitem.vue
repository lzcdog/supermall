<template>
  <div class="cartistitem">
    <div class="item-content">
      <div >
        <cheak-box  :class="{cheakbox : listdata.cheak}" @click.native="cheakclick"></cheak-box>
      </div>
      <div>
        <img :src="listdata.image" alt="" />
      </div>
      <div class="item-right">
        <div class="item-title">
          <p class="first">{{ listdata.title }}</p>
          <p class="second">{{ listdata.desc }}</p>
        </div>
        <div class="item-price">
          <span class="item-finprice">{{ finprice }}</span>
          <span >x{{ listdata.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheakBox from '@/components/content/cheakbox/CheakBox'
export default {
  name: "CartListItem",
  components:{
    CheakBox
  },
  computed: {
    finprice() {
      return "￥" + this.listdata.price;
    },
  },
  methods:{
    cheakclick(){
      this.listdata.cheak = !this.listdata.cheak
    }
  },
  props: {
    listdata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.cartistitem {
  height: 120px;
  background-color: #fff;
  border-bottom: 1px solid rgb(149, 149, 149);
}
.cartistitem img {
  width: 80px;
  height: 100px;
  border-radius: 5%;
  margin-right: 10px;
}
.item-content {
  display: flex;
  margin-top: 5px;
  padding: 5px 5px;
  align-items: center;
}
.item-right{
  overflow: hidden;
}
.item-title p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.first{
  font-size: 1.1em;
  color: black;

}
.second{
  color:rgb(129, 129, 129);
  font-size: 0.8em;
  margin-top: 20px;
}
.item-price {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.item-price span:first-child{
  color:red;
}
.cheakbox{
  background-color: red;
  border-radius: 50%;
}

</style>
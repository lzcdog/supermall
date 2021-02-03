import {debounce} from '@/common/debounce'
import CheakBox from '@/components/content/cheakbox/CheakBox'
import {mapGetters} from 'vuex'
export const itemListenerMixin ={
  data(){
    return{
      itemimglistener:null,
      refresh:null
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.contenttop.refresh,50)
    this.itemimglistener = ()=>{
      this.refresh()
    }
    this.$bus.$on('itemimgload',this.itemimglistener)
  }
}

export const  backtop = {
  data(){
    return{
      topshow:false,
    }
  },
  methods:{
    backclivk(){
      this.$refs.contenttop.scrollTo(0,0,300)
    },
  }
}

export const cheackbox = {
  
  components:{
    CheakBox,
  },
  data(){
    return{
      cheakbol:false
    }
  },
  methods:{
    allcheak(){
        this.cartList.map(item =>{
          return item.cheak = !this.cheakbol
        })
    },
  },
  computed:{
    ...mapGetters(['cartList']),
    cheakok(){
            let test =0
        this.cartList.map(item => {
          if(item.cheak == false ){
              test+=1
          }
          if(test ==0 ){
            return this.cheakbol = true
          }else{
            return this.cheakbol = false
          }
        })
    }
  },
}
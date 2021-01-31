import {debounce} from '@/common/debounce'
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

export default {
  addcart(context,payload){
    // let oldProduct = null;
    // for(let item of state.cartList){
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // if(oldProduct){
    //   oldProduct.count +=1
    // }else{
    //   payload.count=1
    //   state.cartList.push(payload)
    // } 
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item =>{
        return item.iid === payload.iid}
      )
  
      if(oldProduct){
        // oldProduct.count+1
        context.commit('addCounter',oldProduct)
        resolve("当前商品数量+1")
      }else{
        context.commit('addTocart',payload)
        resolve("添加商品成功")
      }
    })
  }
}
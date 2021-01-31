export default{
  addCounter(state,payload){
    payload.count+=1
  },
  addTocart(state,payload){
    payload.count = 1
    payload.cheak=true
    state.cartList.push(payload)
  },
}
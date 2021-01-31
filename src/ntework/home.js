import {request} from "./request";

export function getHomeMultidata(){
  return request(({
    url:'/home/multidata'
  }))
}
export function getgoodsdata(data){
  return request({
    url:'/home/data',
    params:data
    
  })
}
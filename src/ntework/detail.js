import {request} from "./request"

export function detail(iid) {
  return request(({
    url:'/detail',
    params:{
      iid
    }
  }))
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export function Goods(itemInfo,columns,shopInfo){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.realPrice = itemInfo.lowNowPrice
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class Show{
  constructor(detailInfo){
    this.desc = detailInfo.desc
    this.key = detailInfo.detailImage[0].key
    this.list = detailInfo.detailImage[0].list
  }
}

export class Params{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}


// export class Goods{
//   constructor(iteminfo,colums,services){
//     this.title = itemInfo.title
//     this.desc = itemInfo.desc
//     this.newPrice = itemInfo.newPrice
//     this.oldPrice = itemInfo.oldPrice
//     this.discount = itemInfo.discountDesc
//     this.colums = colums
//     this.services = services
//     this.realPrice = itemInfo.lowNowPrice
//   }
// }
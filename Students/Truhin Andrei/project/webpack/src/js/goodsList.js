import GoodsItem from "./goodsItem";

export default class GoodsList{
    constructor(image, prices, ids, items) {
       
        this.image = image;
        this.prices = prices;
        this.ids = ids;
        this.items = items;
        this.list = this.fetchData ();
        
    }
   
    fetchData () {
    let arr = [];
    
    for (let i = 0; i < this.items.length; i++) {
        const newItem = new GoodsItem(this.image, this.prices[i], this.ids[i], this.items[i])
        arr.push(newItem.createProduct());
    }
    return arr
};
   

//рендер списка товаров (каталога)
renderProducts () {
    let arr = this.list;
    let str = '';
    for(let item of arr) {
        str += item.createTemplate()
    }
    document.querySelector('.products').innerHTML = str;
};

goodsListPrice(){
   return this.prices.reduce(function (acc, price){return acc + price;
}, 0);
}
}
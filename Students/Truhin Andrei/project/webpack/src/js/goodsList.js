import GoodsItem from "./goodsItem";

import makeGETRequest from './serverData';


export default class GoodsList{
    constructor(image, prices, ids, items) {
       
        this.image = image;
        this.prices = prices;
        this.ids = ids;
        this.items = items;
        this.list = null;
        
    }
   
    fetchData () {
        return new Promise((res, rej) => {
            makeGETRequest ('catalogData.json')
            .then (goods => {
                const items = JSON.parse(goods);
                console.log (goods)
                console.log (JSON.parse (goods))
                let arr = [];

                items.forEach(good => {
                    const newItem = new GoodsItem(this.image, good.price, good.id_product, good.product_name)
                    arr.push(newItem.createProduct());
                });
                this.list = arr;
                res(arr);
                console.log (5,arr)
            })
            .catch (err => {
                console.log (err)
            })
        })
    // let arr = [];
    
    // for (let i = 0; i < this.items.length; i++) {
    //     const newItem = new GoodsItem(this.image, this.prices[i], this.ids[i], this.items[i])
    //     arr.push(newItem.createProduct());
    // }
    // return arr;
};

   

//рендер списка товаров (каталога)
renderProducts () {
    let arr = this.list;
    let str = '';
    console.log (6,arr)
    // for(let item of arr) {
    //     str += item.createTemplate()
    // }
    document.querySelector('.products').innerHTML = str;
};

goodsListPrice(){
   return this.prices.reduce(function (acc, price){return acc + price;
}, 0);
}
}
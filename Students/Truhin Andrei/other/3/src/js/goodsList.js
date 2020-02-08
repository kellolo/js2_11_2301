import GoodsItem from "./goodsItem";

import makeGETRequest from "./serverData";

export default class GoodsList {
  constructor(image, prices, ids, items) {
    this.image = image;
  }

  fetchData() {
    return new Promise((res, rej) => {
      makeGETRequest("catalogData.json")
        .then(goods => {
          const items = JSON.parse(goods);
          let arr = [];

          items.forEach(good => {
            const newItem = new GoodsItem(
              this.image,
              good.price,
              good.id_product,
              good.product_name
            );
            arr.push(newItem.createProduct());
          });
          res(arr);
        })
        .catch(err => {
          rej(err);
          console.log(err);
        });
    });
  }

  //рендер списка товаров (каталога)
  renderProducts(arr) {
    let str = "";
    for (let item of arr) {
      str += item.createTemplate();
    }
    document.querySelector(".products").innerHTML = str;
  }

  goodsListPrice() {
    return this.prices.reduce(function(acc, price) {
      return acc + price;
    }, 0);
  }
}

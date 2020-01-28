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
    console.log(1, this.ids);
    for (let i = 0; i < this.items.length; i++) {
        arr.push(this.createProduct(i));
    }
    return arr
};
    //создание товара
 createProduct (i) {
    return {
        id: this.ids[i],
        name: this.items[i],
        price: this.prices[i],
        img: this.image,
        quantity: 0,
        createTemplate: function () {
            return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
        },

        add: function() {
            this.quantity++
        }
    }
};

//рендер списка товаров (каталога)
renderProducts () {
    let arr = this.list;
    let str = ''
console.log(arr);
    for(let item of arr) {
        str += item.createTemplate()
    }
    document.querySelector('.products').innerHTML = str;
};

}
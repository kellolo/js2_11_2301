window.addEventListener('load', () => {

    // const goods = [
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Notebook',
    //         price: 1000,
    //         id: 1
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Display',
    //         price: 200,
    //         id: 2
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Keyboard',
    //         price: 20,
    //         id: 3
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Mouse',
    //         price: 10,
    //         id: 4
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Phones',
    //         price: 25,
    //         id: 5
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Router',
    //         price: 30,
    //         id: 6
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'USB-camera',
    //         price: 18,
    //         id: 7
    //     },
    //     {
    //         image: 'https://placehold.it/200x150',
    //         cartImage: 'https://placehold.it/100x80',
    //         item: 'Gamepad',
    //         price: 24,
    //         id: 8
    //     },
    // ];


    class GoodsItem {
        // constructor(array) {
        //     this.products = array;
        //     this.container = null;
        //     this._init();
        // }

        constructor(id, img, name, price) {
            this.id = id;
            this.img = img;
            this.name = name;
            this.price = price;
        }

        render() {
            return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}">
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
        }

        // _init() {
        //     this.container = document.querySelector('.goods-list');
        //     this.render();
        //     //Возможно, тут будет метод рендера Корзины
        // }

        // render() {
        //     let str = '';
        //     this.products.forEach(element => {
        //         let item = this.createProduct(element);
        //         str += item.createTemplate();
        //     });
        //     this.container.innerHTML = str;
        //     this.totalSum();
        // }

        // totalSumHtml(total) {
        //     return `<span>${total}<span>`
        // }

        // totalSumRend(total) {
        //     let totalSum = document.querySelector('.totalSum');
        //     totalSum.innerHTML += this.totalSumHtml(total);
        //     // totalSum.innerHTML = total;
        // }

        // totalSum() {
        //     let total = 0;
        //     this.products.forEach(elem => {
        //         total += elem.price;
        //     });
        //     this.totalSumRend(total);
        // }

        // createProduct(prod) {
        //     return {
        //         id: prod.id,
        //         name: prod.item,
        //         price: prod.price,
        //         img: prod.image,
        //         quantity: 0,
        //         createTemplate: function() {
        //             return `<div class="product-item" data-id="${this.id}">
        //                         <img src="${this.img}">
        //                         <div class="desc">
        //                             <h3>${this.name}</h3>
        //                             <p>${this.price} $</p>
        //                             <button class="buy-btn" 
        //                             data-id="${this.id}" 
        //                             data-name="${this.name}" 
        //                             data-image="${this.img}" 
        //                             data-price="${this.price}">Купить</button>
        //                         </div>
        //                     </div>`
        //         },
        //         add: function() {
        //             this.quantity++;
        //         }
        //     }
        // }
    }

    class GoodsList {
        constructor() {
            this.goods = [];
        }

        fetchGood() {
            this.goods = [
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Notebook',
                    price: 1000,
                    id: 1
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Display',
                    price: 200,
                    id: 2
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Keyboard',
                    price: 20,
                    id: 3
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Mouse',
                    price: 10,
                    id: 4
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Phones',
                    price: 25,
                    id: 5
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Router',
                    price: 30,
                    id: 6
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'USB-camera',
                    price: 18,
                    id: 7
                },
                {
                    image: 'https://placehold.it/200x150',
                    cartImage: 'https://placehold.it/100x80',
                    item: 'Gamepad',
                    price: 24,
                    id: 8
                },
            ];
        }

        render() {
            let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.id, good.image, good.item, good.price);
                listHtml += goodItem.render();
            });
            document.querySelector('.goods-list').innerHTML = listHtml;
        }

        // три метода ниже делают одно общее дело - выводят суммарную стоимость всех товаров.
        // возможно, их стоило объединить в один, пока хз...


        totalSumHtml(total) {
            return `<span>${total} $<span>`
        }

        totalSumRend(total) {
            let totalSum = document.querySelector('.totalSum');
            totalSum.innerHTML += this.totalSumHtml(total);
        }

        totalSum() {
            let total = 0;
            this.goods.forEach(elem => {
                total += elem.price;
            });
            this.totalSumRend(total);
        }
    }

    const list = new GoodsList();
    list.fetchGood();
    list.render();
    list.totalSum();

    class Basket {
        constructor(img, name, quantity, price, totalSum /* НУ ЛИБО ПРИЛЕТАЕТ ОБЪЕКТ СО ВСЕМИ ПЕРЕЧИСЛЕННЫМИ СВОЙСТВАМИ */) {

        }

        /**
         * Метод "Показать/скрыть Корзину"
        */
        showHide() {

        }

        /**
         * Метод удаления товара из Корзины
         */
        delGood() {

        }

        /**
         * Метод добавляет товар в Корзину
         */
        addToBasket() {

        }

        /**
         * Метод перерендера Корзины
         */
        renderBasket() {

        }
    }

    // let catalog = new GoodsItem(goods);
});
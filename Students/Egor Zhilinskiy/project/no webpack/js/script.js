
const goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ]

        class Products {
            constructor (array) {
                this.products = array
                this.container = null
                this._init ()
            }

            _init () {
                this.container = document.querySelector('.goods-list')
                //render
                this.render ()                
            }
            render () {
                let str = ''
                this.products.forEach(element => {
                  str += this.createProduct (element)  
                })
                //str = '<div /><div /><div /><div /><div /><div />'
                this.container.innerHTML = str //произойдет рендер
            }
            createProduct (prod) {
                return `
                <div class="goods-item">
                <img src ="img/placeholder.png" class = "goods-img">
                    <h3>${prod.title}</h3>
                    <p>${prod.price}</p>
                </div>
                `
            }
            totalSum() {
                let sum = this.products.reduce((accum,item) => {
                    if (item.price) accum += item.price;
                    return accum;    
                    }, 0);
                document.querySelector('.header-inner').innerHTML = `Сумма всех товаров:
                 ${sum}`;
            }
        }
        
        let catalog = new Products (goods)
        catalog.totalSum()

        class Cart extends Products {
            constructor(props) {
                super(props);                
            }
            clean() {}
            incGood() {}
            decGood() {}
        }

        class CartItem extends Products {
            constructor(props) {
                super(props);                
            }
            delete() {}
        }
let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        cartItems: [],
        img:'https://placehold.it/200x150',
        cartImg:'https://placehold.it/100x80',
        API:'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        Visible: false,
        
      
    }, 
    methods: {
       getData(url){
            return fetch(url)
                        .then(d => d.json())
       },
       init(){      
            this.getData(API + '/catalogData.json')
            .then(parsedData => { this.items = parsedData })
            this.getData(API + '/getBasket.json')
            .then(parsedData => { this.cartitems = parsedData.contents })    
                    },
      btnCartClick(el){
       let productId = +el.id_product
                    let serverResponse200
                    this.getData(API + '/deleteFromBasket.json')
                        .then (response => { serverResponse200 = response })
                        .finally (() => {
                            if (serverResponse200) {
                                let find = this.cartItems.find (element => element.id_product === productId)
                                if (find && find.quantity > 1) {
                                    find.quantity--
                                } else if (find){
                                    this.cartItems.splice(this.cartItems.indexOf(find), 1);
                                }
        
                            }
                        })
                },
           add_btnClick(el) {
                    let productId = +el.id_product
                    let serverResponse200
                    this.getData(API + '/addToBasket.json')
                        .then (response => { serverResponse200 = response })
                        .finally (() => {
                            if (serverResponse200) {
                                let find = this.cartItems.find (element => element.id_product === productId) 
                                if (!find) {
                                    this.cartItems.push ({
                                        product_name: el.product_name,
                                        id_product: productId,
                                        img: this.cartImg,
                                        price: +el.price,
                                        quantity: 1
                                    })
                                }  else {
                                    find.quantity++
                                }
                             
                            }
                        })
                },
      }
     computed: {},
   mounted () {
        this.init()
        //запрос на сервер
        
    },
  
})
     //вычисляемые свойства (методы, которые ВОЗВРАЩАЮТ результат)
    
    //ХУКИ ЖИЗНЕННОГО ЦИКЛА
  

let app = new Vue({
    el: '#app',
    data: {
        items: [],
        url: 'https://raw.githubusercontent.com/Vetl-off0098/online-store-api/master/responses',
        searchLine: '',
        isVisibleCart: false
    },

    mounted() {
        this.gerPosts()
    },

    computed: {
        
    },

    methods: {
        gerPosts() {
            //запрос на сервер
            fetch(this.url + '/catalogData.json')
                .then(dJSON => dJSON.json())
                .then(d => {this.items = d})
                // .finally(() => {console.log(this.items)})
        },

        totalSum() {
            let total = 0
            this.items.forEach(elem => {
                total += elem.price
            })
            return total
        },

        toggleClick() {
            this.isVisibleCart ? this.isVisibleCart = !this.isVisibleCart : this.isVisibleCart = true
        },

        filterGoods() {
            this.items = this.items.filter(name => name.product_name.toLowerCase() === this.searchLine.toLowerCase())
            // console.log(this.items)
        }
    },
})
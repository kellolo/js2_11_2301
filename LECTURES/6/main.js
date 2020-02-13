let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        postsQuantity: 10
        //clicked: false
    }, //поле, содержащее данные, создающиеся и/или использующиеся внутри данного компонента,
    methods: {
        toggleClick (el) {
            el.hidden ? el.hidden = !el.hidden : this.$set(el, 'hidden', true)
        },
        getPosts () {
            fetch (`https://jsonplaceholder.typicode.com/comments`)
                .then (dJSON => dJSON.json())
                .then (d => { this.items = d })
        }
    }, //методы (методы, которые ДЕЛАЮТ)
    computed: {}, //вычисляемые свойства (методы, которые ВОЗВРАЩАЮТ результат)
    
    //ХУКИ ЖИЗНЕННОГО ЦИКЛА
    mounted () {
        this.getPosts ()
        //запрос на сервер
        
    },
    // created () {
    //     console.log ('I was created master')
    // },
    // beforeCreate () {
    //     console.log ('I want to create myself master')
    // }
})
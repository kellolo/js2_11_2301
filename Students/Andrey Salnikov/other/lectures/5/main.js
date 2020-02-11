let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        postsQuantity: 10
        //clicked: false
    },
    methods: {
        toggleClick (el) {
            el.hidden ? el.hidden = !el.hidden : this.$set(el, 'hidden', true)
        },
        getPosts () {
            fetch (`https://jsonplaceholder.typicode.com/comments?_limit=${this.postsQuantity}` )
                .then (dJSON => dJSON.json())
                .then (d => { this.items = d })
        }
    },
    computed: {},

    mounted () {
        this.getPosts ()
    },
    // created () {
    //     console.log ('I was created master')
    // },
    // beforeCreate () {
    //     console.log ('I want to create myself master')
    // }
})
let temp = {
    name: 'Вася',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Optio asperiores iusto blanditiis 
    labore illum cum nemo architecto saepe natus autem minus eos, 
    beatae cumque itaque a. Amet nesciunt a laborum.`,
    email: 'lol@lol.rf',
}

Vue.component ('post', {
    template: `
    <div class="post">
        <div class="user">
            <strong>{{ post.name }}</strong>
        </div>
        <button @click="hidden = !hidden" v-if="!ex">{{ hidden ? '+' : '-' }}</button>
        <div v-if="!hidden" class="post-body">
            {{ post.body }}
        </div>
        <div class="post-footer">
            <a href="#">{{ post.email }}</a>
        </div>
    </div>
    `,
    //props: ['post'],
    props: {
        post: {
            type: Object,
            default: () => temp
        },
        ex: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hidden: false,
            // example: false,
            // postD: null
        }
    },
    methods: {

    },
    mounted() {
        //this.post = this.post
        //if (!this.post) this.example = true 
        //if (!this.post) this.postD = temp 
    }
})
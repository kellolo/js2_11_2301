<template>
 <div class="container">
    <header class="main-header">
        <div class="logo">
            <a href="index.html" class="logo__link">
                <p class="logo__text">e-shop</p>
            </a>
        </div>
        <filt />
        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">
                    <button class="main-nav__btn" @click="cartVisible = !cartVisible">Cart <i class="fas fa-shopping-cart"></i></button>
                </li>
            </ul>
        </nav>
        <cart ref="cart" v-show="cartVisible"/>
    </header>
    <main class="main">
        <catalog ref="catalog"/>
    </main>
    <footer class="footer">
        <ul class="footer__list">
            <li class="footer__item">Copyright © 2019<span class="highlight">e-shop</span></li>
            <li class="footer__item"><a href="#" class="footer__link">Privacy Policy</a></li>
            <li class="footer__item"><a href="#" class="footer__link">FAQ</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Support</a></li>
        </ul>
        <ul class="footer__list">
            <li class="footer__item">Designed by <span class="highlight">Dmitriy Lomov</span></li>
            <li class="footer__item">Only for <a href="https://geekbrains.ru/" class="footer__link">GeekBrains</a>
            </li>
        </ul>
    </footer>
</div>
</template>

<script>

import catalog from './Catalog.vue'
import cart from './Cart.vue'
import filt from './Filter-item.vue'

export default {
    data (){
        return {
            cartVisible: false
        }
    },
    methods: {
        getData (url) {
            return fetch(url)
                    .then(d => d.json())
        },
        postData (url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(d => d.json())
        },
        putData (url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(d => d.json())
        },
        deleteData (url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(d => d.json())
        }
    },
    components: { 
        catalog,
        cart,
        filt
    }
}
</script>
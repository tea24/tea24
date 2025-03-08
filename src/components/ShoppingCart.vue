<template>
    <button class="shopping-cart-widget" v-if="page == Pages.NONE" @click="page = Pages.CART">Корзина ^</button>
    <div class="shopping-cart" v-if="page == Pages.CART">
        <div class="shopping-cart-header">Корзина ({{ items.reduce((acc, x) => acc + x.price, 0) }}) руб <button @click="page = Pages.NONE">_</button></div>
        <div class="shopping-cart-content" v-if="items.length > 0">
            <div class="shopping-cart-item" v-for="item in items" :key="item">
                <img :src="require('../items/'+item.image)">
                <h5 class="item-heading">{{ item.name }}</h5>
                <button @click="store.cart.splice(store.cart.indexOf(item), 1)">Удалить</button>
            </div>
        </div>
        <div class="shopping-cart-content" v-else>
            <h5>Нет товаров в корзине</h5>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { store } from '../store.js'

const Pages = {
    NONE: 0,
    CART: 1,
    ORDER: 2
}

export default defineComponent({
    data() {
        return {
            page: Pages.NONE,
            Pages
        }
    },
    setup() {
        return {
            store,
            items: store.cart
        }
    },
    methods: {
        
    }
})
</script>

<style scoped>
.shopping-cart-widget {
    background-color: #fff;
    width: 100px;
    position: fixed;
    bottom: 0;
    right: 0;
}
.shopping-cart {
    float: left;
    position: fixed;
    overflow-y: scroll;
    bottom: 0;
    right: 0;
    z-index: 5;
    width: 300px;
    height: calc(100% - 11rem);
    background-color: #fff;
    padding: 1rem;
    margin: 1rem;
}
.shopping-cart-item {
    float: left;
}
.shopping-cart img {
    width: 100px;
    height: 100px;
}

/* Smaller than 550 */
@media (max-width: 550px) {
    .shopping-cart {
        width: calc(100% - 4rem);
    }
}
</style>
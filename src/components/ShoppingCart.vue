<template>
    <button class="shopping-cart-widget" v-if="items.length == 0 || !displayCart" @click="displayCart = true">Корзина</button>
    <div class="shopping-cart" v-if="items.length > 0 && displayCart">
        <div class="shopping-cart-header">Корзина <button @click="displayCart = false">_</button></div>
        <div class="shopping-cart-content">
            <div class="shopping-cart-item" v-for="item in items" :key="item">
                <img :src="require('../items/'+item.image)">
                <h5 class="item-heading">{{ item.name }}</h5>
                <button @click="store.cart.splice(store.cart.indexOf(item), 1)">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { store } from '../store.js'

export default defineComponent({
    data() {
        return {
            displayCart: false
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
</style>
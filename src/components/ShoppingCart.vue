<template>
    <div class="shopping-cart-widget" :class="{'active': items.length == 0}">Корзина</div>
    <div class="shopping-cart" :class="{'active': items.length > 0}">
        <div class="shopping-cart-header">Корзина</div>
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
.active {
    display: block !important;
}
.shopping-cart-widget {
    background-color: #fff;
    width: 100px;
    display: none;
    position: fixed;
    bottom: 0;
    right: 0;
}
.shopping-cart {
    float: left;
    display: none;
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
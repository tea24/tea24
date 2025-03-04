<template>
    <div class="shopping-cart">
        <div class="shopping-cart-header">Корзина</div>
        <div class="shopping-cart-content">
            <div class="shopping-cart-item" v-for="item in items" :key="item">
                <h5 class="item-heading">{{ item.name }}</h5>
                <img :src="require('../items/'+item.image)">
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { store } from '../store.js'

export default defineComponent({
    setup() {
        return {
            items: store.cart
        }
    }
})
</script>

<style scoped>
.shopping-cart {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    height: calc(100% - 4rem);
    background-color: #fff;
    padding: 1rem;
    margin: 1rem;
}
</style>
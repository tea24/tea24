<template>
    <button class="shopping-cart-widget" v-if="page == Pages.NONE" @click="page = Pages.CART">Корзина ^</button>
    <div class="shopping-cart" v-if="page == Pages.CART">
        <div class="shopping-cart-header">Корзина ({{ items.reduce((acc, x) => acc + x.price, 0) }}) руб <button @click="page = Pages.NONE">_</button></div>
        <div class="shopping-cart-content" v-if="items.length > 0">
            <button class="button-primary" @click="page = Pages.ORDER">Оформить заказ</button>
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
    <div class="shopping-cart" v-if="page == Pages.ORDER">
        <div class="shopping-cart-header">Корзина ({{ items.reduce((acc, x) => acc + x.price, 0) }}) руб <button @click="page = Pages.NONE">_</button></div>
        <div class="shopping-cart-content" v-if="items.length > 0">
            <button class="button-primary" @click="page = Pages.CART">Назад в корзину</button>
            <form>
                <div class="buttons">
                    <input type="radio" name="contact" value="whatsapp" id="whatsapp" checked v-model="form.contact"><label for="whatsapp">Whatsapp</label>
                    <input type="radio" name="contact" value="telegram" id="telegram" v-model="form.contact"><label for="telegram">Telegram</label>
                    <input type="radio" name="contact" value="phone" id="phone" v-model="form.contact"><label for="phone">Телефон</label>
                </div>
                
                <input type="text" placeholder="@nickname или +79996662010" v-model="form.phone">
                <button @click="sendOrder">Send</button>
            </form>
            <p>{{ form.phone }}</p>
        </div>
        <div class="shopping-cart-content" v-else>
            <h5>Нет товаров в корзине</h5>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { store } from '../store.js'
import axios from 'axios'

const Pages = {
    NONE: 0,
    CART: 1,
    ORDER: 2
}

export default defineComponent({
    data() {
        return {
            page: Pages.NONE,
            Pages,
            form: {
                phone: null,
                contact: "whatsapp",
            },
            token: "7043531371:AAESezj7TB8HwxvkFDVNFlJqGRYvctgQRcg",
            chat_ids: [1634734, 7423200602],
        }
    },
    setup() {
        return {
            store,
            items: store.cart
        }
    },
    methods: {
        async sendOrder(event) {
            event.preventDefault()
            if (this.form.phone !== "") {
                this.chat_ids.forEach(async id => {
                    const send_message_url = `https://api.telegram.org/bot${this.token}/sendMessage`
                    const data = {
                        'text': `${this.form.contact} ${this.form.phone} ${JSON.stringify(store.cart)}`,
                        'chat_id': id,
                        'parse_mode': 'markdown',
                    }
                    const response = await axios.post(send_message_url, data)
                    console.log(response) 
                });
            } else {
                console.log("NOT PHONE", this.form.phone)
            }
        }
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
.buttons {
    display: ruby;
}
.buttons label {
    margin-right: 1rem;
}

/* Smaller than 550 */
@media (max-width: 550px) {
    .shopping-cart {
        width: calc(100% - 4rem);
    }
}
</style>
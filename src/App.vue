<template>
  <HeaderItem/>
  <IndexPage/>
  <ShoppingCart/>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
import IndexPage from './components/IndexPage.vue'
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'App',
  components: {
    HeaderItem,
    IndexPage,
    ShoppingCart
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  max-width: 100%;
}
</style>

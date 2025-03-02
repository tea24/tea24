<template>
  <div class="column menu">
    <div class="row">
      <div class="five columns menu-text">
        <a href="#top">Вверх</a> | 
        <a href="#shues">Шу пуэр</a> | 
        <a href="#shens">Шен пуэр</a> | 
        <a href="#reds">Красный</a>
      </div>
      <div class="two columns logo">
        <img alt="logo" src="../assets/logo.png">
      </div>
      <div class="five columns menu-text">
        <a href="#gaba">Габа</a> | 
        <a href="#various">Травы</a> | 
        <a href="#ulun">Улуны</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
}
a:hover, a:active {
  color: #666;
}
.menu {
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #666;
  opacity: 0.8;
  height: 22%;
  max-height: 70px;
}
.menu-text {
  padding-top: 2.3333333333%;
}
.logo {
  padding-top: 0.3333333333%;
  margin-bottom: -7.5rem;
}
.logo img {
  max-height: 132px;
}

/* Smaller than 550 */
@media (max-width: 550px) {
  .menu {
    height: 15%;
  }
  .logo {
    max-width: 40px;
    margin-top: -1.8rem;
    margin-bottom: -6rem;
  }
  .logo img {
    float: left;
    max-width: 40px;
    max-height: 40px;
  }
}
</style>

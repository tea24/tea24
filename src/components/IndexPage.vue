<template>
  <div class="section hero" id="top">
      <div class="container">
        <div class="row">
          <div class="one-half column">
              <h4 class="hero-heading">Попробуйте уникальный набор из 10 чаёв «знакомство» для начинающих</h4>
              <a class="button button-primary" href="http://getskeleton.com">Купить попробовать</a>
          </div>
          <div class="one-half column presents">
              <img class="present" src="../items/da_hun_pao.jpg">
              <img class="present" src="../items/da_hun_pao.jpg">
          </div>
        </div>
      </div>
  </div>

<div class="section" id="shues">
  <div class="container">
    <h1 class="section-heading">Шу пуэр</h1>
    <p class="section-description">Шу пуэр — это ферментированные чаи</p>
    <div class="row">
      <div v-for="item in $options.items.shues" :key="item" class="one-third column item">
        <img :src="require('../items/'+item.image)">
        <h5 class="item-heading">{{ item.name }}</h5>
        <p class="item-description">{{ item.description }}</p>
        <h5 class="item-heading">{{ item.price }} руб/шт</h5>
        <button class="button button-primary">Добавить к заказу</button>
      </div>
    </div>
  </div>
</div>

  <div class="section" id="shens">
    <div class="container">
      <h1 class="section-heading">Шен пуэр</h1>
      <p class="section-description">Шен пуэр — это ферментированные зелёные чаи</p>
      <div class="row">
        <div v-for="item in $options.items.shens" :key="item" class="one-third column item">
          <img :src="require('../items/'+item.image)">
          <h5 class="item-heading">{{ item.name }}</h5>
          <p class="item-description">{{ item.description }}</p>
          <h5 class="item-heading">{{ item.price }} руб/шт</h5>
          <button class="button button-primary">Добавить к заказу</button>
        </div>
      </div>
  </div>
</div>

<div class="section" id="reds">
  <div class="container">
    <h1 class="section-heading">Красные чаи</h1>
    <p class="section-description">Красные чаи — это, обыкновенно, обжаренные</p>
    <div class="row">
      <div v-for="item in $options.items.reds" :key="item" class="one-third column item">
        <img :src="require('../items/'+item.image)">
        <h5 class="item-heading">{{ item.name }}</h5>
        <p class="item-description">{{ item.description }}</p>
        <h5 class="item-heading">{{ item.price }} руб/шт</h5>
        <button class="button button-primary">Добавить к заказу</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ITEMS from '../items/data.json';
export default {
    name: 'IndexPage',
    items: ITEMS
}
</script>

<style scoped>
/* Shared
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button {
  border-radius: 100px;
}

/* Sections
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.section {
  padding: 8rem 0 7rem;
  text-align: center;
  color: #fff;
}
.section-heading,
.section-description {
  margin-bottom: 1.2rem;
}

/* Hero
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.hero {
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.presents {
  position: relative;
}
.present {
  position: relative;
  max-width: 80%;
  margin: 3rem auto -12rem;
}
.present + .present {
  display: none;
}
#shues {
  background-image: url('../assets/shues-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
#shens {
  background-image: url('../assets/shens-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
#reds {
  background-image: url('../assets/reds-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.item:nth-of-type(3n+1) {
  margin-left: 0;
}
/* Help
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.get-help {
  border-bottom: 1px solid #ddd;
}


/* Bigger than 550 */
@media (min-width: 550px) {
  .section {
    padding: 12rem 0 11rem;
  }
  .hero {
    padding-bottom: 12rem;
    text-align: left;
    height: 165px;
  }
  .present {
    position: absolute;
    top: -7rem;
    right: 3rem;
    max-height: 362px;
    z-index: 3;
  }
  .present + .present {
    top: -6rem;
    display: block;
    max-width: 73.8%;
    right: 0;
    z-index: 2;
    max-height: 338px;
  }
  .hero-heading {
    font-size: 2.4rem;
  }
}

/* Bigger than 750 */
@media (min-width: 750px) {
  .hero {
    height: 190px;
  }
  .hero-heading {
    font-size: 2.6rem;
  }
  .section {
    padding: 14rem 0 15rem;
  }
  .hero {
    padding: 16rem 0 14rem;
  }
  .section-description {
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .present {
    top: -14rem;
    right: 5rem;
    max-height: 510px;
  }
  .present + .present {
    top: -12rem;
    max-height: 472px;
  }
  .categories {
    padding: 15rem 0 8rem;
  }
}

/* Bigger than 1000 */
@media (min-width: 1000px) {
  .section {
    padding: 10rem 0 19rem;
  }
  .hero {
    padding: 22rem 0;
  }
  .hero-heading {
    font-size: 3.0rem;
  }
  .present {
    top: -16rem;
    max-height: 615px;
  }
  .present + .present {
    top: -14rem;
    max-height: 570px;
  }
}
</style>
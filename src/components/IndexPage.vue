<template>
  <div class="section hero" id="top">
      <div class="container">
        <div class="row">
          <div class="one-half column">
              <h4 class="hero-heading">Попробуйте уникальный набор из 10 чаёв «знакомство» для начинающих</h4>
              <a class="button button-primary" href="http://getskeleton.com">Купить попробовать</a>
          </div>
          <div class="one-half column phones">
              <img class="phone" src="../assets/logo.png">
              <img class="phone" src="../assets/logo.png">
          </div>
        </div>
      </div>
  </div>

<div class="section" id="shues">
  <div class="container">
    <h1 class="section-heading">Шу пуэр</h1>
    <p class="section-description">Шу пуэр — это ферментированные чаи</p>
    <div class="row">
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао «звёздный»</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Дян хун</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
      </div>
      <div class="row">
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
    </div>
  </div>
</div>

    <div class="section" id="shens">
      <div class="container">
        <h1 class="section-heading">Шен пуэр</h1>
        <p class="section-description">Красные чаи — это, обыкновенно, обжаренные</p>
        <div class="row">
            <div class="one-third column item">
                <img src="../assets/placeholder.png">
                <h5 class="item-heading">Да хун пао</h5>
                <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
                </p>
                <button class="button button-primary">Добавить к заказу</button>
            </div>
            <div class="one-third column item">
                <img src="../assets/placeholder.png">
                <h5 class="item-heading">Да хун пао «звёздный»</h5>
                <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
                </p>
                <button class="button button-primary">Добавить к заказу</button>
            </div>
            <div class="one-third column item">
                <img src="../assets/placeholder.png">
                <h5 class="item-heading">Дян хун</h5>
                <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
                </p>
                <button class="button button-primary">Добавить к заказу</button>
            </div>
          </div>
          <div class="row">
            <div class="one-third column item">
                <img src="../assets/placeholder.png">
                <h5 class="item-heading">Да хун пао</h5>
                <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
                </p>
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
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао «звёздный»</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Дян хун</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
      </div>
      <div class="row">
        <div class="one-third column item">
            <img src="../assets/placeholder.png">
            <h5 class="item-heading">Да хун пао</h5>
            <p class="item-description">Percentage of users more likely to purchase on mobile friendly site.
            </p>
            <button class="button button-primary">Добавить к заказу</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'IndexPage',
    props: {
        msg: String
    }
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
.phones {
  position: relative;
}
.phone {
  position: relative;
  max-width: 80%;
  margin: 3rem auto -12rem;
}
.phone + .phone {
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
  .phone {
    position: absolute;
    top: -7rem;
    right: 3rem;
    max-height: 362px;
    z-index: 3;
  }
  .phone + .phone {
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
  .phone {
    top: -14rem;
    right: 5rem;
    max-height: 510px;
  }
  .phone + .phone {
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
  .phone {
    top: -16rem;
    max-height: 615px;
  }
  .phone + .phone {
    top: -14rem;
    max-height: 570px;
  }
}
</style>
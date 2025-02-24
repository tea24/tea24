<template>
    <div class="section hero">
        <div class="container">
            <div class="row">
                <div class="one-half column">
                    <h4 class="hero-heading">Stop coding non-responsive sites. Let users view sites from anywhere.</h4>
                    <a class="button button-primary" href="http://getskeleton.com">Try Skeleton</a>
                </div>
                <div class="one-half column phones">
                    <img class="phone" src="../assets/logo.png">
                    <img class="phone" src="../assets/logo.png">
                </div>
            </div>
        </div>
    </div>

    <div class="section values">
        <div class="container">
            <div class="row">
                <div class="one-third column value">
                    <h2 class="value-multiplier">67%</h2>
                    <h5 class="value-heading">Purchase Increase</h5>
                    <p class="value-description">Percentage of users more likely to purchase on mobile friendly site.
                    </p>
                </div>
                <div class="one-third column value">
                    <h2 class="value-multiplier">90%</h2>
                    <h5 class="value-heading">Multi-device Users</h5>
                    <p class="value-description">Most of the world accesses the internet on multiple devices.</p>
                </div>
                <div class="one-third column value">
                    <h2 class="value-multiplier">66%</h2>
                    <h5 class="value-heading">Sad Users</h5>
                    <p class="value-description">Percentage of users that are frustrated with page load times.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="section get-help">
        <div class="container">
            <h3 class="section-heading">Need help getting started?</h3>
            <p class="section-description">Skeleton is an amazingly easy place to start with responsive development. If
                you want to learn more, just visit the documentation!</p>
            <a class="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
        </div>
    </div>

    <div class="section categories">
        <div class="container">
            <h3 class="section-heading">Responsive Images</h3>
            <p class="section-description">Skeleton images sit easily in grid with .u-max-full-width class. I suggest
                exploring solution to serving different images based on device size.</p>
            <div class="row">
                <div class="one-half column category">
                    <img class="u-max-full-width" src="../assets/placeholder.png">
                </div>
                <div class="one-half column category">
                    <img class="u-max-full-width" src="../assets/placeholder.png">
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

<style>
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
}
.section-heading,
.section-description {
  margin-bottom: 1.2rem;
}

/* Hero
–––––––––––––––––––––––––––––––––––––––––––––––––– */
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

/* Values
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.values {
  background-image: url('../assets/values-bg.jpg');
  background-size: cover;
  color: #fff;
  padding-bottom: 5rem;
}
.value-multiplier {
  margin-bottom: .5rem;
  color: #11DFC7;
}
.value-heading {
  margin-bottom: .3rem;
}
.value-description {
  opacity: .8;
  font-weight: 300;
}

/* Help
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.get-help {
  border-bottom: 1px solid #ddd;
}

/* Categories
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.categories {
  background-image: url('../assets/values-bg.jpg');
  background-size: cover;
  color: #fff;
}
.categories .section-description { 
  margin-bottom: 4rem;
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
    padding: 20rem 0 19rem;
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
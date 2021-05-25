<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";
import TheFooter from "./components/Layout/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: url(img/bg.jpg) no-repeat center center fixed;
  background-size: cover;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.2rem;
  }
  color: white;
}
</style>

<template>
  <button @click="click" v-if="!link" class="button" :type="type">
    <slot></slot>
  </button>
  <router-link v-if="link" class="link" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    click: {
      type: Function,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button,
.link {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background: none;
  border: 0.1rem solid white;
  border-radius: 0.2rem;
  color: white;
  transition: all 0.5s;
  &:hover,
  &:active {
    background-color: rgba(255, 255, 255, 0.904);
    color: black;
    outline: none; //Sprobowac znalezc inne rozwiazanie - uzytkownicy uzywajacy klawiatury, nawigujac tabem nie beda mieli podswietlonego tego przycisku jako aktywnego -> Problem z chromem?
  }
}
</style>

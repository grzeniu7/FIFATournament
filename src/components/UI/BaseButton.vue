<template>
  <button v-if="!link" class="button" :type="type">
    <slot></slot>
  </button>
  <router-link v-if="link" class="link"></router-link>
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
  },
};
</script>

<style lang="scss" scoped>
.button,
.link {
  margin-top: 1rem;
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

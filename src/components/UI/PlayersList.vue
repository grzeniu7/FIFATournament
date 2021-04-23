<template>
  <section class="players">
    <div class="players__table">
      <h3 class="players__description">Gracz</h3>
      <h3 class="players__description">Drużyna</h3>
    </div>
    <div
      class="players__container"
      :key="competitor.id"
      v-for="competitor in competitors"
    >
      <p class="players__item">{{ competitor.name }}</p>
      <p class="players__item">{{ competitor.team }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["competitors"],
};
</script>

<style lang="scss" scoped>
.players {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
  &__table {
    display: flex;
    width: 95%;
    margin: 1rem auto 0;
  }
  &__container {
    display: flex;
    width: 95%;
    margin: 0 auto;
    // justify-content: center;
    // align-items: center;
  }
  &__description {
    flex: 1;
    padding: 1rem;
    // border: 0.1rem solid white;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
  &__item {
    // max-width: 100px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    // text-align: center;
    padding: 1rem;
    border: 0.1rem solid white;
    border-top: none;
  }
}
</style>

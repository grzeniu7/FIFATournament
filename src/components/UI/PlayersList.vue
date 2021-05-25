<template>
  <section class="players">
    <div class="players__table">
      <h3 class="players__description">Player</h3>
      <h3 class="players__description">Team</h3>
    </div>
    <ul>
      <li
        class="players__list"
        :key="competitor.id"
        v-for="(competitor, index) in competitors"
        @click="deletePlayer(index)"
      >
        <div class="players__delete">
          <p>Delete player</p>
        </div>
        <p class="players__item">{{ competitor.name }}</p>
        <p class="players__item">{{ competitor.team }}</p>
      </li>
    </ul>
    <div class="players__buttons">
      <div class="players__button">
        <base-button link to="/game">Start the game!</base-button>
      </div>
      <div class="players__button">
        <base-button type="button" :click="resetList"
          >Reset players list</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["competitors", "reset-list"],
  emits: ["delete-player"],
  methods: {
    deletePlayer(index) {
      this.$emit("delete-player", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.players {
  background-color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  &__table {
    display: flex;
    width: 95%;
    margin: 1rem auto 0;
  }
  &__list {
    display: flex;
    position: relative;
    width: 95%;
    margin: 0 auto;
    cursor: pointer;
    overflow: hidden;
  }
  &__list:hover &__delete {
    opacity: 1;
    z-index: 1;
    transform: translateY(4.92rem);
  }
  &__description {
    flex: 1;
    padding: 1rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
  &__item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    border: 0.1rem solid white;
    border-top: none;
  }
  &__delete {
    position: absolute;
    top: -5rem;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 0.1rem solid white;
    border-top: none;
    border-bottom: none;
    background-color: black;
    transition: all 0.5s ease-in;
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    align-items: center;
  }
  &__button {
    display: flex;
    text-align: center;
  }
}
</style>

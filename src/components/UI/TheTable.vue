<template>
  <section class="classification" v-if="table.length">
    <h2 class="classification__title">Live table</h2>
    <div class="classification__container">
      <div class="classification__description">
        <p class="classification__item classification__item-grey">Position</p>
        <p class="classification__item classification__item-grey">Team</p>
        <p class="classification__item classification__item-grey">
          Games Played
        </p>
        <p class="classification__item classification__item-grey">Points</p>
        <p class="classification__item classification__item-grey">
          Goals scored
        </p>
        <p class="classification__item classification__item-grey">Goals lost</p>
        <p class="classification__item classification__item-grey">
          Goals Balance
        </p>
      </div>
      <div class="classification__description-shorthand">
        <p class="classification__item classification__item-grey">P</p>
        <p class="classification__item classification__item-grey">T</p>
        <p class="classification__item classification__item-grey">GP</p>
        <p class="classification__item classification__item-grey">Pts</p>
        <p class="classification__item classification__item-grey">GS</p>
        <p class="classification__item classification__item-grey">GL</p>
        <p class="classification__item classification__item-grey">B</p>
      </div>
      <ul class="classification__list">
        <li
          :key="team.team"
          v-for="(team, index) in table"
          class="classification__team"
        >
          <p class="classification__item">{{ index + 1 }}</p>
          <p class="classification__item">{{ team.team }}</p>
          <p class="classification__item">{{ team.gamesPlayed }}</p>
          <p class="classification__item">{{ team.points }}</p>
          <p class="classification__item">{{ team.scoredGoals }}</p>
          <p class="classification__item">{{ team.lostGoals }}</p>
          <p class="classification__item">{{ team.goalsBalance }}</p>
        </li>
      </ul>
    </div>
    <div class="classification__keys">
      <p class="classification__key">P - Position</p>
      <p class="classification__key">T - team</p>
      <p class="classification__key">GP - Games Played</p>
      <p class="classification__key">Pts - Points</p>
      <p class="classification__key">GS - Goals Scored</p>
      <p class="classification__key">GL - Goals Lost</p>
      <p class="classification__key">B - Balance</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    table() {
      const table = this.$store.getters.tournamentTable;
      const sortedTable = table.sort((a, b) => {
        if (a.points === a.points) {
          return b.goalsBalance - a.goalsBalance;
        }
        return b.points - a.points;
      });
      return sortedTable;
    },
  },
};
</script>

<style lang="scss" scoped>
.classification {
  text-align: center;
  font-size: 0.3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  &__title {
    margin-bottom: 1rem;
  }
  &__container {
    display: flex;
    justify-content: center;
    @media (min-width: 500px) {
      border-right: none;
      flex-direction: column;
    }
  }
  &__description,
  &__list {
    flex: 1 1 100%;
  }
  &__description {
    display: none;
    &-shorthand {
      @media (min-width: 500px) {
        display: none;
      }
    }
    @media (min-width: 500px) {
      display: flex;
    }
  }
  &__list {
    display: flex;
    list-style: none;
    @media (min-width: 500px) {
      flex-direction: column;
    }
  }
  &__item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    border: 0.1rem solid white;
    height: 4rem;
    border-right: none;
    &:not(:last-of-type) {
      border-bottom: none;
    }
    @media (min-width: 500px) {
      &:last-of-type {
        border-right: 0.1rem solid white;
        border-bottom: none;
      }
    }
    &-grey {
      background-color: rgba(255, 255, 255, 0.9);
      color: black;
      &:not(:last-of-type) {
        border-right: none;
      }
      @media (min-width: 500px) {
        border-bottom: none;
      }
      &:last-of-type {
        @media (min-width: 500px) {
          border-right: 0.1rem solid white;
        }
      }
    }
  }
  &__team {
    flex: 1;
    &:last-of-type {
      border-right: 0.1rem solid white;
    }
    @media (min-width: 500px) {
      display: flex;
      &:last-of-type {
        border-right: none;
        border-bottom: 0.1rem solid white;
      }
    }
  }
  &__keys {
    display: flex;
    font-size: 0.3rem;
    @media (min-width: 500px) {
      display: none;
    }
    @media (min-width: 300px) {
      font-size: 0.5rem;
    }
  }
  &__key {
    margin: 0.3rem 0.3rem 0 0;
  }
  @media (min-width: 300px) {
    font-size: 0.5rem;
  }
  @media (min-width: 380px) {
    font-size: 0.7rem;
  }
  @media (min-width: 500px) {
    font-size: 0.8rem;
  }
  @media (min-width: 700px) {
    font-size: 1rem;
  }
}
</style>

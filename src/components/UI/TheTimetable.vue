<template>
  <div v-if="tournamentPairs.length === 0" class="alert">
    <p>
      To play the game add some players in
      <router-link to="/" class="alert__link">here</router-link>
    </p>
  </div>
  <ul :key="round" v-for="(round, index) in tournamentPairs" class="timetable">
    <p>Runda {{ index + 1 }}</p>
    <li
      :key="pair"
      v-for="(pair, issue) in tournamentPairs[index]"
      class="timetable__item"
    >
      <game-form
        :index="index"
        :issue="issue"
        :pair="pair"
        :tournament-pairs="tournamentPairs"
      ></game-form>
    </li>
  </ul>
</template>

<script>
import GameForm from "./GameForm.vue";
export default {
  components: { GameForm },
  data() {
    return {
      tournamentPairs: [],
      results: [],
      homeResult: null,
      awayResult: null,
    };
  },
  computed: {
    players() {
      return this.$store.getters.players;
    },
  },
  methods: {
    makeTournamentPairings() {
      const playersList = this.players;
      if (playersList.length % 2 == 1) {
        playersList.push(null);
      }

      const playerCount = playersList.length;
      const rounds = playerCount - 1;
      const half = playerCount / 2;
      const tournamentPairs = [];
      const playersIndexes = playersList.map((_, i) => i).slice(1);

      for (let round = 0; round < rounds; round++) {
        const roundPairs = [];
        const newPlayersIndexes = [0].concat(playersIndexes);

        const firstHalf = newPlayersIndexes.slice(0, half);
        const secondHalf = newPlayersIndexes.slice(half, playerCount).reverse();

        for (let i = 0; i < firstHalf.length; i++) {
          roundPairs.push({
            home: playersList[firstHalf[i]],
            away: playersList[secondHalf[i]],
          });
        }

        playersIndexes.push(playersIndexes.shift());
        tournamentPairs.push(roundPairs);
      }
      this.tournamentPairs = tournamentPairs;
    },
  },
  mounted() {
    this.makeTournamentPairings();
  },
};
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  &__link {
    text-decoration: none;
    color: turquoise;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateX(0.5rem);
    }
  }
}
.timetable {
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  &__item {
    list-style: none;
  }
}
</style>

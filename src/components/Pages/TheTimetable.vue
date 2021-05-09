<template>
  <div>
    <!-- <p>{{ players }}</p> -->
    <ul
      :key="round"
      v-for="(round, index) in tournamentPairs"
      class="timetable"
    >
      <p>Runda {{ index + 1 }}</p>
      <li
        :key="pair"
        v-for="pair in tournamentPairs[index]"
        class="timetable__item"
      >
        <form class="form" @submit.prevent="clicked">
          <div class="form__container">
            <div class="form__item form__item-reversed">
              <label for="home" class="form__team">{{ pair.home.team }}</label>
              <input type="number" placeholder="Score" class="form__goals" />
            </div>
            <span>-</span>
            <div class="form__item">
              <label for="away" class="form__team form__team-reversed">
                {{ pair.away.team }}</label
              >
              <input type="number" placeholder="Score" class="form__goals" />
            </div>
          </div>
          <base-button type="submit">Confirm result</base-button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tournamentPairs: [],
    };
  },
  computed: {
    players() {
      return this.$store.getters.players;
    },
  },
  methods: {
    clicked(event) {
      console.log(event);
    },

    // showPlayers() {
    //   console.log(this.playersList);
    // },
    makeTournamentPairings() {
      const playersList = this.players;
      // console.log(playersList);
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
      // console.log(`losowanko ${tournamentPairs}`);
      // console.log(tournamentPairs);
      // return tournamentPairs;
    },
  },
  mounted() {
    this.makeTournamentPairings();
    console.log(this.tournamentPairs);
  },
};
</script>

<style lang="scss" scoped>
.timetable {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  &__item {
    list-style: none;
  }
}

.form {
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //   // width: 100%;
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    // background-color: pink;
    padding: 0.5rem;
    border: 0.1rem solid white;
  }
  &__item {
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex: 1 50%;
    padding: 0.5rem 0.5rem;
    &-reversed {
      justify-content: flex-end;
    }
  }
  &__team {
    // flex: ;
    // background-color: blue;
    &-reversed {
      order: 1;
    }
  }
  &__goals {
    // max-width: 5rem;
    padding: 0;
    margin: 0 0.2rem;
    width: 3.5rem;
    text-align: center;
    // flex: 0 1 auto;
  }
}
</style>

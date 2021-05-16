<template>
  <button @click="sprawdz">Sprawdźmy</button>
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
      <!-- <form class="form" @submit.prevent="clicked(index, issue)">
        <div class="form__container">
          <div class="form__item form__item-reversed">
            <label for="home" class="form__team">{{ pair.home.team }}</label>
            <input
              id="home"
              type="number"
              placeholder="Score"
              class="form__goals"
              ref="home"
              @input="homeResult = $event.target.value"
            />
          </div>
          <span>-</span>
          <div class="form__item">
            <label for="away" class="form__team form__team-reversed">
              {{ pair.away.team }}</label
            >
            <input
              id="away"
              type="number"
              placeholder="Score"
              class="form__goals"
              @input="awayResult = $event.target.value"
              ref="away"
            />
          </div>
        </div>
        <base-button type="submit">Confirm result</base-button>
      </form> -->
    </li>
  </ul>
</template>

<script>
import GameForm from "../UI/GameForm.vue";
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
    // gamesPlayed() {
    //   return this.$store.getters.gamesPlayed;
    // },
  },
  methods: {
    sprawdz() {
      console.log(this.gamesPlayed);
    },
    // clicked(index, issue) {
    //   console.log(this.tournamentPairs[index][issue].home.team);
    //   console.log(this.tournamentPairs[index][issue].away.team);
    //   console.log(this.homeResult);
    //   console.log(this.awayResult);
    //   // console.log(this.$refs.away.value);

    //   const gameResult = {
    //     homeTeam: this.tournamentPairs[index][issue].home.team,
    //     homeResult: this.homeResult,
    //     awayTeam: this.tournamentPairs[index][issue].away.team,
    //     awayResult: this.awayResult,
    //   };
    //   this.results.push(gameResult);

    //   this.homeResult = null;
    //   this.awayResult = null;

    //   console.log(this.awayResult);
    //   console.log(this.homeResult);
    //   console.log(this.results);
    // },

    // showPlayers() {
    //   console.log(this.playersList);
    // },
    makeTournamentPairings() {
      const playersList = this.players;
      // console.log(playersList);
      if (playersList.length % 2 == 1) {
        playersList.push(null); // tutaj jest problem z wyswietlaniem terminarza jezeli dodamy jako brakujacego parzystego gracza null -> wywala, ze 'nie mozna odczytac wartosci team of null' przy renderowaniu terminarza => albo zmienic null na jakis pusty obiekt z wlasciwoscia 'team', albo zablokowac mozliwosc gry, jezeli liczba graczy jest nieparzysta
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
    // console.log(this.tournamentPairs);
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
</style>

<template>
  <form class="form" @submit.prevent="clicked(index, issue)">
    <div class="form__container">
      <div class="form__item form__item-reversed">
        <label for="home" class="form__team">{{ pair.home.team }}</label>
        <input
          id="home"
          type="number"
          placeholder="Score"
          class="form__goals"
          ref="home"
          min="0"
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
          min="0"
          ref="away"
        />
      </div>
    </div>
    <base-button type="submit">Confirm result</base-button>
  </form>
</template>

<script>
export default {
  props: ["index", "issue", "pair", "tournamentPairs"],
  data() {
    return {
      results: [],
      homeResult: null,
      awayResult: null,
      formIsValid: true,
    };
  },
  computed: {
    gamesPlayed() {
      return this.$store.getters.gamesPlayed;
    },
  },
  methods: {
    formValidate() {
      this.formIsValid = true;
      if (this.homeResult === null || this.awayResult === null) {
        alert("Add score");
        this.formIsValid = false;
        return;
      }
    },
    clicked(index, issue) {
      this.formValidate();
      if (!this.formIsValid) {
        return;
      }
      // console.log(this.tournamentPairs[index][issue].home.team);
      // console.log(this.tournamentPairs[index][issue].away.team);
      // console.log(this.homeResult);
      // console.log(this.awayResult);
      // console.log(this.$refs.away.value);

      ////////////////////////       dodawac to ???        ///////////////////////////////
      // const homeTeamResult = `${this.tournamentPairs[index][issue].home.team}Result`;
      // const awayTeamResult = `${this.tournamentPairs[index][issue].away.team}Result`;
      // console.log(homeTeamResult);
      // console.log(awayTeamResult);
      ////////////////////////////////////////////////////////////////////////////////////

      const gameResult = {
        homeTeam: this.tournamentPairs[index][issue].home.team,
        homeResult: this.homeResult,
        awayTeam: this.tournamentPairs[index][issue].away.team,
        awayResult: this.awayResult,
        gameIsOver: true,
      };
      // this.results.push(gameResult);
      this.$store.dispatch("addGameResult", gameResult);
      // console.log(this.gamesPlayed);
      // console.log(this.awayResult);
      // console.log(this.homeResult);
      this.homeResult = null;
      this.awayResult = null;

      // console.log(this.awayResult);
      // console.log(this.homeResult);
      // console.log(this.results);
    },
  },
  // mounted() {
  //   console.log(this.issue);
  // },
};
</script>

<style lang="scss" scoped>
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

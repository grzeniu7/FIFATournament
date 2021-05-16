<template>
  <div v-if="gameIsOver" class="result">
    <div class="result__container">
      <p class="result__item">{{ tournamentPairs[index][issue].home.team }}</p>
      <p class="result__item result__item-score ">{{ homeResult }}</p>
    </div>
    <span class="result__dash">-</span>
    <div class="result__container result__container-reversed">
      <p class="result__item result__item-reversed">
        {{ tournamentPairs[index][issue].away.team }}
      </p>
      <p class="result__item result__item-score">{{ awayResult }}</p>
    </div>
  </div>
  <form class="form" @submit.prevent="submitGameForm(index, issue)" v-else>
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
      // results: [],
      homeResult: null,
      awayResult: null,
      formIsValid: true,
      gameIsOver: false,
      homeTeamPoints: null,
      awayTeamPoints: null,
    };
  },
  // computed: {
  //   gamesPlayed() {
  //     return this.$store.getters.gamesPlayed;
  //   },
  // },
  methods: {
    formValidate() {
      this.formIsValid = true;
      if (this.homeResult === null || this.awayResult === null) {
        alert("Add score");
        this.formIsValid = false;
      }
    },
    checkGameResult() {
      if (this.homeResult > this.awayResult) {
        this.homeTeamPoints = 3;
        this.awayTeamPoints = 0;
      } else if (this.homeResult === this.awayResult) {
        this.homeTeamPoints = 1;
        this.awayTeamPoints = 1;
      } else {
        this.homeTeamPoints = 0;
        this.awayTeamPoints = 3;
      }
    },
    submitGameForm(index, issue) {
      this.formValidate();
      if (!this.formIsValid) {
        return;
      }
      this.checkGameResult();
      // console.log(this.tournamentPairs[index][issue].home.team);
      // console.log(this.tournamentPairs[index][issue].away.team);
      // console.log(this.homeResult);
      // console.log(this.awayResult);
      // console.log(this.$refs.away.value);

      ////////////////////////       dodawac to ???       ///////////////////////////////
      // const homeTeamResult = `${this.tournamentPairs[index][issue].home.team}Result`;
      // const awayTeamResult = `${this.tournamentPairs[index][issue].away.team}Result`;
      // console.log(homeTeamResult);
      // console.log(awayTeamResult);
      ////////////////////////////////////////////////////////////////////////////////////
      // this.gameIndex = "";
      // this.gameIndex = `${index}${issue}`;
      // console.log(this.gameIsOver);

      const gameResult = [
        {
          team: this.tournamentPairs[index][issue].home.team,
          scoredGoals: Number(this.homeResult),
          lostGoals: Number(this.awayResult),
          points: Number(this.homeTeamPoints),
          homeTeam: this.tournamentPairs[index][issue].home.team,
          homeResult: this.homeResult,
        },
        {
          team: this.tournamentPairs[index][issue].away.team,
          scoredGoals: Number(this.awayResult),
          lostGoals: Number(this.homeResult),
          points: Number(this.awayTeamPoints),
          awayTeam: this.tournamentPairs[index][issue].away.team,
          awayResult: this.awayResult,
        },
        // gameIsOver: true,
      ];
      // this.results.push(gameResult);
      this.$store.dispatch("addGameResult", gameResult);

      // const gameResultToTable = {
      //   team:
      // } ;
      // console.log(this.gamesPlayed);
      // console.log(this.awayResult);
      // console.log(this.homeResult);

      this.gameIsOver = true;
      // this.homeResult = null;
      // this.awayResult = null;

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
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // margin-top: 0.5rem;
    // background-color: pink;
    padding: 0.5rem;
    border: 0.1rem solid white;
    @media (min-width: 700px) {
      flex-direction: row;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 50%;
    padding: 0.5rem 0.5rem;
    @media (min-width: 700px) {
      flex-direction: row;
    }
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
    width: 3.5rem;
    text-align: center;
    margin-top: 0.2rem;
    // flex: 0 1 auto;
    &:last-of-type {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    @media (min-width: 700px) {
      margin: 0 0.2rem;
    }
  }
}

.result {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.1rem solid white;
  padding: 0.5rem;
  margin: 0.7rem 0;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  &__container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    &-reversed {
      @media (min-width: 700px) {
        justify-content: flex-start;
      }
    }
  }
  &__item {
    padding: 0.2rem;
    margin: 0 0.2rem;

    &-reversed {
      @media (min-width: 700px) {
        order: 1;
      }
    }
    &-score {
      border: 0.1rem solid white;
    }
  }
  &__dash {
    display: inline-block;
    margin: 0 0.3rem;
  }
}
</style>

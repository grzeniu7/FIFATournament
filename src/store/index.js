import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      gamesResults: [],
      table: [],
      players: [],
      test: "siema",
    };
  },
  mutations: {
    addPlayersToState(state, payload) {
      state.players = payload;
    },
    addGameResult(state, payload) {
      state.gamesResults.push(payload);
    },

    addResultToTable(state, payload) {
      payload.forEach((element) => {
        const team = element.team;
        const scoredGoals = element.scoredGoals;
        const lostGoals = element.lostGoals;
        const goalsBalance = scoredGoals - lostGoals;
        const points = element.points;
        const teamResult = {
          team: team,
          scoredGoals: scoredGoals,
          lostGoals: lostGoals,
          goalsBalance: goalsBalance,
          gamesPlayed: 1,
          points: points,
        };

        const tableIndex = state.table.findIndex((el) => el.team === team);

        if (tableIndex > -1) {
          state.table[tableIndex].scoredGoals =
            state.table[tableIndex].scoredGoals + scoredGoals;
          state.table[tableIndex].lostGoals =
            state.table[tableIndex].lostGoals + lostGoals;
          state.table[tableIndex].goalsBalance =
            state.table[tableIndex].goalsBalance + goalsBalance;
          state.table[tableIndex].gamesPlayed++;
          state.table[tableIndex].points =
            state.table[tableIndex].points + points;
        } else {
          state.table.push(teamResult);
        }
      });
    },
  },
  actions: {
    addPlayersToState(context, payload) {
      context.commit("addPlayersToState", payload);
    },
    addGameResult(context, payload) {
      context.commit("addGameResult", payload);
      context.commit("addResultToTable", payload);
    },
  },
  getters: {
    testing(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    },
    games(state) {
      return state.gamesResult;
    },
    tournamentTable(state) {
      return state.table;
    },
  },
});

export default store;

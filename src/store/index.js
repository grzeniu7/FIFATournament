import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      gamesResult: [],
      players: [
        { id: 1, name: "Grzechu", team: "Real" },
        { id: 2, name: "Doncia", team: "Barka" },
        { id: 3, name: "Luki", team: "Ten tempy chuj za Arsenalem" },
        { id: 4, name: "Mucha", team: "Chuj wie" },
        { id: 5, name: "Kacper", team: "Zwinny jak polamany wengosz" },
        { id: 6, name: "Mosiu", team: "Haczy nosem o poprzeczke" },
      ],
      test: "siema",
    };
  },
  mutations: {
    addPlayersToState(state, payload) {
      state.players = payload;
    },
    addGameResult(state, payload) {
      state.gamesResult.push(payload);
    },
  },
  actions: {
    addPlayersToState(context, payload) {
      context.commit("addPlayersToState", payload);
    },
    addGameResult(context, payload) {
      context.commit("addGameResult", payload);
    },
  },
  getters: {
    testing(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    },
    gamesPlayed(state) {
      return state.gamesResult;
    },
  },
});

export default store;

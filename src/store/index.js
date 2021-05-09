import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
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
  },
  actions: {
    addPlayersToState(context, payload) {
      context.commit("addPlayersToState", payload);
    },
  },
  getters: {
    testing(state) {
      return state.test;
    },
    players(state) {
      return state.players;
    },
  },
});

export default store;

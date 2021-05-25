<template>
  <base-page>
    <player-form
      @send-data="getData"
      :competitors="this.competitors"
    ></player-form>
    <players-list
      v-if="this.competitorsExist"
      :competitors="this.competitors"
      :reset-list="resetPlayersList"
      @delete-player="deletePlayer"
    ></players-list>
  </base-page>
</template>

<script>
import PlayerForm from "../UI/PlayerForm.vue";
import PlayersList from "../UI/PlayersList.vue";
export default {
  components: { PlayerForm, PlayersList },
  data() {
    return {
      competitors: [],
      competitorsExist: false,
      playersListIsValid: true,
    };
  },
  methods: {
    getData(player) {
      this.competitors.push(player);
      this.competitorsExist = true;
    },
    resetPlayersList() {
      this.competitors = [];
      this.competitorsExist = false;
    },
    deletePlayer(index) {
      console.log(index);
      this.competitors.splice(index, 1);
    },
    validatePlayersList() {
      if (this.competitors.length === 0) {
        this.playersListIsValid = false;
        alert("Players list can't be empty");
      } else if (this.competitors.length % 2 !== 0) {
        this.playersListIsValid = false;
        alert("Number of players must be even");
      } else {
        this.playersListIsValid = true;
      }
    },
    addPlayers() {
      this.$store.dispatch("addPlayersToState", this.competitors);
    },
  },
  computed: {
    testing() {
      return this.$store.getters.testing;
    },
  },
  beforeUnmount() {
    this.addPlayers();
  },
  beforeRouteLeave(_, __, next) {
    this.validatePlayersList();
    if (this.playersListIsValid) {
      next();
    }
  },
};
</script>

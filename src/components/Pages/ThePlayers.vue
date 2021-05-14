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
    };
  },
  methods: {
    getData(player) {
      // console.log(player);
      this.competitors.push(player);
      this.competitorsExist = true;
      // console.log(this.competitors);
      // console.log(this.competitors);
    },
    resetPlayersList() {
      this.competitors = [];
      this.competitorsExist = false;
    },
    deletePlayer(index) {
      console.log(index);
      this.competitors.splice(index, 1);
    },
    addPlayers() {
      this.$store.dispatch("addPlayersToState", this.competitors);
    },
    // test() {
    //   console.log(this.testing);         //store testing
    // },
  },
  computed: {
    testing() {
      return this.$store.getters.testing;
    },
  },
  // mounted() {
  //   this.test();
  // },
  beforeUnmount() {
    this.addPlayers();
  },
};
</script>

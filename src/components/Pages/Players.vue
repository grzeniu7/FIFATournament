<template>
  <base-page>
    <the-form @send-data="getData"></the-form>
    <players-list
      v-if="this.competitorsExist"
      :competitors="this.competitors"
    ></players-list>
  </base-page>
</template>

<script>
import TheForm from "../UI/TheForm.vue";
import PlayersList from "../UI/PlayersList.vue";
export default {
  components: { TheForm, PlayersList },
  data() {
    return {
      competitors: [],
      competitorsExist: false,
    };
  },
  methods: {
    getData(competitors) {
      if (competitors.length > 0) {
        this.competitors = competitors;
        this.competitorsExist = true;
      }
    },
  },
};
</script>

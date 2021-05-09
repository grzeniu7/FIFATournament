<template>
  <div>
    <!-- <p>{{ players }}</p> -->
    <div :key="round" v-for="(round, index) in tournamentPairs">
      <p>{{ index }}</p>
      <div :key="pair" v-for="pair in tournamentPairs[index]">
        <p>{{ pair.home.team }} - {{ pair.away.team }}</p>
      </div>
    </div>
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

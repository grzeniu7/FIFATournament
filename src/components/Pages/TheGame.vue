<template>
  <base-page>
    <the-timetable></the-timetable>
    <the-table></the-table>
  </base-page>
</template>
<script>
import TheTimetable from "../UI/TheTimetable.vue";
import TheTable from "../UI/TheTable.vue";
export default {
  components: { TheTimetable, TheTable },
  beforeRouteLeave(_, __, next) {
    const userWantsToLeave = confirm(
      "Are You sure that You want to leave the game?"
    );
    if (userWantsToLeave) {
      next();
    }
  },
};
</script>

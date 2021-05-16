<template>
  <base-page>
    <the-timetable></the-timetable>
    <the-table></the-table>
  </base-page>
</template>
<script>
import TheTimetable from "./TheTimetable.vue";
import TheTable from "./TheTable.vue";
export default {
  components: { TheTimetable, TheTable },
};
</script>

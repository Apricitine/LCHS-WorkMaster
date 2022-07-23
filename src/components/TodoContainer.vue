<template>
  <main main-container>
    <ToDoSingle />
  </main>
</template>
<script lang="ts" setup defer>
import * as v from "vue";
import ToDoSingle from "@/assets/ToDoSingle.vue";

</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";
@import "../sass/mixins.scss";

main[main-container] {
  background: $accent-color-1;
  margin: 0;
  margin-top: 8% !important;
  height: 61%;
  border-radius: 12px;
  padding: 4%;
}
</style>
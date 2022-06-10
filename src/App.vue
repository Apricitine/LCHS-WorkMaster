<template>
  <container app-container="true">
    <main contains-main-content="true">
      <UserHi />
    </main>
  </container>
</template>
<style lang="scss">
@import "./sass/variables.scss";
@import "./sass/base.scss";

container[app-container="true"] {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $background-container-color;
  width: 100%;
  height: 100%;
}

main[contains-main-content="true"] {
  background: $main-content-coloring;
  width: $main-content-sizing;
  height: $main-content-sizing;
  border-radius: 12px;
  padding: 3%;
}
</style>
<script setup lang="ts" defer>
import UserHi from "./components/UserHi.vue";
import GoogleSignIn from "./components/GoogleSignIn.vue";
</script>

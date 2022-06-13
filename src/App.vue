<template>
  <container app-container="true">
    <main contains-main-content="true">
      <router-view></router-view>
      
    </main>
  </container>
</template>

<script setup lang="ts" defer>
import HomeView from "./pages/HomeView.vue";
import GoogleSignIn from "./pages/GoogleSignIn.vue";

</script>
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
  border: 1px solid $main-content-border-color;
}
</style>


<template>
  <container app-container="true">
    <main contains-main-content="true">
      <UserHi />
    </main>
  </container>
</template>

<script setup lang="ts">
  import UserHi from "./components/UserHi.vue";
</script>

<style>
  @import "./css/variables.css";
  @import "./css/basic.css";

  container[app-container="true"] {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-container-color);
    width: 100%;
    height: 100%;
  }
  main[contains-main-content="true"] {
    background: var(--main-content-coloring);
    width: var(--main-content-sizing);
    height: var(--main-content-sizing);
    border-radius: 12px;
    padding: 3%;
  }

</style>

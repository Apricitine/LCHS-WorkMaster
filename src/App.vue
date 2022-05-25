<template>
  <container app-container="true">
    <main contains-main-content="true">
jh
    </main>
  </container>
</template>

<script setup lang="ts">

</script>

<style>
  @import "./css/variables.css";
  @import "./css/basic.css";

  container[app-container="true"] {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(hsl(147, 93%, 59%), hsl(0, 0%, 28%));
    width: 100%;
    height: 100%;
  }
  main[contains-main-content="true"] {
    background: white;
    width: var(--main-content-sizing);
    height: var(--main-content-sizing);
  }

  
</style>

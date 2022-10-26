<template>
  <main>
    <h1>Credits</h1>
    <ul v-auto-animate>
      <li v-for="credit in credits">
        {{ credit.title }} -
        {{ `${credit.description ? credit.description + " |" : ""}` }}
        {{ credit.attribution }}
      </li>
    </ul>
  </main>
</template>
<script lang="ts" setup defer>
interface CreditIndice extends Object {
  title: string;
  description?: string;
  attribution: string;
}

let credits: Array<CreditIndice> = [
  { title: "Original Idea", attribution: "Apricitine" },
  {
    title: "Core Backend",
    description: "Firebase Realtime Database",
    attribution: "Apricitine",
  },
  { title: "Website and UI", description: "Vue", attribution: "Apricitine" },
  { title: "Chrome Extension", description: "", attribution: "Apricitine" },
  { title: "Core Contributions", description: "People who helped me out!", attribution: "uh, none yet lol" }
];
</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";
@import "../sass/mixins.scss";

main {
  padding: 5%;
}
</style>

<template>
  <h1 user-hello="true">{{ welcomeMessage }}</h1>
</template>
<script lang="ts" setup defer>
import * as v from "vue";
import useStore from "@/store";
import * as vuse from "@vueuse/core";
import { storeToRefs } from "pinia";

let UserHiStore = storeToRefs(useStore());
let username = UserHiStore.username;

console.log(username);

function randomWelcomeCreator(): string {
  const psuedoRandom: number = Math.random();
  let returnString: string;
  if (psuedoRandom > 0.8) {
    returnString = `Welcome, ${username}.`;
  } else if (psuedoRandom > 0.6 && psuedoRandom < 0.8) {
    returnString = `Hey there ${username}!`;
  } else if (psuedoRandom > 0.4 && psuedoRandom < 0.6) {
    returnString = `What's up, ${username}?`;
  } else if (psuedoRandom > 0.2 && psuedoRandom < 0.4) {
    returnString = `It's you, ${username}!`;
  } else {
    returnString = `Hi ${username}.`;
  }
  return returnString;
}
let welcomeMessage = v.ref(randomWelcomeCreator());
</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";
@import "../sass/mixins.scss";

h1[user-hello="true"] {
  @include animation-slide-from-top(
    1s,
    $welcome-animation-margin-delta,
    $welcome-animation-final-color,
    $welcome-initial-font-size,
    $welcome-final-font-size
  );

  border-radius: 12px;
  background-color: $accent-color-1;
  padding: 2%;
}
</style>

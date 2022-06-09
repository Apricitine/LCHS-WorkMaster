<template>
  <h1 user-hello="true">{{ `${WelcomeMessage}` }}</h1>
</template>
<style lang="scss">
@import "../sass/variables.scss";

h1[user-hello="true"] {
  font-size: $welcome-initial-font-size;
  margin: 0%;
  text-align: center;
  font-family: $default-font-family;
  color: $welcome-animation-initial-color;
  animation: fade-in 1s forwards;
}

@keyframes fade-in {
  100% {
    color: $welcome-animation-final-color;
    margin: 0% + $welcome-animation-margin-delta;
    font-size: $welcome-final-font-size;
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      WelcomeMessage: randomWelcome
    };
  }
}

let fetchedUsername = fetch("https://classroom.googleapis.com/v1/courses", {})
  .then(response => response.json())
  .then(data => {
    console.log(data);
});
let randomWelcomeCreator = ():string => {
  const psuedoRandom:number = Math.random();
  let returnString:string;
  if (psuedoRandom > 0.8) {
    returnString = `Welcome, ${fetchedUsername}.`;
  } else if (psuedoRandom > 0.6 && psuedoRandom < 0.8) {
    returnString = `Hey there ${fetchedUsername}!`;
  } else if (psuedoRandom > 0.4 && psuedoRandom < 0.6) {
    returnString = `What's up, ${fetchedUsername}?`;
  } else if (psuedoRandom > 0.2 && psuedoRandom < 0.4) {
    returnString = `Nice to see you, ${fetchedUsername}.`;
  } else {
    returnString = `Hi ${fetchedUsername}.`;
  }
  return returnString;
};
const randomWelcome = randomWelcomeCreator();

</script>

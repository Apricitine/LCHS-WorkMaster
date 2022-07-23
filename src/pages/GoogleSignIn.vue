<template>
  <h1>Sign In With Google</h1>
</template>
<script lang="ts" setup defer>
import * as v from "vue";
</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";

.g-signin2 {
  background-color: rgb(255, 255, 255);
  width: 42%;
  height: 60%;
  border-radius: 140px 40px 120px 50px / 100px 60px 70px 30px; 
}
container[isSignInContainer="true"] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 100%;
}
h1 {
  font-size: 3rem;
  text-align: center;
}
</style>

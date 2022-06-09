<template>
  <h1>Sign In With Google</h1>
  <container isSignInContainer="true">
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </container>
</template>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/basic.scss";

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
.abcRioButtonContentWrapper {
  background-color: rgb(255, 255, 255);
  width: 42%;
  height: 60%;
  border-radius: 140px 40px 120px 50px / 100px 60px 70px 30px; 
}
</style>
<script lang="ts">
export default {
  data() {

  }
}
function onSignIn(googleUser:any):void {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
</script>
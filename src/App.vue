<template>
  <container app-container="true">
    <main contains-main-content="true">
      <HomeView/>
    </main>
  </container>
</template>

<script setup lang="ts" defer>
import UserHi from "./components/UserHi.vue";
import HomeView from "./pages/HomeView.vue";
import GoogleSignIn from "./pages/GoogleSignIn.vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUoopz44L_t9ugGvg3cUo7uEVg0zwcTx4",
  authDomain: "lchs-workmaster.firebaseapp.com",
  projectId: "lchs-workmaster",
  storageBucket: "lchs-workmaster.appspot.com",
  messagingSenderId: "746712589995",
  appId: "1:746712589995:web:131506c2bbfbe59b9c39ee",
  measurementId: "G-QCK7E23BGH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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


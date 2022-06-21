<template>
  <container app-container="true">
    <main contains-main-content="true">
      <nav top-navigation-bar="true">
        <button nav-button home>
          <router-link to="/">Home</router-link>
        </button>
        <button nav-button about_>
          <router-link to="/about">About</router-link>
        </button>
        <button nav-button setting>
          <router-link to="/settings">Settings</router-link>
        </button>
      </nav>
      <router-view v-slot="{ Component }">
        <transition name="fadeTransition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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

nav[top-navigation-bar="true"] {
  display: flex;
  justify-content: space-around;
  margin: 6%;
}

button {
  background: hsla(0, 0%, 0%, 0);
  border: none;
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
  }
}

.fadeTransition-enter-from,
.fadeTransition-leave-to {
  opacity: 0;
}

.fadeTransition-enter-active,
.fadeTransition-leave-active {
  transition: opacity 0.25s ease-out;
}
</style>


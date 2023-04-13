<template>
  <container app-container="true">
    <main contains-main-content="true">
      <nav top-navigation-bar="true">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition name="fadeTransition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </container>
</template>

<script lang="ts" setup defer>
import { vAutoAnimate } from "@formkit/auto-animate";
</script>
<style lang="scss">
@import "./sass/variables.scss";
@import "./sass/base.scss";
@import "./sass/mixins.scss";

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
  user-select: none;
}

a {
  background: hsla(0, 0%, 0%, 0);
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  transition: border-radius 0.2s ease-in-out, background 0.3s ease-in-out;
  padding: 2%;
  margin: 1%;
  text-decoration: none;

  // wow, useful fix!
  // thanks :has selector
  &:has(a.router-link-active) {
    background: $accent-color-1;
    border-radius: 2px;
  }

  &:hover {
    background: $accent-color-1;
    border-radius: 2px;
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

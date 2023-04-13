<template>
  <main section-wrapper>
    <section main-todo-input>
      <input type="text" v-model="title" title-input>
    </section>
    <section>
      <input type="text" v-model="longDesc">
    </section>
  </main>
</template>
<script lang="ts" setup defer>
let title: string = "hello";
let longDesc: string;

</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";
@import "../sass/mixins.scss";

input {
  background: transparent;
  border: none;

  &:focus-visible {
    border: none;
  }
}

[section-wrapper] {
  background-color: hsl(279, 63%, 62%);
  border-radius: 12px;
  padding: 2.5%;
}
</style>
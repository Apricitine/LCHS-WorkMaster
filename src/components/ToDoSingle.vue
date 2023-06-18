<template>
  <main section-wrapper>
    <section main-todo-input>
      <input type="text" title-input v-if="true">
    </section>
    <section>
      <input type="text">
    </section>
  </main>
</template>

<script lang="ts" setup defer>

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
  background-color: hsla(279, 99%, 37%, 0);
  border-radius: 12px;
  padding: 2.5%;
}
</style>
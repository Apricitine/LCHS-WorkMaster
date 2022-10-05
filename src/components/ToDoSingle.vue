<template>
  <main section-wrapper>
    <section main-todo-input>
      <input type="text" v-model="title" title-input>
    </section>
    <section>
      <input type="text" v-model="longDesc">
    </section>
    <section>
    </section>
  </main>
</template>
<script lang="ts" setup defer>
import * as v from "vue";

let title:object = v.ref("");
let longDesc:any = v.ref("");


</script>
<style lang="scss">
@import "../sass/variables.scss";
@import "../sass/base.scss";
@import "../sass/mixins.scss";

input {
  background: transparent;
  border: none;
}

[section-wrapper] {
  background-color: rgb(98, 219, 98);
}
</style>
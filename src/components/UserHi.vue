<template>
  <h1 user-hello="true">Hi there [UserName]</h1>
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
</template>
<style>
  h1[user-hello="true"] {
    font-size: 2.8rem;
    margin: 0%;
    text-align: center;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgb(212, 255, 225, 0);
    animation: fade-in 1s forwards;
  }

  @keyframes fade-in {
    100% {
      color: rgb(212, 255, 225);
      margin: 3%;
      font-size: 3.1rem;
    }
  }

</style>
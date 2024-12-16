<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">
     

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

  <RouterView />
</template>

<style scoped>

</style>

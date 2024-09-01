

<template>
  <header>
    <nav>
      <RouterLink to="/intro">Home</RouterLink>
      <RouterLink to="/resume-search">My resume search tool</RouterLink>
    </nav>
  </header>
  <Intro msg="Blazing Sandals Consulting"/>
  <img width="500px" alt="My logo" src="./assets/icon-transparent.png">
  <p></p>
  <p></p>
  <h2>Check out this cool stuff did I</h2>
  <p></p>


</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Intro from './components/Intro.vue'


export default {
  name: 'App',
  components: {
    Intro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

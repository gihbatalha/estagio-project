<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Categories from './components/Categories.vue'
export default {
  name: 'App',
  components: {
    Categories
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

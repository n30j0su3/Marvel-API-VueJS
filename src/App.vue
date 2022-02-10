<template>
  <v-app id="app">
    <navbar></navbar>
    <router-view />
  </v-app>
</template>

<script>
import navbar from './components/pages/navbar.vue'
export default {
  name: 'App',
  components:{ navbar }
}
</script>
<style scoped>
#app{
  background: black;
}
</style>
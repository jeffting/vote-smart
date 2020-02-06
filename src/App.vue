<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');
#app {
  font-family: 'Open Sans', sans-serif; /* Avenir', Helvetica, Arial, sans-serif; */
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
}
h1, h2, h3 {
  color: #222222;
  font-weight: 600;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 32px;
}
h3 {
  font-size: 24px;
}
p {
  font-size: 16px;
}
</style>

<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade"
        mode="out-in">
      <router-view/>
    </transition>
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
body {
  margin: 0;
}
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
  text-transform: uppercase;
}
h2 {
  font-size: 32px;
  text-transform: uppercase;
}
h3 {
  font-size: 24px;
  text-transform: uppercase;
}
p {
  font-size: 16px;
}
.issue-img-container {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    object-fit: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

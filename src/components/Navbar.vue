<template>
  <div>
      <div class="nav-container">
          <div class="icon-container">
          <img class="img-container" src="../assets/checkmark.png">
              <span style="float:right; margin-left: 8px; font-weight: 900">VOTE SMART</span>
          </div>
          <div class="tab-container">
              <router-link class="tab-button"
                to="/"
              >Home</router-link>
              <router-link class="tab-button"
                to="/candidates"
              >Candidates</router-link>
              <router-link class="tab-button"
                to="/issues"
              >Issues</router-link>
              <router-link class="tab-button"
                to="/quiz"
              >Quiz</router-link>
          </div>
      </div>
      <div class="full-navbar"></div>
    </div>
</template>
<script>
export default {
    methods: {
    }
}
</script>
<style scoped>
.nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
}
.tab-container {
    display: flex;
    flex-direction: row;
}
.icon-container {
  color: #222222;
  font-size: 32px;
}
.tab-button {
    padding: 8px;
    text-decoration: none;
    color: #222222;
    font-size: 20px;
}
.tab-button:hover {
  background-color: #222222;
  color: white;
  border-radius: 4px;
}
.full-navbar {
  border-bottom-style: solid;
  border-width: 10px;
  border-top-color: #002868;
  border-top-style: solid;
  border-bottom-color: #BF0A30;
  margin-left: -8px;
  margin-right: -8px;
}
.img-container {
  width: 42px;
}
</style>
<template>
  <div>
      <div class="nav-container">
          <router-link to="/" class="icon-container">
          <img class="img-container" src="../assets/checkmark.png">
              <span style="float:right; margin-left: 8px; font-weight: 900">VOTE SMART</span>
          </router-link>
          <div class="tab-container">
              <router-link class="tab-button" :class="{ 'selected': page === 'home' }"
                to="/"
              >Home</router-link>
              <router-link class="tab-button"
                to="/candidates" :class="{ 'selected': page === 'candidates' }"
              >Candidates</router-link>
              <router-link class="tab-button"
                to="/issues" :class="{ 'selected': page === 'issues' }"
              >Issues</router-link>
              <router-link class="tab-button"
                to="/quiz" :class="{ 'selected': page === 'quiz' }"
              >Quiz</router-link>
          </div>
      </div>
      <div class="full-navbar"></div>
    </div>
</template>
<script>
export default {
    computed: {
      page() {
        return this.$store.getters.getPage();
      }
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
  font-size: 32px;
  color: #222222;
}
.tab-button {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #222222;
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
.selected {
  color: white;
  background-color: #222222;
  border-radius: 4px;
}
</style>
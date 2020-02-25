<template>
  <div>
    <div class="main-nav">
        <div class="nav-container">
            <router-link to="/" class="icon-container">
            <img class="img-container" src="../assets/checkmark.png">
                <span style="float:right; margin-left: 8px; font-weight: 900"><span style="color: #BF0A30">VOTE</span><span style="color: #002868">SMART</span></span>
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
      <div style="height: 87px;"></div>
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
    padding: 2px 8px 2px 8px;
    margin-right: 2px;
    margin-left: 2px;
    text-decoration: none;
    font-size: 20px;
    color: #222222;
    border: 4px solid transparent;
}
.tab-button:hover {
    border-radius: 4px;
  border-style: solid;
  border-color: #002868 #BF0A30 #BF0A30 #002868;
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
  border-radius: 4px;
  border: 4px solid;
  border-color: #002868 #BF0A30 #BF0A30 #002868; 
} 
.main-nav {
  padding: 8px 8px 0px 8px; 
  background-color: #f4f4f4;
  position: fixed;
  width: 100vw;
}
</style>
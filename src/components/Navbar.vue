<template>
    <div class="nav-container">
        <div class="icon-container">
            Vote Smart
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
}
.tab-container {
    display: flex;
    flex-direction: row;
}
.icon-container {
}
.tab-button {
    padding: 5px;
}
</style>
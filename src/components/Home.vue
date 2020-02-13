<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div>
            <h1 class="vote-text title-text">VOTE</h1>
            <h1 class="smart-text title-text">SMART</h1>
        </div>
        <h3>MAKE AN INFORMED DECISION IN THE 2020 PRESIDENTIAL ELECTION</h3>
        <h3>EVEN WITH YOUR BUSY SCHEDULE</h3>
        <br>
        <h3>WHO DO YOU AGREE WITH?</h3>

        <div>
            <button @click="routeToQuiz" type="button">TAKE THE QUIZ</button>
            <br>
            <button @click="routeToCandidates" type="button">VIEW THE CANDIDATES</button>
            <br>
            <button @click="routeToIssues" type="button">VIEW THE ISSUES</button>
        </div>
    </div>
</template>

<script>
export default {
    // this.$router.push('Home') 
    data() {
        return {
        };
    },
    methods: {
        routeToIssues() {
            this.$router.push('Issues')
        },
        routeToQuiz() {
            this.$router.push('Quiz')
        },
        routeToCandidates() {
            this.$router.push('Candidates')
        }
    }
};
</script>

<style scoped>

.vote-text {
    color: #BF0A30;
}
.smart-text {
    color: #002868;
}
.title-text {
    font-size: 150px;
    display:inline;
}
button {
    background-color: #222222;
    color: white;
    border-radius: 5px;
    font-size: 24px;
    width: 288px;
    height: 40px;
    margin-bottom: 8px;
}
h3 {
    margin-top: -10px;
}

</style>
<template>
    <div>
        <div class="home-container">
            <br>
            <br>
            <!-- <div>
                <h1 class="vote-text title-text">VOTE</h1>
                <h1 class="smart-text title-text">SMART</h1>
            </div> -->

            <!-- <h3>MAKE AN INFORMED DECISION IN THE 2020 PRESIDENTIAL ELECTION</h3>
            <h3>EVEN WITH YOUR BUSY SCHEDULE</h3>
            <br>
            <h3>WHO DO YOU AGREE WITH?</h3> -->
            <div class="top_div">
                <div class="information">
                    <h2 class="tagline">Make an informed decision in the 2020 presidential election. Even with your busy schedule.</h2>

                    <div>
                        <button @click="routeToQuiz" type="button">TAKE THE QUIZ</button>
                        <p class="link-candidates" @click="routeToCandidates">VIEW THE CANDIDATES</p>
                        <!-- <br>
                        <button @click="routeToCandidates" type="button">VIEW THE CANDIDATES</button>
                        <br>
                        <button @click="routeToIssues" type="button">VIEW THE ISSUES</button> -->
                    </div>
                </div>
                <img class="main_picture" src="../assets/vote2.jpg">
            </div>
        </div>
        <div  style="background-color: #f4f4f4">
            <issues></issues>
        </div>
    </div>
</template>

<script>
import Issues from "./issues";
export default {
    // this.$router.push('Home') 
    data() {
        return {
        };
    },
    components: {
        Issues
    },
    beforeCreate() {
        this.$store.dispatch('setPage', 'home');
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
        },
        issueClick(issue) {
            this.$router.push({name: 'Issue', params: {issue: issue}})
        }
    }
};
</script>

<style scoped>

/* .vote-text {
    color: #BF0A30;
}
.smart-text {
    color: #002868; 
}
*/
.home-container {
    margin-left: 5%;
    margin-right: 5%;
    text-align: left;
    margin-bottom: 4%;
}
.top_div {
    /* display: flex; */
    height: 100%; 
    position: relative;
}
.information {
    display: inline;
    width: 45%;
    position: absolute;
    top: 23%;
    margin-left: 5%;
    margin-top: 32px;
}
.main_picture {
    display: inline;
    width: 100%;
    height: 100%;
    align: center;
    border-radius: 4px;
    
}
.tagline {
    text-transform: None;
    width: 80%;
}
.link-candidates {
    text-decoration: underline;
    display:inline;
    color:  #222222;
    font-weight: 600;
    margin-left: 24px;
}
.link-candidates:hover {
    cursor: pointer;
}
.title-text {
    font-size: 150px;
    display:inline;
}
.issues-container {
    background-color: #F4F4F4
}
button {
    background-color: #222222;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    width: 200px;
    height: 56px;
    margin-bottom: 8px;
    font-weight: 600;
}
button:hover {
    cursor: pointer;
}


</style>
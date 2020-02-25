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
                    <p class="title">VOTESMART</p>

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
                <img class="main_picture" src="../assets/vote1.jpg">`
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
    width: 50%;
    position: absolute;
    top: 27%;
    margin-left: 5%;
}
.main_picture {
    display: inline;
    width: 100%;
    height: 100%;
    align: center;
    
}
.title {
    text-align: left;
    margin-bottom: -20px;
    color:  #222222;
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
.col-flex {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    /* height: 70vh; */
    margin-bottom: 32px;

    
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 2;
}
.title-flex-item {
    flex-grow: .6;
}
.flex-item-row {
    width: 22%;
    margin-bottom: 8px;
    padding: 16px 8px 16px 8px;
    border-radius: 8px;
    /* -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1); */
}
.flex-item-row:hover { 
    -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
}
.flex-item-row:hover {
    cursor: pointer;
}
.issue-title {
    margin-top: 8px;
    margin-bottom: 0px;
}
.issue-info {
    margin: 0px;
    text-align: middle;
    text-justify: inter-word;
}
button {
    background-color: #222222;
    color: white;
    border-radius: 5px;
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